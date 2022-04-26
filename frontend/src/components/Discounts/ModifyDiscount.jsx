import React, {useState, useEffect} from "react";
import './Discounts.css';
import Axios from 'axios';
import { Navigate, useNavigate, useParams } from "react-router-dom";


function ModifyDiscount (admin) {

    const[Code,setCode] = useState("")
    const[Percent,setPercent] = useState("")
    const[Id, setId] = useState(""); 

    const [isLoading, setLoading] = useState(true);
    let navigate = useNavigate();

    let {id} = useParams();

    useEffect(() => {
        fetchData();
    },[]);

    const fetchData = () =>{
        
        console.log("parameter_code", id);
        Axios.post('/api/get/discount', {
            code: id
        }).then((response) => {
            loading();
            let temp = JSON.parse(JSON.stringify(response.data));
            console.log("discount",temp[0])
            setCode(temp[0].discount_code)
            setPercent(temp[0].discount_percent)
            setId(temp[0].discount_id)
            console.log("new discount is", temp);
            loaded();
        })
    }

    const modifyDiscount = () => {

        Axios.post("api/modify/discount", {
            code : Code,
            percent : Percent,
            id : Id
        });
        //navigate back to main menu
        navigate("/Discounts");
    }

    const loading = () =>{
        setLoading(true);
    }

    const loaded = () => {
        setLoading(false);
    }

    if (isLoading){
        //returns only this until data is done loading
        return <div className="App">Fetching Data...</div>;
    }

    //Redirect people who logged out back to home
    if(admin == null){
        navigate('/home');
    }

    //Logged in, but not an admin
    if(admin == 0){
        return(
            <h1 className="heading"> UNAUTHORIZED<span>ACCESS</span></h1>
        )
    }

    return (
        <div className="modify_item">
                <h1 className="heading"> Modify <span>Discount</span></h1>
                <div className="modify_page">

                    <div className="logo">
                        <img className="create_logo" src="./images/logo.png" alt="" />
                    </div>

                        <span className="input_label" >Discount Code:</span>
                        <input 
                            value={Code}
                            onChange={event => setCode(event.target.value)}
                            className="item_input" 
                            type="text"
                            placeholder={Code}
                            required
                        />

                        <span className="input_label">Discount Percent:</span>
                        <input 
                            value={Percent} 
                            onChange={event => setPercent(event.target.value)}
                            className="item_input" 
                            type="text"
                            placeholder={Percent}
                            required 
                        />
                        <button className="btn" type="submit" onClick={modifyDiscount} >Update Discount</button>

                </div>
        </div>
    );  
}

export default ModifyDiscount;