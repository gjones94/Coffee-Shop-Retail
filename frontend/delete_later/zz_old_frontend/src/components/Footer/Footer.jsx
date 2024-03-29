import React from 'react'
import { useSelector } from 'react-redux'
import './Footer.css'

const Footer = () => {

    const selector = useSelector(state => state.reducer1)

    return (
        <>

            <section className="footer">
                <div className="credit">{selector[8].footerDescription[0]} <span>{selector[8].footerDescription[1]}</span> {selector[8].footerDescription[2]}</div>
                
                </section> 
            
        </>
    )
}


export default Footer
