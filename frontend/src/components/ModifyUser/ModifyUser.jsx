import React, {useState,useEffect} from "react";
import { useSelector } from 'react-redux'
import Axios from 'axios';
import './ModifyUser.css';


function ModifyUser(){
    //setting all the needed states for intitial variables.
    const [InEmail,setInEmail] = useState("")
    const [Email,setEmail] = useState("")
    const [Password,setPassword]= useState("")
    const [FirstName,setFirstName] = useState("")
    const [LastName,setLastName] = useState("")
    const [Phone,setPhone] = useState("")
    const [Address,setAddress] = useState("")
    const [OldEmail,setOldEmail] = useState("")
    const [OldPassword,setOldPassword]= useState("")
    const [OldFirstName,setOldFirstName] = useState("")
    const [OldLastName,setOldLastName] = useState("")
    const [OldPhone,setOldPhone] = useState("")
    const [OldAddress,setOldAddress] = useState("")
    const [UserID,setUserID] = useState("")
    const [Response,setResponse] = useState("")


    const [UserList, makeList] = useState([])

    //populates the user info list whenever a user is found.
    useEffect(() => {

        if(Response == "User Found"){
        UserList.map(val => {

                  
            setUserID(val.user_id)
            setOldEmail(val.user_email)
            setOldFirstName(val.user_first_name)
            setOldLastName(val.user_last_name)
            setOldAddress(val.user_address)
            setOldPhone(val.phone)
            setOldPassword(val.password)
            
           
          });
        }
        
    });

    //finduser function, activated from the find button on the page
    const findUser =() =>{

        //api call to admin user find location in backend
        Axios.post("/api/admin/user/find",{
            //sends over the email to search from db in backend
            email: InEmail
            

        }).then((response) => { //reading the information sent back from backend 

          if (response.data == ""){ //conditional statement using the sent back information

              makeList(response.data)
                setResponse("User was not found") //tells the page that a user was not found
             }else{ 
                makeList(response.data) //makes the list for the user that stores all the information received from backend
                setResponse("User Found") //tells the page that a user was found
            }
        });
    }

        //update user function
        const updateUser = () =>{

            if(Response == ""){
                setResponse("Please find a user first")
                return
            }
            //setting userID
          setUserID(UserID)
       
            //case functions for if they do not want anything changed
            //if spots are left blank it will be assumed they are keeping the old information.
            if(Email == ""){
                setEmail(OldEmail)
            }
            if(FirstName == ""){
                setFirstName(OldFirstName)
            }
            if(LastName == ""){
                setLastName(OldLastName)
            }
            if(Phone == ""){
                setPhone(OldPhone)
            }
            if(Address == ""){
                setAddress(OldAddress)
            }
            if(Password == ""){
                setPassword(OldPassword)
            }
            //api call to update users
            //sends all the information to backend for db
            Axios.post("http://localhost:3001/api/admin/user/update",{
                email:Email,
                firstname:FirstName,
                lastname:LastName,
                phone:Phone,
                address:Address,
                password:Password,
                userID:UserID

            })

        }


    return(

      
        <div className = 'inputs'>
            <h1>email of user</h1>
            <input  
                type="text"
                name="InEmail"
                onChange={(e)=> {
                    setInEmail(e.target.value)
                }}/>



            <button onClick ={findUser}>Find</button>
                <label>{Response}</label>

                {UserList.map((val,key)=> {
      return (
        <div className = "UserInfo" key = {key}>
        <label style={{fontSize: '15px'}}>
          Email: {val.user_email} 
          <br/>
          Name: {val.user_first_name} {val.user_last_name}
          <br/>
          Phone: {val.user_phone}
          <br/>
          Address: {val.user_address}
          <br/>
          Password: {val.password}
          
        </label>
        </div>
      );
    })}
            <h1>Email</h1>
                <input
                type = "text"
                name = "Email"
                onChange={(e)=>{
                    setEmail(e.target.value)
                }}/>
            <h1>First Name</h1>
            <input
                type = "text"
                name = "Firstname"
                onChange={(e)=>{
                    setFirstName(e.target.value)
                }}/>
            <h1>Last Name</h1>
            <input
                type = "text"
                name = "Lastname"
                onChange={(e)=>{
                    setLastName(e.target.value)
                }}/>
            <h1>Phone</h1>
            <input
                type = "text"
                name = "Phone"
                onChange={(e)=>{
                    setPhone(e.target.value)
                }}/>
            <h1>Address</h1>
            <input
                type = "text"
                name = "Address"
                onChange={(e)=>{
                    setAddress(e.target.value)
                }}/>
            <h1>password</h1>
            <input
                type = "text"
                name = "Password"
                onChange={(e)=>{
                    setPassword(e.target.value)
                }}/>

                <button onClick ={updateUser}>Update</button>

         
        </div>        

        

    );


      

};



export default ModifyUser