const express = require("express");
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const cors = require("cors");
const mysql = require("mysql");
const multer = require("multer");
const { application } = require("express");

const build_directory = path.join(__dirname, '../build');


const db = mysql.createConnection({
host: 'localhost',
user: 'root',
password: 'DB@dmin422!',
database: 'store',
});

const store = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, 'public');
    },
    filename : (req, file, callback) => {
        callback(null, file.originalname);
    }
});

const uploadFile = multer({store}).single('file');

//used to translate files between backend and frontend
//bodyparser to get code from frontend to backend
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(build_directory));


//post function to get login input from front
app.post('/api/login/auth', (req,res) =>{
    console.log("Post called") 
    const tempname = req.body.PassName
    const tempPW = req.body.PassPW
    sqlFind = "SELECT user_email FROM users WHERE user_email = ?;" //command to mysql to find user name from user table
    console.log("Querying database for:")
    console.log(tempname)
    db.query(sqlFind,[tempname],(err,result) => {
        if ( result == ""){ //if the result is empty that means nothing was found
            res.send("Not Found")
        }else {
            sqlFind = "SELECT password FROM users WHERE password = ?;" // checks through password after name
            db.query(sqlFind,[tempPW],(err,result) => {
                if (result == ""){
                    console.log("User Not found")
                    res.send("Not Found")
                }else {
                    console.log("USER FOUND")
                        //only sends found if both name and password match
                        res.send("Found") 
                        //initial issue with connection was that this was not matching what the front end was looking for
                        //this was sending "User Found", and frontend was expecting "Found"
                    }
            })
                
        }
    })
  
})


//api to get user TO-DO MODIFY TO BE A GET FOR JUST USERS
app.get('/api/get', (req,res) => {
    console.log("basic get called") //debugging purposes
    const sqlSelect = "SELECT * FROM users"; //mysql command to get full list of users
    db.query(sqlSelect,(err,result) =>{
        console.log(result);
        //res.send("Test")
	    //res.send(result); //sends over the list of users
    })

});

app.get('/api/get/inventory', (req, res) => {
    console.log(req);
    console.log("fetch inventory called") //debugging purposes
    const sqlSelect = "SELECT * FROM item"; //mysql command to get full list of users
    db.query(sqlSelect,(err,result) =>{
        console.log(result);
	    res.send(result); //sends over the list of inventory
    })
});

/* Cooper Wineberg
app.get('/api/get/orders', (req, res) => {
    console.log("fetch orders called") //debugging purposes
    const sqlSelect = "SELECT * FROM orders"; //mysql command to get full list of users
    db.query(sqlSelect,(err,result) =>{
        console.log(result);
	    res.send(result); //sends over the list of inventory
    })
});
*/

//TO-DO this still needs to be modified to fit with zakariah's front end
app.post("/api/register/insert",(req,res) => {
    const user_id = null
    const backName = req.body.PassName
    const backLast = req.body.PassLast
    const backEmail = req.body.PassEmail
    const backAddress = req.body.PassAddress
    const backNumber = req.body.PassNumber
    const backPw = req.body.PassPw

    const sqlInsert="INSERT INTO users (user_id, user_email, user_first_name, user_last_name, user_phone,user_address,password) VALUES (?,?,?,?,?,?,?);"
    db.query(sqlInsert,[user_id,backEmail,backName,backLast,backNumber,backAddress,backPw],(res,err) => {
        console.log(res)
    });

})

app.post("/api/upload/image", (req, res) => {

    uploadFile(req, res, (err) => {
        if(err){
            return res.status(500).json(err);
        }
    });

});

app.post("/api/insert/item", (req, res) => {
    const i_id = req.body.id
    const i_name = req.body.name
    const i_desc = req.body.description
    const i_price = req.body.price
    const i_stock = req.body.stock
    const i_sale = req.body.sale
    const i_sale_price = req.body.sale_price
    

    const sqlInsert="INSERT INTO item (item_id, item_type, item_name, item_description, item_price, item_stock, item_onsale, item_saleprice) VALUES (?,?,?,?,?,?,?,?);"
    db.query(sqlInsert, [i_id, "Drinkware", i_name, i_desc, i_price, i_stock, i_sale, i_sale_price], (res, err) => {
        console.log(res);
    });
});

//api for insert 
app.post("/api/insert",(req,res) => {
    //use body parser to get information from frontend, and stored
    const backname = req.body.PassName
    const backpassword = req.body.PassPW

    const sqlInsert = "INSERT INTO users (user_first_name,password) VALUES (?,?);" //mysql command to insert new elements 
    db.query(sqlInsert,[backname,backpassword])
});

//WIP needs a proper database search 
app.post("/api/admin/user/find",(req,res) => {
    const Email = req.body.email
    const Password = req.body.password

    //WIP need to test in proper DB 
   /* sqlFind = "SELECT user_email FROM users WHERE user_email = ?;" 
    db.query(sqlFind,[tempname],(err,result) => {
        if ( result == ""){ //if the result is empty that means nothing was found
            res.send("Not Found")
        }else {
            sqlFind = "SELECT password FROM users WHERE password = ?;" // checks through password after name
            db.query(sqlFind,[tempPW],(err,result) => {
                if (result == ""){
                    console.log("User Not found")
                    res.send("Not Found")
                }else {
                    console.log("USER FOUND")
                        //only sends found if both name and password match
                        //if the user is found we will send the row of that user to the frontend to display.
                       
                    }
            })
                
        }
    }) */
    res.send("test");

});

app.post("/api/admin/user/update",(req,res) => {
    
    const Email = req.body.email
    const FirstName = req.body.firstname
    const LastName = req.body.lastname
    const Phone = req.body.phone
    const Address = req.body.address
    const Password = req.body.password
    const UserID = req.body.userID

    //sqlupdate command to update the user we stored earlier with whatever they wanted changed.
    //THIS MAY NEED TO BE DOUBLE CHECKED
    sqlUpdate = "UPDATE users SET user_email = ?, user_first_name = ?, user_last_name = ?, user_phone =?, user_address = ?, password =? WHERE user_id = ?"
    sql.query(sqlUpdate,[Email,FirstName,LastName,Phone,Address,Password,UserID])

})

app.listen(3001, () => {
    console.log("build directory: ", build_directory);
    console.log('running on port 3001')
});

//places this at the end to serve all other requests
app.use('/*', (req, res) => {
	console.log("Request",req);
	console.log("Redirecting to build/index.html")
	res.sendFile(path.join(__dirname, '../build', 'index.html'));
});
