import React, {useState,useEffect} from "react";
import { useSelector } from 'react-redux'
import Axios from 'axios';


function AdminUser(){
    const [InEmail,setInEmail] = useState("")
    const [InPassword,setInPassword]= useState("")
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
    const findUser = () =>{
        Axios.post("/api/admin/user/find",{
            email: InEmail,
            password: InPassword,
        }).then((response) => {
            if (response.data != "Not Found"){ // occurs when backend returns the row of info for that user
                setResponse("Not Found") // this will be moved to the else part of if later
                //these will specfically show the info from the row out of the sql list
                setOldEmail("placehold")
                setOldFirstName("placehold")
                setOldLastName("placehold")
                setOldAddress("placehold")
                setOldPhone("placehold")
                setOldPassword("placehold")
                setUserID("placehold")

            }


        });
    }
        const updateUser = () =>{
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

                <h1>password</h1>
                <input
                type = "password"
                name = "InPassword"
                onChange={(e)=> {
                    setInPassword(e.target.value)
                }}/>



            <button onClick ={findUser}>Find</button>
                <label>{Response}</label>
            <h1>Email</h1>
            <label>{OldEmail}</label>
                <input
                type = "text"
                name = "Email"
                onChange={(e)=>{
                    setEmail(e.target.value)
                }}/>
            <h1>First Name</h1>
            <label>{OldFirstName}</label>
            <input
                type = "text"
                name = "Firstname"
                onChange={(e)=>{
                    setFirstName(e.target.value)
                }}/>
            <h1>Last Name</h1>
            <label>{OldLastName}</label>
            <input
                type = "text"
                name = "Lastname"
                onChange={(e)=>{
                    setLastName(e.target.value)
                }}/>
            <h1>Phone</h1>
            <label>{OldPhone}</label>
            <input
                type = "text"
                name = "Phone"
                onChange={(e)=>{
                    setPhone(e.target.value)
                }}/>
            <h1>Address</h1>
            <label>{OldAddress}</label>
            <input
                type = "text"
                name = "Address"
                onChange={(e)=>{
                    setAddress(e.target.value)
                }}/>
            <h1>password</h1>
            <label>{OldPassword}</label>
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