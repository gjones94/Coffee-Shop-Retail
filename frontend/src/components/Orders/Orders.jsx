import React, {useState, useEffect } from 'react'
import {useNavigate } from "react-router-dom";
import Axios from 'axios'
//import { useSelector } from 'react-redux'
import './Orders.css' // check with Zak to get the order displayed correctly (3 per row etc.)

function Orders ({admin}) {
	
    let tempOrders = [];
    const [orders, setOrders] = useState(null)
    const [constOrders, setConstOrders] = useState(null);
    const [unSortedOrders, setUnsortedOrders] = useState(null);
    const [displayOrders, setDisplayOrders] = useState(null);
    const [isLoading, setLoading] = useState(true);
    const [searchValue, setSearch] = useState("");
    const [users, setUsers] = useState(null);
    const [sortNameOrder, setNameSort] = useState(0);
    const [sortIDOrder, setIDSort] = useState(0);
    const [sortDateOrder, setDateSort] = useState(0);
    const [sortPriceOrder, setPriceSort] = useState(0);

    let navigate = useNavigate();

    /*
        I learned that useEffect has a second parameter that (in brackets), that once changed, will kickoff the use effect.
        I had some synchronization issues and the following is a solution for a chain reaction of events that kicks off by
        fetching orders. Once this is done, the 2nd use effect to fetch users kicks off once orders has actually been populated, and so on.

        The synchronization issue is that the setUsers and setOrders, being useState() calls, are asynchronous in REACT, meaning
        they are NOT executed immediately, and take time to process.
    */

    //1. First Fetch orders
    useEffect(() => {
        fetchOrders();
    },[]);

    //2. This only kicks off once orders are populated
    useEffect( () =>{
        if(orders){
            console.log(orders)
            fetchUsers();
        }
    },[orders])

    //3. This only kicks off once users are populated
    useEffect( () =>{
        if(users){
            console.log(users)
            combineUsersOrders(); //this is called to append the names of users to the order data
        }
    },[users])

    //4. Once all the above have been done, it tells the page that all the data is loaded
    useEffect( () => {
        if(constOrders){
            loaded();
        }
    },[constOrders])

    //Fetches all the orders from the order table
    const fetchOrders = () =>{
        console.log("fetch orders")
        Axios.get("/api/get/orders").then( //calls the backend server.js with this api command
            (response) => {
                let t_orders = JSON.parse(JSON.stringify(response.data));
                /*This is NOT used for display, the useEffects just look to see when 
                this state completely loaded so that it knows it can use the data*/
                setOrders(t_orders) 
            }
        );
    }

    //Fetches all the users from the user table
    const fetchUsers = () =>{
        console.log('fetch users')
        Axios.get("/api/get/users").then(
            (response) => {
                let t_users = JSON.parse(JSON.stringify(response.data))
                /*This is NOT used for display, the useEffects just look to see when 
                this state completely loaded so that it knows it can use the data*/
                setUsers(t_users)
            }
        )
    }

    /*
        This combines the order info with each corresponding user name. This is what will be used to populate the page.
    */
    const combineUsersOrders = () =>{
        console.log("combine")
        //this combo list will hold the comprehensive order data + first and last name of the user who has this order
        let combo = []

        //Cycle through all users
        users.map(user => {
            //Cycle through all orders to pair up the order user and the user in the database to get their name
            orders.map(order => {
                if(user.user_id === order.orders_user){
                    //assign temp variable that holds all the standard order info
                    let data = order
                    //add two fields to the data variable to hold the first name, and last name
                    // i.e. {first : <name>, last : <name>}
                    data["first"] = user.user_first_name
                    data["last"] = user.user_last_name


                    //change to yes no for readability
                    if(order.orders_completed == 0){
                        order.orders_completed = "No"
                    }else{
                        order.orders_completed = "Yes"
                    }
                    //change date to be Year month day
                    //change field to the data variable to hold the date
                    var date = new Date(order.orders_date);
                    var month = date.getUTCMonth() + 1; //months from 1-12
                    var day = date.getUTCDate();
                    var year = date.getUTCFullYear();
                    
                    data['date'] = (year + month + day);
                    order.orders_date = date.toDateString();

                    //add this to the comprehensive combo list
                    combo.push(data)

                    //change items to be more readable
                    /*
                    var list = order.orders_items;
                    list = JSON.parse(list);
                    let item_list = new Array(list.length);
                    Object.keys(list).forEach(function(key) {
                        item_list[key] = ('Item : ' + key + ', Amount : ' + list[key])
                    })
                    item_list.shift();
                    order.orders_items = item_list;
                    console.log(item_list)
                    */
                }
            })
        })
        //set the const orders and display orders with this comprehensive order + names list
        setConstOrders(combo)
        setDisplayOrders(combo) 
        setUnsortedOrders(combo) //used for resetting the sort order back to original order in the db
    }

    const searchByID = () => {
        tempOrders = []; //reset list
        setDisplayOrders(constOrders);//reset display orders
        loading();
        var searchInput = searchValue;

        //check for whitespace only
        if (/^\s*$/.test(searchInput)){
            setUnsortedOrders(constOrders)
            loaded();
            return;
        }else{
            constOrders.map(order => {
                if(order.orders_id == searchInput){
                    tempOrders.push(order);
                }
            });
        }
        //set display to the filtered list
        setDisplayOrders(tempOrders);
        setUnsortedOrders(tempOrders)
        loaded();
    };

    const searchByUsers = () => { // Need the sort changed to names
        tempOrders = []; //reset list
        setDisplayOrders(constOrders);//reset display orders
        loading();
        var searchInput = searchValue;

        //check for whitespace only
        if (/^\s*$/.test(searchInput)){
            setUnsortedOrders(constOrders)
            loaded();
            return;
        }else{
            constOrders.map(order => {
                if(order.user_first_name.toLowerCase().includes(searchInput.toLowerCase()) || order.user_last_name.toLowerCase().includes(searchInput.toLowerCase())){
                    tempOrders.push(order);
                }
            });
        }
        //set display to the filtered list
        setDisplayOrders(tempOrders);
        setUnsortedOrders(tempOrders)
        loaded();
    };

    const sortByID = () => {
        //reset other sorts
        setNameSort(0)
        setDateSort(0)
        setPriceSort(0)

        //reset the temp inventory list
        tempOrders = [];
        //add all current items to list

        displayOrders.map(order => {
            tempOrders.push(order);
        });

        /*
            This cycles between ascending descending and normal sort
        */
        if(sortIDOrder === 0){
            //Ascending
            tempOrders.sort((a, b) => (a.orders_id > b.orders_id) ? 1 : -1);
            setIDSort(1)
        }else if(sortIDOrder === 1){
            //Descending
            tempOrders.sort((a, b) => (a.orders_id < b.orders_id) ? 1 : -1);
            setIDSort(2)
        }else if(sortIDOrder === 2){
            //Normal
            tempOrders = unSortedOrders
            setIDSort(0)
        }

        setDisplayOrders(tempOrders);
    }


    const sortByPrice = () => {
        //reset the other sorts
        setNameSort(0)
        setDateSort(0)
        setIDSort(0)

        //reset the temp inventory list
        tempOrders = [];
        //add all current items to list
        displayOrders.map(order => {
            //Cooper, I removed the "Yes" and "no" assignments to the combine orders and users function
            tempOrders.push(order);
        });

        /*
            This cycles between ascending descending and normal sort
        */
        if(sortPriceOrder === 0){
            //Ascending
            tempOrders.sort((a, b) => (a.orders_total > b.orders_total) ? 1 : -1);
            setPriceSort(1)
        }else if(sortPriceOrder === 1){
            //Descending
            tempOrders.sort((a, b) => (a.orders_total < b.orders_total) ? 1 : -1);
            setPriceSort(2)
        }else if(sortPriceOrder === 2){
            //Normal
            tempOrders = unSortedOrders
            setPriceSort(0)
        }

        setDisplayOrders(tempOrders);
    }

    const sortByName = () => { 
        //reset the other sorts
        setPriceSort(0)
        setDateSort(0)
        setIDSort(0)

        tempOrders = []

        //make list of current display
        displayOrders.map(order=>{
            tempOrders.push(order)
        })

        /*
            This cycles between ascending descending and normal sort
        */
        if(sortNameOrder === 0){
            //Ascending
            tempOrders.sort((a, b) => (a.date > b.date) ? 1 : -1);
            setNameSort(1)
        }else if(sortNameOrder === 1){
            //Descending
            tempOrders.sort((a, b) => (a.date < b.date) ? 1 : -1);
            setNameSort(2)
        }else if(sortNameOrder === 2){
            //Normal
            tempOrders = unSortedOrders
            setNameSort(0)
        }

        setDisplayOrders(tempOrders)
    }
    
    const sortByDate = () => {
        //reset other sorts
        setNameSort(0)
        setIDSort(0)
        setPriceSort(0)

        //reset the temp inventory list
        tempOrders = [];
        //add all current items to list

        displayOrders.map(order => {
            tempOrders.push(order);
        });

        /*
            This cycles between ascending descending and normal sort
        */
        console.log("Order date compare", tempOrders[0].date)
        console.log("Order date compare", tempOrders[1].date)
        console.log("Order date compare", tempOrders[1].date < tempOrders[0].date)
        console.log("Order date compare", tempOrders[1].date > tempOrders[0].date)
        if(sortDateOrder === 0){
            //Ascending
            tempOrders.sort((a, b) => (a.date > b.date) ? 1 : -1);
            setDateSort(1)
        }else if(sortDateOrder === 1){
            //Descending
            tempOrders.sort((a, b) => (a.date < b.date) ? 1 : -1);
            setDateSort(2)
        }else if(sortDateOrder === 2){
            //Normal
            tempOrders = unSortedOrders
            setDateSort(0)
        }

        setDisplayOrders(tempOrders);
    }

    const updateOrder = (order_id) => { // to update orders to completed
        console.log(order_id);// may be incorrect input
        var orderID = parseInt(order_id);
        //api call to update order
        //sends all the information to backend for db
        Axios.post("/api/orders/update", {
            orders_id : orderID,
            orders_completed: 1
        });
        loading();
        fetchOrders();
        loaded(); 
    }

    const loading = () =>{
        setLoading(true);
    }

    const loaded = () => {
        setLoading(false);
    }

    if(admin == null){
        navigate('/home')
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
                    <button className="btn" type="submit" onClick={searchByID}>Search Orders by ID</button>
                    
                <div class="box">
                    <button className="btn" type="submit" onClick={searchByUsers}>Search Orders by User</button>
                </div>
                <div class="box">
                    <button className="btn" type="submit" onClick={sortByID}>Sort By ID</button>
                </div>
                <div class="box">
                    <button className="btn" type="submit" onClick={sortByPrice}>Sort By Price</button>
                </div>
                <div class="box">
                    <button className="btn" type="submit" onClick={sortByName}>Sort By Name</button>
                </div>
                <div class="box">
                    <button className="btn" type="submit" onClick={sortByDate}>Sort By Date</button>
                </div>
                </div>

                <div className="box-container">
                    {displayOrders.map(order =>
                        {
                            return( 
                                <div className="box">
                                    <div className="price">Order ID: {order.orders_id} </div>
                                    <div className="price">Date: {order.orders_date} </div>
                                    <div className="price">Order Total: ${order.orders_total} </div>
                                    <div className="price">User: {order.first} {order.last} </div>
                                    <div className="price">Completed: {order.orders_completed} </div>
                                    <div className="price">Items: {order.orders_items}</div>
                                    <button className="btn" type="submit" onClick={() => updateOrder(order.orders_id)} >Complete Order</button>
                                </div>
                            )
                        }
                    )}
                </div>
            </section>
        </>
    )
}

export default Orders;
