const express = require("express");
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const cors = require("cors");
const mysql = require("mysql");

var check;

app.use(express.static(path.resolve('/var/www/html/')));

const db = mysql.createPool({
host: 'localhost',
user: 'root',
password: 'password',
database: 'beansdatabase',
});

//used to translate files between backend and frontend
//bodyparser to get code from frontend to backend
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));


//post function to get login input from front
app.post('/api/login/auth',(req,res) =>{
    const tempname = req.body.PassName
    const tempPW = req.body.PassPW
   
    sqlFind = "SELECT Name FROM users WHERE Name = ?;" //command to mysql to find user name from user table
    db.query(sqlFind,[tempname],(err,result) => {
            if ( result == ""){ //if the result is empty that means nothing was found
                res.send("Not Found")
            }else {
            

                sqlFind = "SELECT Password FROM users WHERE Password = ?;" // checks through password after name
                db.query(sqlFind,[tempPW],(err,result) => {
                    if (result == ""){
                        res.send("Not Found")
                    }else {
                        res.send("Found") //only sends found if both name and password match
                    }
                })
                
            }
    })
  
})


//api to get 
app.get('/api/get', (req,res) => {
    console.log("basic get called")
    const sqlSelect = "SELECT * FROM users"; //mysql command to get full list of users
    db.query(sqlSelect,(err,result) =>{
	res.send("Test")
	    //res.send(result); //sends over the list of users
    })

});

//api for insert 
app.post("/api/insert",(req,res) => {
    //use body parser to get information from frontend, and stored
    const backname = req.body.PassName
    const backpassword = req.body.PassPW

    const sqlInsert = "INSERT INTO users (Name,Password) VALUES (?,?);" //mysql command to insert new elements 
    db.query(sqlInsert,[backname,backpassword])
    });

app.listen(3001, () => {
    console.log('running on port 3001')
});
