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
    const [Test,setTest] = useState("")

    const emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[A-Za-z]{2,4}\b/
    const passwordRegex = /(?=[A-Za-z0-9@#$%^&+!=]+$)^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+!=])(?=.{8,}).*$/


    const [UserList, makeList] = useState([])

    //populates the user info list whenever a user is found.
    useEffect(() => {

        if(Response === "User Found"){
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
        
       
        if (Response !== "User Updated"){
        if(Email == ""){
            setEmail(OldEmail)
        }
        if(FirstName === ""){
            setFirstName(OldFirstName)
        }
        if(LastName === ""){
            setLastName(OldLastName)
        }
        if(Phone === ""){
            setPhone(OldPhone)
        }
        if(Address === ""){
            setAddress(OldAddress)
        }
        if(Password === ""){
            setPassword(OldPassword)
        }
    }
        
    });



    //finduser function, activated from the find button on the page
    const findUser = () =>{


        
        if(!emailRegex.test(InEmail)){
            alert("Please enter a valid email address")
            return;
            
        }
       

        //api call to admin user find location in backend
        Axios.post("/api/admin/user/find",{
            //sends over the email to search from db in backend
            email: InEmail
            

        }).then((response) => { //reading the information sent back from backend 
            if(response.data == ""){ //conditional statement using the sent back information
                makeList(response.data)
                alert("User could not be found")
                //setResponse("User was not found") //tells the page that a user was not found
            }else{ 
                
                makeList(response.data) //makes the list for the user that stores all the information received from backend
                //setResponse("User Found") //tells the page that a user was found
            }
        });
    }

    //update user function
    const updateUser = () =>{

        if(Response === "" || Response === "User updated"){
            setResponse("Please find a user first")
            return
        }


        
        if(!emailRegex.test(Email)){
            alert("Please enter a valid email address")
            return;
            
        }
        if(!passwordRegex.test(Password)){
            alert("Please enter a valid password\nPassword must contain 8 characters, 1 upper case, 1 lower case, 1 number, and 1 special character.")
            return;
        }
        
        //setting userID
        setUserID(UserID)
    
        //api call to update users
        //sends all the information to backend for db
        Axios.post("/api/admin/user/update",{

            email:Email,
            firstname:FirstName,
            lastname:LastName,
            phone:Phone,
            address:Address,
            password:Password,
            userID:UserID

        })
        
        setResponse("User Updated")
    }

    return(
        <div className ="create_item">
            <h1 className = "heading">Modify<span>USER</span></h1>
            <div className ="create_page">
                <div className="logo">
                        <img className="create_logo" src="./images/logo.png" alt="" />
                </div>

                <span className="input_label" >Find Email:</span>
                        <input 
                            //value={item_id} 
                            onChange={event => setInEmail(event.target.value)}
                            className="item_input" 
                            type="text"
                            placeholder="Email"
                        />

                        <button className="btn" type="submit" onClick={findUser} >Find</button>

            </div>

            <div className ="create_item">
            <h1 className = "heading"><span>USER</span></h1>
                <div className ="create_page">
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
                </div>
            </div>

            <div className="create_item">
                <h1 className = "heading">MODIFY</h1>
                <div className = "create_page">
                    <span className="input_label" >Email</span>
                            <input 
                                onChange={event => setEmail(event.target.value)}
                                className="item_input" 
                                type="text"
                                placeholder="Email"
                            />
                            <span className="input_label" >First Name</span>
                        <input 
                            onChange={event => setFirstName(event.target.value)}
                            className="item_input" 
                            type="text"
                            placeholder="First Name"
                        />
                        <span className="input_label" >Last Name</span>
                        <input 
                            onChange={event => setLastName(event.target.value)}
                            className="item_input" 
                            type="text"
                            placeholder="Last Name"
                        />
                        <span className="input_label" >Phone</span>
                        <input 
                            onChange={event => setPhone(event.target.value)}
                            className="item_input" 
                            type="text"
                            placeholder="Phone"
                        />
                        <span className="input_label" >Address</span>
                        <input 
                            onChange={event => setAddress(event.target.value)}
                            className="item_input" 
                            type="text"
                            placeholder="Address"
                        />
                        <span className="input_label" >Password</span>
                        <input 
                            onChange={event => setPassword(event.target.value)}
                            className="item_input" 
                            type="text"
                            placeholder="Password"
                        />

                            <button className="btn" type="submit" onClick={updateUser} >Update</button>

                </div>

            </div>




        </div>

        
    )

    /*return(

      
        <div className = 'inputs'>
            <h1>email of user</h1>
            <input
                className= "item_input"  
                type="text"
                name="InEmail"
                placeholder="Email"
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

        

    ); */


      

};



export default ModifyUser