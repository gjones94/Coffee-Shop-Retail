import React from 'react'
import { Link } from 'react-router-dom'
import './AboutUs.css'
import aboutImg from './about-img.jpeg'

const AboutUs = () => {
    

    return (
        <>

            <section className="about" id="About">

                <h1 className="heading"> <span>About</span> Us</h1>

                <div className="row">

                    <div className="image">
                        <img src={aboutImg} alt="" />
                    </div>

                    <div className="content">
                        <h3>why choose beans & leaves?</h3>
                        <p>At Beans & Leaves we are dedicated to procuring the best in coffee, tea, and accesories.</p>
                        <p>Our team is always on the search for what products are going to offer the best when it comes to infusions from around the world</p>
                        <p>Have any questions? feel free to contact us!</p>
                        {/* eslint-disable-next-line */}
                        <Link style={{textDecoration: 'none'}} to="/contact">
                        <span className="btn">Contact Us</span>
                     </Link>
                    </div>

                </div>

            </section>
            
        </>
    )
}

export default AboutUs
