import React, {useState, useEffect } from 'react'
import Axios from 'axios'
import './Cart.css'

const Cart = ({uid, uname}) =>{ 

    let cart_item_details = []
    const [discount, setDiscount] = useState();
    const [isLoading, setLoading] = useState(true);
    const [cart, setCart] = useState();
    const [cartDetails, setDetails] = useState();
    const [empty, setEmpty] = useState(true);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        fetchCart(); 
        calcTotal();
    },[]);


    const fetchCart = () => {
        let allItems = [] //get temp list of all items in inventory
        Axios.get("/api/get/inventory").then( //calls the backend server.js with this api command
            (response) => {
                let items = JSON.parse(JSON.stringify(response.data));
                items.map(item =>{
                    allItems.push(item)
                })
            }
        );

        Axios.post("/api/get/cart",{
            id : uid
        }).then( //calls the backend server.js with this api command
            (response) => {
                let items = JSON.parse(JSON.stringify(response.data)); //get items in the user's cart
                setCart(items); 
                console.log("Cart is", items);

                //get item details for the items in the cart
                items.map(item => {
                    setEmpty(false);
                    allItems.map(allItem => {
                        if(allItem.item_id === item.item_id){
                            cart_item_details.push(allItem); //add item details to list
                        }
                    })        
                })
                setDetails(cart_item_details);
                loaded();
            }
        );
    }

    const loaded = () => {
        setLoading(false)
    }

    const checkout = () => {
       console.log("Cart items", cart);
       console.log("Cart Item details", cartDetails); 
    }

    const calcTotal = () => {

    }

    const applyDiscount = () => {
        alert("Discount to be applied");
    }

    if(isLoading){
        return <div className="App">Fetching Cart...</div>;
    }

    return (
        <div className="cart_item">
                <h1 className="heading"> {uname}'s <span> CART </span></h1>
                <div className="cart_page">

                    <div className="logo">
                        <img className="cart_logo" src="./images/logo.png" alt="" />
                    </div>

                    {!empty && cartDetails.map(d_item => {
                        let price = d_item.item_price
                        if(d_item.item_onsale == 1){
                            price = d_item.item_saleprice
                        }
                        return (
                            <>
                                <div className="row">
                                <div className="column">Item: {d_item.item_name}</div>
                                <div className="column">Price: ${price}</div>
                                {cart.map(item => {
                                    if(item.item_id === d_item.item_id){
                                        return(
                                            <>
                                                <div className="column">Quantity: {item.item_qty}</div>
                                            </>
                                        )
                                    }
                                })}
                                </div>
                            </>
                        )
                        })
                    }
                    {empty && 
                       <div>
                           Cart is Empty
                        </div> 
                    }
                    <span className="cart_label" >Discount Code</span>
                    <span className="cart_label" >Total: {total}</span>
                    <input 
                        onChange={event => setDiscount(event.target.value)}
                        className="cart_input" 
                        type="text"
                        placeholder="XXXXX"
                    />
                        <button className="btn" type="submit" onClick={applyDiscount} >Apply Discount</button>
                        <button className="btn" type="submit" onClick={checkout} >Checkout</button>
                    {/*</form>*/}
                </div>
        </div>
    );  

}

export default Cart;