import React, {useState, useEffect } from 'react'
import Axios from 'axios'
import Header from '../Header/Header'
import './MenuSection.css'
import { Navigate, useNavigate, useParams} from "react-router-dom";

function MenuSection ({uid, admin}) {

    let tempInventory = [];
    const [constInventory, setConstInventory] = useState();
    const [displayInventory, setDisplayInventory] = useState();
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
        Axios.get("/api/get/inventory").then( //calls the backend server.js with this api command
            (response) => {
                let items = JSON.parse(JSON.stringify(response.data));
                setDisplayInventory(items);
                setConstInventory(items);
                loaded();
            }
        );
    }
    const search = () => {
        tempInventory = []; //reset list
        setDisplayInventory(constInventory);//reset display inventory
        loading();
        var searchInput = searchValue;

        //check for whitespace only
        if (/^\s*$/.test(searchInput)){
            loaded();
            return;
        }else{
            constInventory.map(item => {
                if(item.item_name.toLowerCase().includes(searchInput.toLowerCase()) || item.item_description.toLowerCase().includes(searchInput.toLowerCase())){
                    console.log("Pushing item", item.item_name);
                    tempInventory.push(item);
                }else{
                    console.log(item.item_name.toLowerCase(), "Does not include", searchInput.toLowerCase());
                }
            });
        }
        //set display to the filtered list
        setDisplayInventory(tempInventory);
        console.log("Here is the display inventory after update\n", displayInventory);
        loaded();
    };

    const sortByName = () => {
        //reset the temp inventory list
        tempInventory = [];
        //add all current items to list
        displayInventory.map(item => {
            tempInventory.push(item);
        });

        tempInventory.sort((a,b) => (a.item_name > b.item_name) ? 1 : -1);
        setDisplayInventory(tempInventory);
    }


    const sortByPrice = () => {
        //reset the temp inventory list
        tempInventory = [];
        //add all current items to list
        displayInventory.map(item => {
            tempInventory.push(item);
        });

        tempInventory.sort((a,b) => (a.item_price > b.item_price) ? 1 : -1);
        setDisplayInventory(tempInventory);
    }


    const sortByAvailability = () => {
        //reset the temp inventory list
        tempInventory = [];
        //add all current items to list
        displayInventory.map(item => {
            tempInventory.push(item);
        });

        tempInventory.sort((a,b) => (a.item_stock > b.item_stock) ? 1 : -1);
        setDisplayInventory(tempInventory);
    }
   
    const addToCart = () => {
        alert("Added to cart!");
    }

    const deleteItem = (item_id) => {
        console.log("Item", item_id);
    }

    const createItem = () => {
        navigate("/createItem");
    }

    const modifyItem = (item_id) => {
        navigate("/modifyItem" + item_id);
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
                <h1 className="heading"> OUR <span> PRODUCTS </span> </h1>
                <div class="search">
                    <div className="search_head" for="search"> Search Inventory </div>
                    <input 
                        value={searchValue} 
                        onChange={event => setSearch(event.target.value)}
                        className="search_input"
                        type="search" 
                        id="search"
                    />
                    <button className="btn" type="submit" onClick={search}>Submit</button>
                
                <div class="box">
                    <button className="btn" type="submit" onClick={sortByName}>Sort By Name</button>
                </div>
                <div class="box">
                    <button className="btn" type="submit" onClick={sortByAvailability}>Sort By Availability</button>
                </div>
                <div class="box">
                    <button className="btn" type="submit" onClick={sortByPrice}>Sort By Price</button>
                </div>
                </div>
                {admin == 1 &&
                    <div class="box">
                        <button className="btn" type="submit" onClick={createItem}>Create Item</button>
                    </div> 
                }
                <div className="box-container">
                    {/*For every item in inventory_list, create a box and list details of item*/}
                    {}    
                    {console.log("Items loaded", constInventory)}
                    {displayInventory.map(item => 
                        {
                            console.log(item.item_name);
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
                                        <div className="desc">{item.item_description}</div>
                                        {/*<div className="price">${item.item_description}</div>*/}
                                        {/* if the user is admin, have option to modify and delete the item"*/}
                                        { admin == 1 ? <button className="btn" type="Modify" onClick={() => modifyItem(item.item_id)} >Modify Item</button> :
                                            <button className="btn" type="submit" onClick={addToCart} >Add to Cart</button>}
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

    /* ZAKARIAH'S ORIGINAL  and input this above every ahref= {/* eslint-disable-next-line /}
    return (
        <>

            <section className="menu" id="Menu">

                <h1 className="heading"> {selector[3].sectionName[0]} <span>{selector[3].sectionName[1]}</span> </h1>

                <div className="box-container">

                    <div className="box">
                        <img src={selector[3].menuImages[0]} alt="" />
                        <h3>{selector[3].menuHeading}</h3>
                        <div className="price">${selector[3].menuPrice} <span>{selector[3].menuDiscountPrice}</span></div>
                        <a href="#" className="btn">{selector[3].menuBtn}</a>
                    </div>
                    <div className="box">
                        <img src={selector[3].menuImages[1]} alt="" />
                        <h3>{selector[3].menuHeading}</h3>
                        <div className="price">${selector[3].menuPrice} <span>{selector[3].menuDiscountPrice}</span></div>
                        <a href="#" className="btn">{selector[3].menuBtn}</a>
                    </div>
                    <div className="box">
                        {inventory_list.map(item => 
                            {
                                return( 
                                    <div> {item.item_id} </div> 
                                )
                            }
                        )}
                    </div>

                    <div className="box">
                        <img src={selector[3].menuImages[2]} alt="" />
                        <button className="btn" type="submit" onClick={fetchInventory} >Fetch Inventory</button>
                        <h3>{selector[3].menuHeading}</h3>
                        <div className="price">${selector[3].menuPrice} <span>{selector[3].menuDiscountPrice}</span></div>
                        <a href="#" className="btn">{selector[3].menuBtn}</a>
                    </div>

                    <div className="box">
                        <img src={selector[3].menuImages[3]} alt="" />
                        <h3>{selector[3].menuHeading}</h3>
                        <div className="price">${selector[3].menuPrice} <span>{selector[3].menuDiscountPrice}</span></div>
                        <a href="#" className="btn">{selector[3].menuBtn}</a>
                    </div>

                    <div className="box">
                        <img src={selector[3].menuImages[4]} alt="" />
                        <h3>{selector[3].menuHeading}</h3>
                        <div className="price">${selector[3].menuPrice} <span>{selector[3].menuDiscountPrice}</span></div>
                        <a href="#" className="btn">{selector[3].menuBtn}</a>
                    </div>

                    <div className="box">
                        <img src={selector[3].menuImages[5]} alt="" />
                        <h3>{selector[3].menuHeading}</h3>
                        <div className="price">${selector[3].menuPrice} <span>{selector[3].menuDiscountPrice}</span></div>
                        <a href="#" className="btn">{selector[3].menuBtn}</a>
                    </div>

                    <div className="box">
                        <img src={selector[3].menuImages[4]} alt="" />
                        <h3>{selector[3].menuHeading}</h3>
                        <div className="price">${selector[3].menuPrice} <span>{selector[3].menuDiscountPrice}</span></div>
                        <a href="#" className="btn">{selector[3].menuBtn}</a>
                    </div>

                    <div className="box">
                        <img src={selector[3].menuImages[0]} alt="" />
                        <h3>{selector[3].menuHeading}</h3>
                        <div className="price">${selector[3].menuPrice} <span>{selector[3].menuDiscountPrice}</span></div>
                        <a href="#" className="btn">{selector[3].menuBtn}</a>
                    </div>

                    <div className="box">
                        <img src={selector[3].menuImages[1]} alt="" />
                        <h3>{selector[3].menuHeading}</h3>
                        <div className="price">${selector[3].menuPrice} <span>{selector[3].menuDiscountPrice}</span></div>
                        <a href="#" className="btn">{selector[3].menuBtn}</a>
                    </div>

                    <div className="box">
                        <img src={selector[3].menuImages[2]} alt="" />
                        <h3>{selector[3].menuHeading}</h3>
                        <div className="price">${selector[3].menuPrice} <span>{selector[3].menuDiscountPrice}</span></div>
                        <a href="#" className="btn">{selector[3].menuBtn}</a>
                    </div>

                </div>

            </section>
            
        </>
    )

    */
}

export default MenuSection
