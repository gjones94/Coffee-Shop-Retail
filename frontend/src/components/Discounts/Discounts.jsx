import React, {useState,useEffect} from "react";
import { useSelector } from 'react-redux';
import "./Discounts.css";
import axios from "axios";


function Discount (){
    const[Code,setCode] = useState("")
    const[Percent,setPercent] = useState("")
    const [DiscountList, makeList] = useState([])

    useEffect(() => {
        axios.post("/api/admin/discount/get").then((response) =>
        {
            makeList(response.data)
        })

        

    });

    const addDiscount = () =>{
        
        axios.post("/api/admin/discount/insert",{
            code:Code,
            percent:Percent
        })
    }

    return(
        <div>
            {DiscountList.map((val,key)=> {
      return (
        <div className = "DiscountInfo" key = {key}>
        <label style={{fontSize: '15px'}}>
          Discount ID: {val.discount_id}   
          <br/>
          Discount code: {val.discount_code} 
          <br/>
          Discount percent: {val.discount_percent}
          <br/>
        </label>
        </div>
      );
    })}
    <div>

        <label>Add Discounts<br/></label>

        <label>Code:</label>
    <input  
                type="text"
                name="Code"
                onChange={(e)=> {
                    setCode(e.target.value)
                }}/>
    </div>

        <label>Percent</label>
        <input
            type ="test"
            name = "Percent"
            onChange={(e) => {
                setPercent(e.target.value)
            }}/>

            <button onClick ={addDiscount}>Add</button>
        </div>

    );

}

export default Discount