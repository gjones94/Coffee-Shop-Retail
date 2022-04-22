import React, { useLayoutEffect, useState } from 'react'
import './app.css'
import AboutUs from './components/AboutUs/AboutUs'
import ContactSection from './components/ContactSection/ContactSection'
import Footer from './components/Footer/Footer'
import HomeSection from './components/HomeSection/HomeSection'
import MenuSection from './components/MenuSection/MenuSection'
import CreateItem from './components/MenuSection/CreateItem'
import ModifyItem from './components/MenuSection/ModifyItem'
import ModifyDiscount from './components/Discounts/ModifyDiscount'
import Header from './components/Header/Header'
import ReviewSection from './components/ReviewSection/ReviewSection'
import Login from './components/Login/Login'
import { fetchData } from './components/action/action'
import { useDispatch } from 'react-redux'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { homeData } from './components/home/home'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Register from './components/Register/Register'
import Admin from './components/Admin/Admin'
import ModifyUser from './components/ModifyUser/ModifyUser'
import Discounts from './components/Discounts/Discounts'
import Orders from './components/Orders/Orders'
//import Cart_Test from './components/zzCart_Test/Cart'



function App() {

    const dispatch = useDispatch()

    const [data, setData] = useState(null)
    const [loginID, set_uid] = useState(null)
    const [adminID, set_aid] = useState(null)
    const [name, set_name] = useState(null)
    
    useLayoutEffect(() => {
        try {
            setTimeout(() => {
                dispatch(fetchData(homeData))
                setData(homeData)
            }, 5000)
        }
        catch (e) {
            console.log(e)
        }
    })

    /*
        This function is passed as a callback function to the login page. The login page then sets these
        variables in the app.jsx page (this page) that are passed to it so that every page can have access to them.
    */
    const handleLogin = (name, id, admin) => {
        set_name(name);
        set_uid(id);
        set_aid(admin);
    }
    /*
        Sets everything to null once a signout occurs
    */
    const handleSignout = () => {
        set_name(null);
        set_uid(null);
        set_aid(null);
    }


    return (
        <>
            {!data} {/* Delay for data to load */}

            {data && <>
              <Router>
                <div className="app"> 
                <Header u_name={name} admin={adminID} uid={loginID} signOut={handleSignout}/>
                <Routes>
                    <Route path="/" element={<HomeSection/>} />
                    <Route path="/home" element={<HomeSection/>} />
                    <Route path="/menu" element={<MenuSection uid={loginID} admin={adminID}/>} />
                    <Route path="/reviews" element={<ReviewSection/>} />
                    <Route path="/about" element={<AboutUs/>} />
                    <Route path="/contact" element={<ContactSection/>} />
                    <Route path="/Login" element={<Login uid={loginID} admin={adminID} onLogin={handleLogin}/>} />
                    <Route path ="/ModifyUser" element ={<ModifyUser admin={adminID}/>}/>
                    <Route path ="/Discounts" element = {<Discounts admin={adminID}/>}/>
                    <Route path ="/Register" element = {<Register/>}/>
                    <Route path ="/admin" element ={<Admin admin={adminID}/>}/>
                    <Route path ="/createItem" element={<CreateItem/>}/>
                    <Route path ="/modifyItem:id" element={<ModifyItem admin={adminID}/>}/>
                    <Route path ="/modifyDiscount:id" element={<ModifyDiscount admin={adminID}/>}/>
                    <Route path ="/orders" element ={<Orders admin={adminID}/>}/>
                    {/*<Route path="/cart" element={<Cart_Test uid={loginID} uname={name}/>} />*/}
                </Routes>
                <Footer />
                </div>
              </Router>
            </>}

            

        </>
    )
}

export default App
