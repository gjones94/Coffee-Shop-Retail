import React, {useState, useEffect } from 'react'
import {useNavigate } from "react-router-dom";
import Axios from 'axios'
//import { useSelector } from 'react-redux'
import './Orders.css'

function Orders ({admin}) {
	
    let tempOrders = [];
    const [constOrders, setConstOrders] = useState();
    const [displayOrders, setDisplayOrders] = useState();
    const [isLoading, setLoading] = useState(true);
    const [searchValue, setSearch] = useState("");
    const imageBase = './images/'

    let navigate = useNavigate();

    useEffect(() => {
        fetchData();
    },[]);

    const fetchData = () =>{
        Axios.get("/api/get/orders").then( //calls the backend server.js with this api command
            (response) => {
                let orders = JSON.parse(JSON.stringify(response.data));
                setDisplayOrders(orders);
                setConstOrders(orders);
                loaded();
            }
        );
    }

    const search = () => {
        tempOrders = []; //reset list
        setDisplayOrders(constOrders);//reset display orders
        loading();
        var searchInput = searchValue;

        //check for whitespace only
        if (/^\s*$/.test(searchInput)){
            loaded();
            return;
        }else{
            constOrders.map(order => {
                if(order.orders_id.includes === searchInput || order.orders_user.includes === searchInput){
                    tempOrders.push(order);
                }else{
                }
            });
        }
        //set display to the filtered list
        setDisplayOrders(tempOrders);
        loaded();
    };

    const sortByID = () => {
        //reset the temp inventory list
        tempOrders = [];
        //add all current items to list
        displayOrders.map(order => {
            tempOrders.push(order);
        });

        tempOrders.sort((a,b) => (a.orders_id > b.orders_id) ? 1 : -1);
        setDisplayOrders(tempOrders);
    }


    const sortByPrice = () => {
        //reset the temp inventory list
        tempOrders = [];
        //add all current items to list
        displayOrders.map(order => {
            tempOrders.push(order);
        });

        tempOrders.sort((a,b) => (a.orders_total > b.orders_total) ? 1 : -1);
        setDisplayOrders(tempOrders);
    }

    const sortByName = () => {
        /*
        //reset the temp inventory list
        tempOrders = [];
        //add all current items to list
        displayOrders.map(order => {
            tempOrders.push(order);
        });

        tempOrders.sort((a,b) => (a.orders_total > b.orders_total) ? 1 : -1);
        setDisplayOrders(tempOrders); */
    }

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
                <h1 className="heading"> ORDER <span> LIST </span> </h1>
                <div class="search">
                    <div className="search_head" for="search"> Search Orders </div>
                    <input 
                        value={searchValue} 
                        onChange={event => setSearch(event.target.value)}
                        className="search_input"
                        type="search" 
                        id="search"
                    />
                    <button className="btn" type="submit" onClick={search}>Submit</button>
                
                <div class="box">
                    <button className="btn" type="submit" onClick={sortByID}>Sort By ID</button>
                </div>
                <div class="box">
                    <button className="btn" type="submit" onClick={sortByPrice}>Sort By Price</button>
                </div>
                <div class="box">
                    <button className="btn" type="submit" onClick={sortByName}>Sort By Price</button>
                </div>
                </div>
                <div className="box-container">
                    {displayInventory.map(item => 
                        {
                            var crossout = "";
                            var price;
                            if(item.item_onsale){
                                price = item.item_saleprice.toFixed(2);
                                crossout = item.item_price.toFixed(2);
                            }else{
                                price = item.item_price.toFixed(2);
                            }
                            if(item.item_stock > 0){
                                return( 
                                    <div className="box">
                                        <img src={imageBase + item.item_image} alt="" />
                                        <h3>{item.item_name}</h3>
                                        <div className="price">${price}<span>{crossout}</span></div>
                                        <div className="price">Available: {item.item_stock} </div>
                                        <div className="desc">{item.item_description}</div>
                                        {/*<div className="price">${item.item_description}</div>*/}
                                        {/* if the user is admin, have option to modify and delete the item"*/}
                                        { admin == 1 ? <button className="btn" type="Modify" onClick={() => modifyItem(item.item_id)} >Modify Item</button> :
                                            <button className="btn" type="submit" onClick={() => addToCart(item)} >Add to Cart</button>}
                                        { admin == 1 && <button className="btn" type="submit" onClick={() => deleteItem(item.item_id)} >Delete Item</button>}
                                        {/*OLD ADD TO CART<a href="#" className="btn">{selector[3].menuBtn}</a>*/}
                                    </div>
                                )
                            }else{
                                return( 
                                    <div className="box">
                                        <img src={imageBase + item.item_image} alt="" />
                                        <h3>{item.item_name}</h3>
                                        <div className="price">${item.item_price}<span> ${item.item_saleprice}</span></div>
                                        <div className="price">Available: {item.item_stock} </div>
                                        <div className="desc">{item.item_description}</div>
                                        <div className="text">Out of stock!</div>
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

export default Orders;