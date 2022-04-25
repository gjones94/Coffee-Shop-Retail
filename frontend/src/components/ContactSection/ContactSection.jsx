import React from 'react'
import './ContactSection.css'

const ContactSection = () => {


    return (
        <>

            <section className="contact" id="Contact">

                <h1 className="heading"> <span>{"Contact"}</span> {"Us"} </h1>

                <div className="row">

                        {/* eslint-disable-next-line */}
                    <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3469.720323216416!2d-98.62109934865407!3d29.58273974710037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x865c667dd6657fdd%3A0x24e55c903c3a270c!2sThe%20University%20of%20Texas%20at%20San%20Antonio!5e0!3m2!1sen!2sus!4v1645745026060!5m2!1sen!2sus" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy"></iframe>

                    <form>
                        <h3>{"Get in Touch"}</h3>
                        <div className="inputBox">
                            <span className="fas fa-user"></span>
                            <input type="text" placeholder="name" />
                        </div>
                        <div className="inputBox">
                            <span className="fas fa-envelope"></span>
                            <input type="email" placeholder="email" />
                        </div>
                        <div className="inputBox">
                            <span className="fas fa-phone"></span>
                            <input type="number" placeholder="number" />
                        </div>
                        {/* eslint-disable-next-line */}
                        <a href="/home" className="btn">{"submit"}</a>
                    </form>

                </div>

            </section>
            
        </>
    )
}

export default ContactSection
