import React from 'react'
import './ReviewSection.css'
import p1 from './pic-1.png'
import p2 from './pic-2.png'
import p3 from './pic-3.png'
import quote from './quote-img.png'
const ReviewSection = () => {
    
    
    return (
        <>

            <section className="review" id="Reviews">

                <h1 className="heading"> Customer <span>Reviews</span> </h1>

                <div className="box-container">

                    <div className="box">
                        <img src={quote} alt="" className="quote" />
                        <p>"This stuff is great! I love their selection of infusions and accessories, all offered at fair prices."</p>
                        <img src={p1} className="user" alt="" />
                        <h3>Johnathan Taylor-Thomas</h3>
                        <div className="stars">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                        </div>
                    </div>

                    <div className="box">
                        <img src={quote} alt="" className="quote" />
                        <p>"Beans and Leaves had everything I need! Would definitely purchase from them again."</p>
                        <img src={p2} className="user" alt="" />
                        <h3>Kate Beckinsale</h3>
                        <div className="stars">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star-half-alt"></i>
                        </div>
                    </div>
                    
                    <div className="box">
                        <img src={quote} alt="" className="quote" />
                        <p>"If you're in the market for coffee or tea, look no further than Beans and leaves, the best in town."</p>
                        <img src= {p3} className="user" alt="" />
                        <h3>Chad Chaddsworth</h3>
                        <div className="stars">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                        </div>
                    </div>

                </div>

            </section>
            
        </>
    )
}

export default ReviewSection
