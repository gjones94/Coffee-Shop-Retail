import React, {useState,useEffect} from "react";
import { useSelector } from 'react-redux'
import Axios from 'axios';
import './AdminUser.css';


function AdminUser(){
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

    const findUser =() =>{
   
        Axios.post("/api/admin/user/find",{

            email: InEmail
            
        }).then((response) => {

          if (response == ""){
            setResponse("User was not found")
             }else{ 
                makeList(response.data)
                console.log(response.data)
                console.log("here")
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
   
    }
        const updateUser = () =>{
          setUserID(UserID)
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

            Axios.post("/api/admin/user/update",{
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



export default AdminUser