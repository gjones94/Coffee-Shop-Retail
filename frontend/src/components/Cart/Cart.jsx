import React, {useState, useEffect } from 'react'
import Axios from 'axios'
import './Cart.css'

const Cart = ({uid, uname}) =>{ 

    let cart_item_details = []
    let temp_cart = []
    const [discountCode, setDiscountCode] = useState()
    const [usedDiscount, setUsedDiscount] = useState(false);
    const [isLoading, setLoading] = useState(true);
    const [cart, setCart] = useState(null);
    const [cartDetails, setDetails] = useState(null);
    const [empty, setEmpty] = useState(true);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        fetchCart(); 
    },[]);


    const fetchCart = () => {
        let allItems = [] //get temp list of all items in inventory
        let total = 0
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
                    temp_cart.push(item);
                    allItems.map(allItem => {
                        if(allItem.item_id === item.item_id){
                            let price = allItem.item_price
                            if(allItem.item_onsale == 1){
                                price = allItem.item_saleprice
                            }
                            total += (price * item.item_qty)
                            cart_item_details.push(allItem); //add item details to list
                        }
                    })        
                })
                setDetails(cart_item_details);
                setTotal(total)
            }
        );
        loaded();
    }

    const loaded = () => {
        setLoading(false)
    }
    const loading = () => {
        setLoading(true)
    }

    const checkout = () => {
       loading();
       console.log("Cart items", cart);
       var obj = {}
       cart.map(item =>{
            var key = item.item_id
            obj[key] = item.item_qty
       })
       console.log("Objects are", obj);
       loaded();
    }


    const applyDiscount = () => {
        if(usedDiscount){
            alert("Sorry, you can only use one discount code per order");
        }else{
            Axios.post('/api/get/discount', {
                code: discountCode
            }).then((response) => {
                loading();
                let temp = JSON.parse(JSON.stringify(response.data));
                temp = temp[0].discount_percent / 100
                console.log("new discount is", temp);
                let new_total = total * (1-temp)
                console.log("new total is", new_total);
                setTotal(new_total);
                loaded();
            })
            setUsedDiscount(true);
        }
    }

    if(isLoading){
        return <h1 className="heading"> FETCHING<span>DATA</span></h1>
    }
    if(!cartDetails){
        return <h1 className="heading"> FETCHING<span>CART</span></h1>
    }
    if(uid == null){
        return <h1 className="heading"> UNAUTHORIZED<span>ACCESS</span></h1>
    }
    return (
            <div className="cart_item">
                    <h1 className="heading"> {uname}'s <span> CART </span></h1>
                    <div className="cart_page">
    
                        <div className="logo">
                            <img className="cart_logo" src="./images/logo.png" alt="" />
                        </div>
    
                        <div className="app-container">
                        <table>
                            <thead className="cart_header">
                                <tr>
                                    <th>Item</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                </tr>
                            </thead>
                                {cartDetails.map(d_item => {
                                    console.log("loading", d_item)
                                    let price = d_item.item_price
                                    if(d_item.item_onsale == 1){
                                        price = d_item.item_saleprice
                                    }
                                    return (
                                        <>
                                            <tr className="cart_header">
                                                <td>{d_item.item_name}</td>
                                            </tr>
                                            <tr className="cart_header">
                                                <td>${price}</td>
                                            </tr>
                                            {cart.map(item => {
                                                if(item.item_id === d_item.item_id){
                                                    return(
                                                        <>
                                                            <tr className="cart_header">
                                                                <td>{item.item_qty}</td>
                                                            </tr>
                                                        </>
                                                    )
                                                }
                                            })}
                                        </>
                                    )
                                    })
                                }
                            </table>
                        </div>
                        {empty && 
                           <div>
                               Cart is Empty
                            </div> 
                        }
                        <span className="cart_label" >Discount Code</span>
                        <input 
                            onChange={event => setDiscountCode(event.target.value)}
                            className="cart_input" 
                            type="text"
                            placeholder="XXXXX"
                        />
                            <button className="btn" type="submit" onClick={applyDiscount} >Apply Discount</button>
                        <span className="cart_label" >Total: ${total.toFixed(2)}</span>
                            <button className="btn" type="submit" onClick={checkout} >Checkout</button>
                        {/*</form>*/}
                    </div>
            </div>
    );  
    
}

export default Cart;