import React, {useState, useEffect } from 'react'
import Axios from 'axios'
import './Cart.css'
import { useNavigate} from "react-router-dom";

const Cart = ({uid, uname}) =>{ 

    const [inventory, setInventory] = useState(null)
    const [cart, setCart] = useState(null);
    const [discountCode, setDiscountCode] = useState(null)
    const [usedDiscount, setUsedDiscount] = useState(false);
    const [isLoading, setLoading] = useState(true);
    const [cartDetails, setDetails] = useState(null);
    const [subTotal, setSubTotal] = useState(0)
    const [discountAmt, setDiscountAmount] = useState(0)
    const [total, setTotal] = useState(0);
    const [tax, setTax] = useState(0)
    const [empty, setEmpty] = useState(true)

    let navigate = useNavigate();

    useEffect(() => {
        fetchInventory();
    },[]);

    useEffect(() =>{
        if(inventory && uid){
            console.log("UseEffect: Fetching cart")
            console.log("Inventory is", inventory)
            fetchCart(); 
        }
    },[inventory, uid])

    useEffect( () => {
        if(cart){
            console.log("UseEffect: Setting details")
            console.log(cart)
            setCartDetails();
        }
    },[cart])

    useEffect( () => {
        if(cartDetails && discountAmt != null){
            console.log("UseEffect: Calculating total")
            calculateTotal();
        }
    },[cartDetails, discountAmt])

    useEffect( () => {
        if(total && tax && subTotal && !empty){
            console.log("UseEffect: setting loaded")
            loaded()
        }
    },[total, tax, subTotal, empty])


    const fetchInventory = () =>{
        console.log("Function: fetchInventory")
        Axios.get("/api/get/inventory").then( //calls the backend server.js with this api command
            (response) => {
                let items = JSON.parse(JSON.stringify(response.data));
                setInventory(items)
            }
        );
    }

    const fetchCart = () => {
        console.log("Function: fetchCart")
        Axios.post("/api/get/cart", {
            id : uid
        }).then( //calls the backend server.js with this api command
            (response) => {
                let items = JSON.parse(JSON.stringify(response.data)); //get items in the user's cart
                console.log("length is", Object.keys(items).length)
                if(Object.keys(items).length != 0){
                    console.log("Not empty!")
                    setEmpty(false)
                }
                setCart(items); 
            }
        ).catch(error =>{
            console.log(error)
        });
    }

    const calculateTotal = () => {
        let total = 0
        cartDetails.map(item =>{
            total += (item.item_price * item.qty)
        })
        console.log("Discount", discountAmt)
        if(discountAmt != null){
            total *= (1 - discountAmt) 
        }
        setSubTotal(total)
        setTax(.0825 * total)
        setTotal(1.0825 * total)
    }

    const setCartDetails = () => {

        //get item details for the items in the cart
        let details = []
        inventory.map(item => {
            cart.map(c_item => {
                if(c_item.item_id === item.item_id){
                    let detail_item = item
                    let price = item.item_price
                    detail_item['qty'] = c_item.item_qty
                    if(item.item_onsale == 1){
                        price = item.item_saleprice
                    }
                    detail_item.item_price = price
                    details.push(detail_item)
                }
            })        
        })
        console.log("cart details", details)
        setDetails(details)
    }

    const loaded = () => {
        setLoading(false)
    }
    const loading = () => {
        setLoading(true)
    }

    const plus = (item) => {
        let temp = []
        cartDetails.map(c_item =>{
            let t_item = c_item
            if(c_item.item_id == item.item_id){
                t_item.qty += 1
                Axios.post("api/updateCartQty", {
                    item_id : item.item_id,
                    qty : t_item.qty
                 }).then(response =>{
                      console.log(response)
                 }).catch(error => {
                      console.log(error)
                 })
            }
            temp.push(t_item)
        })
        calculateTotal()
        setDetails(temp)
    }

    const minus = (item) =>{
        let temp = []
        cartDetails.map(c_item =>{
            let t_item = c_item
            if(c_item.item_id == item.item_id){
                //stops at qty of 1, otherwise user can just remove the item altogether.
                if(t_item.qty != 1){
                    t_item.qty -= 1
                    Axios.post("api/updateCartQty", {
                        item_id : item.item_id,
                        qty : t_item.qty
                     }).then(response =>{
                          console.log(response)
                     }).catch(error => {
                          console.log(error)
                     })
                }
                console.log()
            }
            temp.push(t_item)
        })
        calculateTotal()
        setDetails(temp)
    }

    const remove = (item) =>{
        let temp = []
        cartDetails.map(c_item =>{
            if(item.item_id != c_item.item_id){
                temp.push(c_item)
                Axios.post("/api/cart/delete/item", {
                    user : uid,
                    id : item.item_id,
                }).then(response =>{
                    console.log(response)
                }).catch((error) =>{
                    console.log(error) 
                })

            }
        })
        setDetails(temp)
    }

    const checkout = () => {
       let c_date = new Date();
       var c_obj = {}
       let success = true
       cartDetails.map(item =>{
            if(item.item_stock - item.qty < 0){
                success = false
            }else{
                c_obj[item.item_id] = item.qty
            }
       })
       

       if(success){
            //updates order table with new order
            Axios.post("/api/cart/checkout", {
                    date : c_date,
                    items : c_obj,
                    t_total : total.toFixed(2),
                    user : uid,
                    status : 0
            }).then(response =>{
                console.log(response)
            }).catch((error) =>{
                console.log(error.message)
            })
            // item_qty is the existing stock, qty is the amount being purchase
            //updates the inventory with new quantities after purchase
            cartDetails.map(item =>{
                let new_qty = item.item_stock - item.qty
                Axios.post("/api/item/updateQty", {
                    id : item.item_id,
                    qty : new_qty
                }).catch((response) =>{
                    console.log(response) 
                })
            })


            //deletes items in user cart after checkout
            Axios.post("/api/cart/delete", {
                user : uid
            })
            alert("Thank you for your purchase!")
            navigate('/home')
       }else{
            alert("Order cannot be filled due to low inventory levels")
       }

       /* HOW TO LOOP THROUGH ITEMS
       for (var key of Object.keys(p)) {
        console.log(key + " -> " + p[key])
        }
        */
       //navigate('/cart')
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
                setDiscountAmount(temp)
                setUsedDiscount(true);
            })
        }
    }
    if(empty){
        return <h1 className="heading"> CART IS EMPTY </h1>
    }else if(isLoading){
        return <h1 className="heading"> FETCHING<span>DATA</span></h1>
    }else if(uid == null){
        return(
            <h1 className="heading"> PLEASE<span> LOG IN</span></h1>
        )
    }else{
        return (
            <>
            <section className='menu' id="Menu">
                <h1 className="heading"> Shopping <span> Cart </span> </h1>
                <div className="cart_item">
                    <div className="logo">
                    <img className="cart_logo" src="./images/logo.png" alt="" />
                    </div>
                        {cartDetails.map(item =>{
                            return( 
                                    <div class='row'>
                                        <div class="column">
                                            {item.item_name}
                                        </div>
                                        <div class="column">
                                            Price: ${item.item_price.toFixed(2)}
                                        </div>
                                        <div class="column">
                                            Quantity: {item.qty}
                                        </div>
                                         <div class="column">
                                            <button className="btn" type="submit" onClick={() => plus(item)}>+</button>
                                            <button className="btn" type="submit" onClick={() => minus(item)}>-</button>
                                            <button className="btn" type="submit" onClick={() => remove(item)}>Remove</button>
                                        </div>
                                    </div>
                            )
                        })} 
                        <input 
                            onChange={event => setDiscountCode(event.target.value)}
                            className="cart_input" 
                            type="text"
                            placeholder="XXXXX"
                        />
                            <button className="btn" type="submit" onClick={applyDiscount} >Apply Discount</button>                        
                        <div class='row'>
                            {discountAmt == 0 && 
                                <div class='column'>
                                    Sub-Total (Without Discount): ${subTotal.toFixed(2)} 
                                </div>
                            }
                            {discountAmt > 0 &&
                                <div class='column'>
                                    Sub-Total ${subTotal.toFixed(2)} (with discount of {discountAmt.toFixed(2)})
                                </div>
                            }
                        </div>
                        <div class='row'>
                            <div class='column'>
                                Tax: ${tax.toFixed(2)}
                            </div>
                        </div>
                        <div class='row'>
                            <div class='column'>
                                Total: ${total.toFixed(2)}
                            </div>
                        </div>
                        <button className="btn" type="submit" onClick={checkout}>Complete Checkout</button>
                </div>
            </section>
            </>
        );  
    }
}

export default Cart;
