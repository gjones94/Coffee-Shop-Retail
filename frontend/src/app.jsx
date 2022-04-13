import React, { useLayoutEffect, useState } from 'react'
import './app.css'
import AboutUs from './components/AboutUs/AboutUs'
import ContactSection from './components/ContactSection/ContactSection'
import Footer from './components/Footer/Footer'
import HomeSection from './components/HomeSection/HomeSection'
import MenuSection from './components/MenuSection/MenuSection'
import CreateItem from './components/MenuSection/CreateItem'
import ModifyItem from './components/MenuSection/ModifyItem'
import Header from './components/Header/Header'
import ReviewSection from './components/ReviewSection/ReviewSection'
import Login from './components/Login/Login'
import { fetchData } from './components/action/action'
import { useDispatch } from 'react-redux'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import { homeData } from './components/home/home'
import { BrowserRouter as Router, Route, Routes, useNavigate, Switch} from 'react-router-dom';
import Register from './components/Register/Register'
import Admin from './components/Admin/Admin'
import ModifyUser from './components/ModifyUser/ModifyUser'
//import Orders from './components/orders/orders'



function App() {

    const dispatch = useDispatch()

    const [data, setData] = useState(null)

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

    return (
        <>

            {data && <>
              <Router>
                <div className="app"> 
                <Header />
                <Routes>
                    <Route path="/" element={<HomeSection/>} />
                    <Route path="/home" element={<HomeSection/>} />
                    <Route path="/menu:user" element={<MenuSection/>} />
                    <Route path="/reviews" element={<ReviewSection/>} />
                    <Route path="/about" element={<AboutUs/>} />
                    <Route path="/contact" element={<ContactSection/>} />
                    <Route path="/Login" element={<Login/>} />
                    <Route path ="/ModifyUser" element ={<ModifyUser/>}/>
                    <Route path = "/Register" element = {<Register/>}/>
                    <Route path="/login" element={<Login/>} />
                    <Route path ="/admin" element ={<Admin/>}/>
                    <Route path ="/createItem" element={<CreateItem/>}/>
                    <Route path ="/modifyItem:id" element={<ModifyItem/>}/>
                    <Route path ="/orders" element ={<orders/>}/>
                </Routes>
                <Footer />
                </div>
              </Router>

            </>}

            {!data} {/* Delay for data to load */}

        </>
    )
}

export default App
