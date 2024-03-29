const express = require("express");
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const cors = require("cors");
const mysql = require("mysql");
const multer = require("multer");

const build_directory = path.join(__dirname, '../build');

//save storage space
const this_storage = multer.diskStorage({
    destination: (req, file, cb) =>{
        cb(null, build_directory + "/images/" );
    },

    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
})

//used to store data with the above storage space
const upload = multer({storage : this_storage});


const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'DB@dmin422!',
    //password: 'password',
    database: 'store',
});


//used to translate files between backend and frontend
//bodyparser to get code from frontend to backend
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(build_directory));



/*-------------------------LOGIN/REGISTER APIS-----------------------------*/

//post function to get login input from front
app.post('/api/login/auth', (req,res) =>{
    //console.log("Post called") 
    const email = req.body.PassName
    const password = req.body.PassPW
    sqlFind = "SELECT * FROM users WHERE user_email = ?;" //command to mysql to find user name from user table
    db.query(sqlFind,[email],(err,result) => {
        if(err){
            //console.log(err.message);
        }
        if (result == ""){ //if the result is empty that means nothing was found
            res.send("USERERR");
        }else {
            sqlFind = "SELECT user_id, user_admin, user_first_name FROM users WHERE user_email = ? and password = ?;" // checks through password after name
            db.query(sqlFind,[email, password],(err,result) => {
                if (result == ""){
                    //console.log("Incorrect password");
                    res.send("PASSERR")
                }else {
                    //console.log("Authenticated")
                    //console.log(result)
                        //only sends data if both name and password match
                    res.send(result);
                }
            })
        }
    })
})

//TO-DO this still needs to be modified to fit with zakariah's front end
app.post("/api/register/insert",(req,res) => {
    const id = null
    const first = req.body.first
    const last = req.body.last
    const email = req.body.email
    const addr = req.body.address
    const number = req.body.number
    const pw = req.body.password
    console.log("here")
    const sqlInsert="INSERT INTO users (user_id, user_email, user_first_name, user_last_name, user_phone,user_address,password) VALUES (?,?,?,?,?,?,?);"
    db.query(sqlInsert,[id,email,first,last,number,addr,pw],(res,err) => {
    });

})

app.post("/api/register/validate",(req,res) => {
    const email = req.body.email
    const sqlFind ="SELECT user_email FROM users WHERE user_email = ?";
    db.query(sqlFind,[email],(err,result)=>{
        console.log(result)
        if(result == ""){
            res.send("valid")
        }else{
            res.send("not valid")
        }
    })
})


/*-------------------------INVENTORY APIS-----------------------------*/


app.get('/api/get/inventory', (req, res) => {
    //console.log("fetch inventory called") //debugging purposes
    const sqlSelect = "SELECT * FROM item"; //mysql command to get full list of users
    db.query(sqlSelect,(err,result) =>{
        if(err){
            //console.log(err.message);
        }
	    res.send(result); //sends over the list of inventory
    })
});




app.post("/api/modifyItem", (req,res) => {
    
    const i_id = req.body.id
    const i_id_update = req.body.updated_id
    const i_type = req.body.type
    const i_name = req.body.name
    const i_desc = req.body.description
    const i_price = req.body.price
    const i_stock = req.body.stock
    const i_sale = req.body.sale
    const i_sale_price = req.body.sale_price
    const i_image_name = req.body.image

    console.log(i_id) 
    //console.log("New image name is", i_image_name);

    const query = 'UPDATE `item` '+
                  'SET `item_id` = ?, `item_type` = ?, `item_name` = ?, `item_description` = ?, `item_price` = ?, `item_stock` = ?, `item_onsale` = ?, `item_saleprice` = ?, `item_image` = ?' +
                  'WHERE `item_id` = ?';

    const values = [i_id_update, i_type, i_name, i_desc, i_price, i_stock, i_sale, i_sale_price, i_image_name, i_id];
    db.query(query,values,(err,res) =>{
        if(err){
            //console.error(err.message);
        }
        //console.log(res)
    });

})

//posts an image to the server images folder 
app.post("/api/upload/image", upload.single("image"));


app.post("/api/insert/item", (req, res) => {
    const i_id = req.body.id
    const i_name = req.body.name
    const i_type = req.body.type
    const i_desc = req.body.description
    const i_price = req.body.price
    const i_stock = req.body.stock
    const i_sale = req.body.sale
    const i_sale_price = req.body.sale_price
    const i_image_name = req.body.image
    

    const sqlInsert="INSERT INTO item (item_id, item_type, item_name, item_description, item_price, item_stock, item_onsale, item_saleprice, item_image) VALUES (?,?,?,?,?,?,?,?,?);"
    db.query(sqlInsert, [i_id, i_type, i_name, i_desc, i_price, i_stock, i_sale, i_sale_price, i_image_name], (res, err) => {
        //console.log(res);
    });
});


/*-------------------------USER APIS-----------------------------*/


app.get("/api/get/users", (req, res) => {
    console.log("fetch users called") //debugging purposes
    const sqlSelect = "SELECT * FROM users"; //mysql command to get full list of users
    db.query(sqlSelect,(err,result) =>{
        if(err){
            console.log(err.message);
        }
	    res.send(result); //sends over the list of inventory
    })
});

//api for insert 
app.post("/api/insert",(req,res) => {
    //use body parser to get information from frontend, and stored
    const backname = req.body.PassName
    const backpassword = req.body.PassPW

    const sqlInsert = "INSERT INTO users (user_first_name,password) VALUES (?,?);" //mysql command to insert new elements 
    db.query(sqlInsert,[backname,backpassword])
});


/*--------------ADMIN API TO MODIFY USERS------------*/
//Kevin Chan
//api call to look for a user from db
app.post("/api/admin/user/find",(req,res) => {
    //store info recieved from frontend
    const Email = req.body.email
   //SQL command to look for a specifc user from a specific table
   sqlFind = "SELECT user_email FROM users WHERE user_email = ?;" 
    db.query(sqlFind,[Email],(err,result) => { //query the info and place the variable into the "?"
        if ( result == ""){ //if the result is empty that means nothing was found
            res.send(result)//sends an empty array if nothing is found
        }else {
            sqlReturn = "SELECT * from users WHERE user_email =?;" //sql command to return the entire row of info
            db.query(sqlReturn,[Email],(err,result) => {
                res.send(result) // sends the whole row of info of that user.

            })
          
           
        }
                
        
    })
});

//Kevin Chan
//api to update a user from the admin page
app.post("/api/admin/user/update",(req,res) => {
    //storing info recievied from frontend
    const Email = req.body.email
    const FirstName = req.body.firstname
    const LastName = req.body.lastname
    const Phone = req.body.phone
    const Address = req.body.address
    const Password = req.body.password
    const UserID = req.body.userID
   

    //SQL command to update all the info from the user.
    sqlUpdate = "UPDATE users SET user_email = ?, user_first_name = ?, user_last_name = ?, user_phone =?, user_address = ?, password = ? WHERE user_id = ?"
    db.query(sqlUpdate,[Email,FirstName,LastName,Phone,Address,Password,UserID]);

    sqlFind = "SELECT * FROM users WHERE user_email = ?;" 
    db.query(sqlFind,[Email],(err,result) => {
        res.send(result)
    })


})




/*---------------------------DISCOUNTS----------------------*/

app.post("/api/admin/discount/get",(req,res) => {

    const sqlGet = "SELECT * from discounts"
    db.query(sqlGet,(err,result) => {
        res.send(result)
    });
});

app.post("/api/get/discount", (req, res) => {
    const code = req.body.code
    const sql = "SELECT * from discounts WHERE discount_code = ?"
    db.query(sql, code, (err, result) => {
        if(err){
            console.log(err.message);
        }
        console.log(result);
        res.send(result);
    })
})

app.post("/api/admin/discount/insert",(req,res) =>{

    const Code = req.body.code
    const Percent = req.body.percent
    //console.log(Code)
    //console.log(Percent)
    const sqlInsert = "INSERT INTO discounts (discount_code,discount_percent) VALUES (?,?);"
    db.query(sqlInsert,[Code,Percent])
})

app.post('/api/modify/discount', (req, res) => {
    const code = req.body.code;
    const perc = req.body.percent;
    const id = req.body.id;
    const values = [code, perc, id]
    const query = 'UPDATE discounts SET discount_code = ?, discount_percent = ? WHERE discount_id = ?'

    db.query(query,values, (err, res) => {
        if(err){
            console.log(err.message);
        }
    });


})

/*-------------------------CART APIS-----------------------------*/

app.post('/api/addToCart', (req, res) => {
    const uid = req.body.uid;
    const id = req.body.id;
    const qty = req.body.qty;

    const sqlInsert = "INSERT INTO cart (user_id, item_id, item_qty) VALUES (?,?,?);"
    db.query(sqlInsert,[uid, id, qty], (err, response) =>{
        if(err){
            console.log(err.message);
            res.send(err)
        }else{
            res.send(response)
        }
    });
})

app.post('/api/updateCartQty', (req, res) => {
    const i_item_id = req.body.item_id
    const qty = req.body.qty;

    //sqlUpdate = "UPDATE cart SET item_qty = ?, item_id = ? WHERE id = ?"
    sqlUpdate = "UPDATE cart SET item_qty = ? WHERE item_id = ?"
    const values = [qty, i_item_id];

    db.query(sqlUpdate,values,(err,response) => {

        if(err){
            console.error(err.message);
            res.send(error)
        }else{
            res.send(response)
        }
    });

})

//Get this user's cart
app.post('/api/get/cart', (req, res) => {
    console.log("Get cart called");
    const id = req.body.id; //get this users cart
    query = "SELECT * from cart WHERE user_id = ?";
    db.query(query, id, (err, result) => {
        if(err){
            console.error(err.message);
        }
        res.send(result);
    })
})

app.post('/api/cart/checkout', (req, res) => {
    const date = req.body.date
    const items = JSON.stringify(req.body.items)
    const total = req.body.t_total
    const user = req.body.user
    const status = 0

    const query = 'INSERT INTO orders (orders_date, orders_items, orders_total, orders_user, orders_completed) VALUES (?,?,?,?,?);'
    const values = [date, items, total, user, status]

    db.query(query, values, (err, response) =>{
        if(err){
            console.log(err.message);
            res.send(err)
        }
        res.send(response)
    })

})

/*
    Used to update the inventory after a user has checked out
*/
app.post('/api/item/updateQty', (req, res) =>{
    const id = req.body.id
    const qty = req.body.qty
    console.log("quantity inserted is qty")
    const update_query = 'UPDATE item SET item_stock = ? WHERE item_id = ?'
    db.query(update_query, [qty, id], (err, response) => {
        if(err){
            console.log(err.message)
            res.send(err)
        }
        res.send(response)
    })

})

app.post('/api/cart/delete', (req, res) => {
    console.log("Db to delete cart")
    const uid = req.body.user

    const query = 'DELETE FROM cart WHERE user_id = ?'
    db.query(query, uid, (err, response) => {
        if(err){
            console.log(err,message);
            res.send(err)
        }
        res.send(response);
    })
})

app.post('/api/cart/delete/item', (req, res) => {
    console.log("Db to delete cart item")
    const uid = req.body.user
    const id = req.body.id

    const query = 'DELETE FROM cart WHERE user_id = ? and item_id = ?'
    db.query(query, [uid,id], (err, response) => {
        if(err){
            console.log(err,message);
            res.send(err)
        }
        res.send(response);
    })
})

/*


/*-------------------------ORDER APIS-----------------------------*/

/*Cooper Wineberg*/
app.get('/api/get/orders', (req, res) => {
    console.log("fetch orders called") //debugging purposes
    const sqlSelect = "SELECT * FROM orders"; //mysql command to get full list of orders
    db.query(sqlSelect,(err,result) =>{
        console.log(result);
	    res.send(result); //sends over the list of orders
    })
});

app.post('/api/orders/update', (req, res) => { // insert
    console.log("update orders called") //debugging purposes

    const orders_id = req.body.orders_id
    const orders_completed = req.body.orders_completed;

    const sqlUpdate = "UPDATE orders SET orders_completed = ? WHERE orders_id = ?"; //mysql command to get full list of orders
    const values = [orders_completed, orders_id];
    console.log(orders_id, orders_completed)
    db.query(sqlUpdate,values,(err,res) => {
        if(err){
            console.error(err.message);
        }
    });
});

app.listen(3001, () => {
    //console.log("build directory: ", build_directory);
    //console.log('running on port 3001')
});

//places this at the end to serve all other requests
app.use('/*', (req, res) => {
	//console.log("Request",req);
	//console.log("Redirecting to build/index.html")
	res.sendFile(path.join(__dirname, '../build', 'index.html'));
});
