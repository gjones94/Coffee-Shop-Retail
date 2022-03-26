import React from 'react'
import { useSelector } from 'react-redux'
import './AccessoriesSection.css'


const AccessoriesSection = () => {
    
    const selector = useSelector(state => state.reducer1)
    
    return (
        <>

            <section className="accessories" id="Accessories">

                <h1 className="heading"> {selector[4].sectionName[0]} <span>{selector[4].sectionName[1]}</span> </h1>

                <div className="box-container">

                    <div className="box">
                        <div className="image">
                            <img src={selector[4].accImages[0]} alt="" />
                        </div>
                        <div className="content">
                            <h3>{selector[4].accTitle}</h3>                            
                            <div className="price">${selector[4].accPrice} <span>{selector[4].accDiscountPrice}</span></div>
                            {/* eslint-disable-next-line */}
                            <a href="#" className="btn">{selector[4].accBtn}</a>
                        </div>
                    </div>

                    <div className="box">
                        <div className="image">
                            <img src={selector[4].accImages[1]} alt="" />
                        </div>
                        <div className="content">
                            <h3>{selector[4].accTitle}</h3>
                            <div className="price">${selector[4].accPrice} <span>{selector[4].accDiscountPrice}</span></div>
                            {/* eslint-disable-next-line */}
                            <a href="#" className="btn">{selector[4].accBtn}</a>   
                        </div>
                    </div>

                    <div className="box">
                        <div className="image">
                            <img src={selector[4].accImages[2]} alt="" />
                        </div>
                        <div className="content">
                            <h3>{selector[4].accTitle}</h3>
                            <div className="price">${selector[4].accPrice} <span>{selector[4].accDiscountPrice}</span></div>
                            {/* eslint-disable-next-line */}
                            <a href="#" className="btn">{selector[4].accBtn}</a>
                        </div>
                    </div>

                    <div className="box">
                        <div className="image">
                            <img src={selector[4].accImages[0]} alt="" />
                        </div>
                        <div className="content">
                            <h3>{selector[4].accTitle}</h3>
                            <div className="price">${selector[4].accPrice} <span>{selector[4].accDiscountPrice}</span></div>
                            {/* eslint-disable-next-line */}
                            <a href="#" className="btn">{selector[4].accBtn}</a>
                        </div>
                    </div>

                    <div className="box">
                        <div className="image">
                            <img src={selector[4].accImages[1]} alt="" />
                        </div>
                        <div className="content">
                            <h3>{selector[4].accTitle}</h3>
                            <div className="price">${selector[4].accPrice} <span>{selector[4].accDiscountPrice}</span></div>
                            {/* eslint-disable-next-line */}
                            <a href="#" className="btn">{selector[4].accBtn}</a>
                        </div>
                    </div>

                    <div className="box">
                        <div className="image">
                            <img src={selector[4].accImages[2]} alt="" />
                        </div>
                        <div className="content">
                            <h3>{selector[4].accTitle}</h3>
                            <div className="price">${selector[4].accPrice} <span>{selector[4].accDiscountPrice}</span></div>
                            {/* eslint-disable-next-line */}
                            <a href="#" className="btn">{selector[4].accBtn}</a>
                        </div>
                    </div>

                    <div className="box">
                        <div className="image">
                            <img src={selector[4].accImages[0]} alt="" />
                        </div>
                        <div className="content">
                            <h3>{selector[4].accTitle}</h3>
                            <div className="price">${selector[4].accPrice} <span>{selector[4].accDiscountPrice}</span></div>
                            {/* eslint-disable-next-line */}
                            <a href="#" className="btn">{selector[4].accBtn}</a>
                        </div>
                    </div>

                    <div className="box">
                        <div className="image">
                            <img src={selector[4].accImages[1]} alt="" />
                        </div>
                        <div className="content">
                            <h3>{selector[4].accTitle}</h3>
                            <div className="price">${selector[4].accPrice} <span>{selector[4].accDiscountPrice}</span></div>
                            {/* eslint-disable-next-line */}
                            <a href="#" className="btn">{selector[4].accBtn}</a>
                        </div>
                    </div>

                    <div className="box">
                        <div className="image">
                            <img src={selector[4].accImages[2]} alt="" />
                        </div>
                        <div className="content">
                            <h3>{selector[4].accTitle}</h3>
                            <div className="price">${selector[4].accPrice} <span>{selector[4].accDiscountPrice}</span></div>
                            {/* eslint-disable-next-line */}
                            <a href="#" className="btn">{selector[4].accBtn}</a>
                        </div>
                    </div>

                    <div className="box">
                        <div className="image">
                            <img src={selector[4].accImages[0]} alt="" />
                        </div>
                        <div className="content">
                            <h3>{selector[4].accTitle}</h3>
                            <div className="price">${selector[4].accPrice} <span>{selector[4].accDiscountPrice}</span></div>
                            {/* eslint-disable-next-line */}
                            <a href="#" className="btn">{selector[4].accBtn}</a>
                        </div>
                    </div>

                </div>

            </section>
            
        </>
    )
}

export default AccessoriesSection
