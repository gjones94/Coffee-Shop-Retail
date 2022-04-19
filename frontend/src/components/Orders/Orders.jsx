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
            constOrders.map(item => {
                if(orders.orders_id.toLowerCase().includes(searchInput.toLowerCase()) || orders.user.toLowerCase().includes(searchInput.toLowerCase())){
                    tempOrders.push(item);
                }else{
                }
            });
        }
        //set display to the filtered list
        setDisplayOrders(tempOrders);
        loaded();
    };

    const sortByName = () => {
        //reset the temp inventory list
        tempOrders = [];
        //add all current items to list
        displayOrders.map(item => {
            tempOrders.push(item);
        });

        tempOrders.sort((a,b) => (a.item_name > b.item_name) ? 1 : -1);
        setDisplayOrders(tempOrders);
    }


    const sortByPrice = () => {
        //reset the temp inventory list
        tempOrders = [];
        //add all current items to list
        displayOrders.map(item => {
            tempOrders.push(item);
        });

        tempOrders.sort((a,b) => (a.item_price > b.item_price) ? 1 : -1);
        setDisplayOrders(tempOrders);
    }


    const sortByAvailability = () => {
        //reset the temp inventory list
        tempOrders = [];
        //add all current items to list
        displayOrders.map(item => {
            tempOrders.push(item);
        });

        tempOrders.sort((a,b) => (a.item_stock > b.item_stock) ? 1 : -1);
        setDisplayOrders(tempOrders);
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
                    <button className="btn" type="submit" onClick={sortByName}>Sort By ID</button>
                </div>
                <div class="box">
                    <button className="btn" type="submit" onClick={sortByPrice}>Sort By Price</button>
                </div>
                </div>
            </section>
        </>
    )
}

export default Orders;