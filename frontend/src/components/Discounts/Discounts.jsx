import React, {useState,useEffect} from "react";
import "./Discounts.css";
import axios from "axios";
import { useNavigate} from "react-router-dom";

function Discount ({admin}){
    const[Code,setCode] = useState("")
    const[Percent,setPercent] = useState("")
    const [discountList, setDiscountList] = useState();
    const [isLoading, setLoading] = useState(true)
    const [loggedIn, setLoggedIn] = useState(true)

    let navigate = useNavigate();
    
    useEffect(() => {
        fetchData();
    },[]);

    const fetchData = () =>{
        axios.post("/api/admin/discount/get").then((response) =>
        {
            let items = JSON.parse(JSON.stringify(response.data));
            setDiscountList(items);
            loaded();
        })
    }
    const loaded = () =>{
        setLoading(false)
    }
    const loading = () => {
        setLoading(true)
    }

    const addDiscount = () =>{
        axios.post("/api/admin/discount/insert",{
            code:Code,
            percent:Percent
        })
        loading();
        fetchData();
    }

    const modifyDiscount = (id) => {
        alert("Modified");
    }

    const deleteDiscount = (id) => {
        alert("Deleted");
    }

    if(isLoading){
        return <>Loading..</>
    }

    //Redirect people who logged out back to home
    if(admin == null){
            navigate('/home');
    }
    if(admin == 0){
        return(
            <h1 className="heading"> UNAUTHORIZED<span>ACCESS</span></h1>
        )
    }else{
        return (
            <>
            <div className="create_discount">
                    <h1 className="heading"> Add <span>Discount</span></h1>
                    <div className="create_page">
    
                        <div className="logo">
                            <img className="create_logo" src="./images/logo.png" alt="" />
                        </div>
                            <span className="input_label" >Discount Code</span>
                            <input 
                                onChange={event => setCode(event.target.value)}
                                className="item_input" 
                                type="text"
                                placeholder="Discount Code"
                                required
                            />
                            <span className="input_label">Discount Amount:</span>
                            <input 
                                onChange={event => setPercent(event.target.value)}
                                className="item_input" 
                                type="text"
                                placeholder="Percent Amount"
                                required 
                            />
                            <button className="btn" type="submit" onClick={addDiscount} >Create Discount</button>
                    </div>
            </div>
    
            <section className="menu" id="Menu">
                <h1 className="heading"> CURRENT <span> DISCOUNTS </span> </h1>
                    <div className="box-container">
                        {discountList.map(discount => 
                            {
                                return(
                                    <div className="box">
                                        <h3>Code: {discount.discount_code}</h3>
                                        <div className="code">Amount: {discount.discount_percent}%</div>
                                        <button className="btn" type="Modify" onClick={() => modifyDiscount(discount.discount_id)} >Modify Discount</button>
                                        <button className="btn" type="submit" onClick={() => deleteDiscount(discount.discount_id)} >Delete Discount</button>
                                    </div>
                                )
                            }
                        )
                        }
                    </div>
            </section>
            </>
        )
    }

   

    /*
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
            */
}

export default Discount