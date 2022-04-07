import React from 'react'
import { useNavigate } from 'react-router-dom'
import './HomeSection.css'
import bgImage from './home-img.jpeg'
const HomeSection = () => {
    const navigate = useNavigate();
    const products = () => {
	navigate("/menu");
    }
    return (
        <>

            <section className="home" id="Home" style={{backgroundImage: `url(${bgImage})`}}>

                <div className="content">
                    <h3>Quality Infusions</h3>
                    <p>coffee, tea, and everything in between.</p>
                        {/* eslint-disable-next-line */}
                <button className="btn" type="submit" onClick={products} >See Products</button>
                </div>

            </section>

        </>
    )
}

export default HomeSection
