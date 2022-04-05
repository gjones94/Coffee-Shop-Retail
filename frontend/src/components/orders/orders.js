import React, {useState, useEffect } from 'react'
import Axios from 'axios'
//import { useSelector } from 'react-redux'
import './MenuSection.css'

const MenuSection = () => {

    let tempInventory = [];
    const [constInventory, setConstInventory] = useState();
    const [displayInventory, setDisplayInventory] = useState();
    const [isLoading, setLoading] = useState(true);
    const [searchValue, setSearch] = useState("");
    const imageBase = './images/'


    useEffect(() => {
        fetchData();
    },[]);

    const fetchData = () =>{
        Axios.get("api/get/orders").then( //calls the backend server.js with this api command
            (response) => {
                let orders = JSON.parse(JSON.stringify(response.data));
                setDisplayInventory(orders);
                setConstInventory(orders);
                loaded();
            }
        );
    }

    //const fetchInventory = () => {
        //DEBUGGING Function to understand how to pull in inventory from database
        //alert("Fetch inventory called");
        //Axios.get("api/get/inventory").then( //calls the backend api with this fetch command
            //(response) => {
                //inventory_list = JSON.parse(JSON.stringify(response.data)) //gets you the array of objects 
                
                //Get the length of the array
                //var length = Object.keys(inventory_list).length
                
                //for (let i = 0; i < length; i++){
                    //var id = String(inventory_list[i].item_id);
                    //console.log(inventory_list[i].item_id);
                //}

                //console.log(inventory_list) 
                //console.log(inventory_list[0]) //gets you the 1st object
                //console.log(inventory_list[0].item_id) //gets you the 1st objects item_id
                //}
        //);
    //}

    const loading = () =>{
        setLoading(true);
    }

    const loaded = () => {
        setLoading(false);
    }

    if (isLoading){
        //returns only this until data is done loading
        return <div className="App">Loading Data...</div>;
    }

    //once data is done loading, we do this!
    return (
        <>
            <section className="menu" id="Menu">
                {/* OLD ONE <h1 className="heading"> {selector[3].sectionName[0]} <span>{selector[3].sectionName[1]}</span> </h1>*/}
                <h1 className="heading"> ORDERS </span> </h1>
                <div class="search-wrapper">
                    <label className="desc" for="search"> Search Orders </label>
                    <input 
                        value={searchValue} 
                        onChange={event => setSearch(event.target.value)}
                        type="search" 
                        id="search"
                    />
                    <button className="btn" type="submit" onClick={search}>Search</button>
                </div>
                <div class="box">
                    <button className="btn" type="submit" onClick={sortByID}>Sort By ID</button>
                </div>
                <div class="box">
                    <button className="btn" type="submit" onClick={sortByDate}>Sort By Date</button>
                </div>
                <div class="box">
                    <button className="btn" type="submit" onClick={sortByTotal}>Sort By Total</button>
                </div>
                <div className="box-container">
                    {/*For every item in inventory_list, create a box and list details of item*/}
                    
                    {displayInventory.map(item => 
                        {
                            console.log(orders.orders_id);
                            if(orders.orders_total > 0){
                                return( 
                                    <div className="box">
                                        <h3>{orders.orders_id}</h3>
                                        <div className="date">${orders.orders_date}</div>
                                        <div className="items">${orders.orders_items}</div>
                                        <div className="total">${orders.orders_total}</div>
                                        <div className="user">${orders.orders_user}</div>
                                        <button className="btnDisabled" type="submit">Add to Cart</button>
                                        {/*<div className="price">${item.item_description}</div>*/}
                                        {/*OLD ADD TO CART<a href="#" className="btn">{selector[3].menuBtn}</a>*/}
                                    </div>
                                )
                            }
                        }
                    )}
                </div>
            </section>
            
        </>
    )
}

export default MenuSection
