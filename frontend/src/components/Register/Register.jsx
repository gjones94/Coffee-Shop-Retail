import React, {useState,useEffect} from "react";
import Axios from 'axios';
import './Register.css'
import { Navigate, useNavigate } from "react-router-dom";



function Register(){

    const [frontEmail, setEmail] = useState("")
    const [frontFirst, setFirst] = useState("")
    const [frontLast, setLast] = useState("")
    const [frontPW, setPW] = useState("")
    const [frontConfirm, setConfirm] = useState("")
    const [frontAddress, setAddress] = useState("")
    const [frontNumber, setNumber] = useState("")

    let navigate = useNavigate();
    const emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[A-Za-z]{2,4}\b/
    const passwordRegex = /(?=[A-Za-z0-9@#$%^&+!=]+$)^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+!=])(?=.{8,}).*$/
    const numberRegex = /^[0-9]+$/


    const submitInfo = () =>{
        const validBreak = 0;
        if(!emailRegex.test(frontEmail)){
            alert("Please enter a valid email address")
            return;
        }
        if(!passwordRegex.test(frontPW)){
            alert("Please enter a valid password.\nPasswords must contain 8 characters,1 upper case,1 lower case, 1 number, and 1 special character(!,@,#,$,%,etc)")
            return;
        }
        if(!numberRegex.test(frontNumber)){
            alert("Please enter a valid number.\nNo dashes, hyphens, or characters please.")
            return;
        }

        Axios.post("/api/register/validate",{
            email: frontEmail
        }).then((response) =>{
            console.log(response)
            if(response.data == "not valid"){
                alert("This email already has an account associated with it")
                return;
            }

            if(response.data == "valid"){

                if(frontConfirm === frontPW){
         

                    Axios.post("/api/register/insert",{
                    first: frontFirst,
                    last: frontLast,
                    email: frontEmail,
                    address: frontAddress,
                    number: frontNumber,
                    password : frontPW,
                    });
        
                    alert("Thank you for registering ", frontFirst, "!")
                    navigate("/Login")
                }else{
                    alert("The passwords do not match, please check and try again")
                }
                
            }

        });

       

        
    }

   
    
    
    return (
        <div className="create_item">
                <h1 className="heading"> REGISTER <span>USER</span></h1>
                <div className="create_page">

                    <div className="logo">
                        <img className="create_logo" src="./images/logo.png" alt="" />
                    </div>

                        <span className="input_label" >User Email:</span>
                        <input 
                            //value={item_id} 
                            onChange={event => setEmail(event.target.value)}
                            className="item_input" 
                            type="text"
                            placeholder="Email"
                            required
                        />

                        <span className="input_label">First Name:</span>
                        <input 
                            //value={item_type} 
                            onChange={event => setFirst(event.target.value)}
                            className="item_input" 
                            type="text"
                            placeholder="First Name"
                            required 
                        />

                        <span className="input_label">Last Name:</span>
                        <input 
                            //value={item_name} 
                            onChange={event => setLast(event.target.value)}
                            className="item_input" 
                            type="text"
                            placeholder="Last Name"
                            required 
                        />

                        <span className="input_label" >Phone Number:</span>
                        <input 
                            id="phoneNumber" 
                            maxLength={16}
                            //value={item_description} 
                            onChange={event => setNumber(event.target.value)}
                            className="item_input"
                            placeholder="INPUT NUMBERS ONLY"
                            required
                        />


                        <span className="input_label" >User Address:</span>
                        <input 
                            //value={item_price} 
                            onChange={event => setAddress(event.target.value)}
                            className="item_input" 
                            type="text"
                            placeholder="Address"
                            required
                        />

                        <span className="input_label" >Password:</span>
                        <input 
                            //value={item_stock} 
                            onChange={event => setPW(event.target.value)}
                            className="item_input" 
                            type="password"
                            placeholder="Password"
                            required
                        />

                        <span className="input_label" >Confirm Password:</span>
                        <input 
                            //value={item_sale} 
                            onChange={event => setConfirm(event.target.value)}
                            className="item_input" 
                            type="password"
                            placeholder="Confirm Password"
                            required
                        />

                        <button className="btn" type="submit" onClick={submitInfo} >Register</button>

                        <span className="create__head2">Sign Up for emails to get special news and offers</span>
                        <span className="create__head3">By signing up, you agree to our <span className="underlineHead3">Privacy Policy</span> and <span className="underlineHead3">Terms of Use</span></span>
                    {/*</form>*/}

                </div>
        </div>
    );  

    /*
    return(
        <div className ="Register"> <h1>Register</h1>
        <div className ='input'>
            <label> First Name</label>
            <input
                type="text"
                name="frontName"
                onChange={(e)=> {
                    setName(e.target.value)
                }}/>
                <label>Last Name</label>
            <input
                type="text"
                name="frontLast"
                onChange={(e)=> {
                    setLast(e.target.value)
                }}/>

                <label>Phone Number</label>
            <input
                type="text"
                name="frontNumber"
                onChange={(e)=> {
                    setNumber(e.target.value)
                }}/>
               

            <label>Email</label>
            <input
                type="text"
                name="frontEmail"
                onChange={(e)=> {
                    setEmail(e.target.value)
                }}/>

            <label>Address</label>
            <input
                type="text"
                name="frontAddress"
                onChange={(e)=> {
                    setAddress(e.target.value)
                }}/>

            <label>Password</label>
            <input
                type="password"
                name="frontPW"
                onChange={(e)=> {
                    setPW(e.target.value)
                }}/>

            <label>Confirm Password</label>
            <input
                type="password"
                name="frontConfirm"
                onChange={(e)=> {
                    setConfirm(e.target.value)
                }}/>
            
            <button onClick ={submitInfo}>Register</button>


            
            </div>
           
        </div>
    );
    */

};

export default Register
