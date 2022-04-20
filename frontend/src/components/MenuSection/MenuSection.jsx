import React, {useState, useEffect } from 'react'
import Axios from 'axios'
import './MenuSection.css'
import { useNavigate} from "react-router-dom";


/*
    Author: Trey Jones

    Overview:
    Menu section is the product page that shows all the stores' inventory. 
    It is where users go to add to cart, and where admins go to modify and create items.

    Users can also search for inventory by name and by description.
    They can also sort inventory by name, price, and availability

*/

function MenuSection ({uid, admin}) {

    let tempInventory = [];
    //This holds a copy of all the current inventory that was received from the database, it will not be updated
    const [constInventory, setConstInventory] = useState(); 
    //This is updated with only the inventory that is selected when being searched for.
    const [displayInventory, setDisplayInventory] = useState();
    const [isLoading, setLoading] = useState(true);
    const [searchValue, setSearch] = useState("");
    const [cart, setCart] = useState();
    const imageBase = './images/'

    let navigate = useNavigate();

    /*
        Function: UseEffect
        Use Effect is performed when the page first loads. 
    */
    useEffect(() => {
        fetchData();
    },[]);

    /* 
        Function: fetchData
        Fetch Data calls the api on the backend through axios
        This call goes to the backend process running on the server which handles
        all API calls.
        It parses through the JSON response data received, and sets two constant variables that hold the 
        state of the page. 
    */
    const fetchData = () =>{
        Axios.get("/api/get/inventory").then( //calls the backend server.js with this api command
            (response) => {
                let items = JSON.parse(JSON.stringify(response.data));
                setDisplayInventory(items);
                setConstInventory(items);
                loaded();
            }
        );
        /* Backup cart information
        if(uid != null){
            Axios.post("api/getcart", {
                id : uid
            }).then((response) => 
                {
                    let tempcart = JSON.parse(JSON.stringify(response.data));
                    setCart(tempcart);
                }
            );
        }
        */
    }


    /*
        Function: search
        1) It then resets the display inventory to show all items
        2) This sets up a temporary inventory list which will hold the results that the user searched for
        3) It then sets the display inventory to be the inventory items that we populated in our temporary list that matched the search criteria
        
    */
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
                    tempInventory.push(item);
                }else{
                }
            });
        }
        //set display to the filtered list
        setDisplayInventory(tempInventory);
        loaded();
    };

    /*
        Function: sortByName
        This sorts the inventory by the item name
        It uses temp list to populate all the currently displayed inventory and then sorts it, and sets it as the new display inventory
    */
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


    /*
        Function: sortByPrice
        This sorts the inventory by the item price
        It uses temp list to populate all the currently displayed inventory and then sorts it, and sets it as the new display inventory
    */
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


    /*
        Function: sortByAvailability
        This sorts the inventory by the item stock
        It uses temp list to populate all the currently displayed inventory and then sorts it, and sets it as the new display inventory
    */
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
   
   
    /*
        Function: addToCart
        May not be used. Holding up
    */
    const addToCart = (item) => {
        let temp_cart = [];

        if(uid == null){
            alert("You must login to add to your cart");
        }else{
            let actual_price = 0
            if(item.item_onsale == 1){
                actual_price = item.item_sale_price;
            }else{
                actual_price = item.item_price;
            }

            //set default cart states
            let empty = true 
            let item_exists = false

            //put everything into a temp cart to modify
            cart.map(cart_item => {
                empty = false; //cart was not empty
                temp_cart.push(cart_item);
            });

            
            //create the new item
            let new_item = {
                "user_id" : uid,
                "item_id" : item.item_id,
                "item_qty" : 1
            }

            temp_cart.map(temp => {
                if(temp.item_id === item.item_id){
                   item_exists = true  //item already existed
                   temp.item_qty += 1
                   Axios.post("api/updateCartQty", {
                      item_id : item.item_id,
                      qty : temp.item_qty
                   });
                }
            })

            if(!item_exists || empty){
                Axios.post("api/addToCart",{
                    uid : uid,
                    id : item.item_id,
                    qty : 1
                });
                temp_cart.push(new_item) //do this to save local state
            }
            
            setCart(temp_cart)
            /*
            Axios.post("api/addtocart", {
                user : uid,
                id : item_id,
                price : actual_price
            });
            */
            alert("Added to cart!");
        }
    }

    //Not required
    const deleteItem = (item_id) => {
        console.log("Item", item_id);
    }

    /*
        Function: createItem

        Simply navigates to the create item page
    */
    const createItem = () => {
        navigate("/createItem");
    }

    /*
        Function: modifyItem

        Simply navigates to the modify item page
    */
    const modifyItem = (item_id) => {
        navigate("/modifyItem" + item_id);
    }

    /*
        Function(s): loading, loaded
        sets the loading variable to ensure the page only loads once data is fetched
    */
    const loading = () =>{
        setLoading(true);
    }

    const loaded = () => {
        setLoading(false);
    }

    //Returns Loading data if isLoading is true
    if (isLoading){
        //returns only this until data is done loading
        return <div className="App">Loading Data...</div>;
    }

    //once data is done loading, it displays the page properly with all the inventory
    return (
        <>
            <section className="menu" id="Menu">
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
                {admin == 1 &&
                    <div class="box">
                        <button className="btn" type="submit" onClick={createItem}>Create Item</button>
                    </div> 
                }
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

export default MenuSection
