import React, {useState, useEffect } from 'react'
import Axios from 'axios'
import './MenuSection.css'
import { useNavigate} from "react-router-dom";

function MenuSection ({uid, admin}) {

    let tempInventory = [];
    const [constInventory, setConstInventory] = useState();
    const [displayInventory, setDisplayInventory] = useState();
    const [isLoading, setLoading] = useState(true);
    const [searchValue, setSearch] = useState("");
    const [cart, setCart] = useState();
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
                    tempInventory.push(item);
                }else{
                }
            });
        }
        //set display to the filtered list
        setDisplayInventory(tempInventory);
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
   
    const increment = (id) => {
        cart.map(item => {
            if(item.item_id == id){
                item.item_quantity += 1;   
            }
        })
    }
   
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
                        id : item.id,
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
