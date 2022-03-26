import React, {useState, useEffect } from 'react'
import Axios from 'axios'
import { useSelector } from 'react-redux'
import './MenuSection.css'

const MenuSection = () => {

    const selector = useSelector(state => state.reducer1);
    const [inventory_list, setInventory] = useState();
    const [isLoading, setLoading] = useState(true);
    const imageBase = './images/'
    //   './images/about-img.jpeg'
    //var inventory_list;

    useEffect(() => {
        Axios.get("api/get/inventory").then( //calls the backend server.js with this api command
            (response) => {
                setInventory(JSON.parse(JSON.stringify(response.data))); //load the data into inventory_list variable
                setLoading(false); //tells the page that it is no longer loading data, which triggers a new render
            }
        );
    },[]);

    const fetchInventory = () => {
        //DEBUGGING Function to understand how to pull in inventory from database
        //alert("Fetch inventory called");
        Axios.get("api/get/inventory").then( //calls the backend api with this fetch command
            (response) => {
                //inventory_list = JSON.parse(JSON.stringify(response.data)) //gets you the array of objects 
                
                //Get the length of the array
                var length = Object.keys(inventory_list).length
                
                for (let i = 0; i < length; i++){
                    var id = String(inventory_list[i].item_id);
                    console.log(inventory_list[i].item_id);
                }

                //console.log(inventory_list) 
                //console.log(inventory_list[0]) //gets you the 1st object
                //console.log(inventory_list[0].item_id) //gets you the 1st objects item_id
                }
        );
    }

    const addToCart = () => {
        alert("Added to cart!");
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

                <h1 className="heading"> OUR <span> MENU </span> </h1>
                <div className="box-container">
                    {/*For every item in inventory_list, create a box and list details of item*/}
                    {inventory_list.map(item => 
                        {
                            return( 
                                <div className="box">
                                    <img src={imageBase + item.item_image} alt="" />
                                    <h3>{item.item_name}</h3>
                                    <div className="price">${item.item_price}<span>{selector[3].menuDiscountPrice}</span></div>
                                    <button className="btn" type="submit" onClick={addToCart} >Add to Cart</button>
                                    {/*OLD ADD TO CART<a href="#" className="btn">{selector[3].menuBtn}</a>*/}
                                </div>
                            )
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
