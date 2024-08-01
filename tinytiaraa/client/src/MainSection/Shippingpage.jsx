import React from 'react'
import './Shipping.css'
import { useNavigate } from 'react-router-dom'

function Shippingpage() {
  const navigate = useNavigate()
  return (
    <div className='shippingsection'>
            <h1 className='text-[22px] text-center mb-3'>Shipping Info</h1>


      <div className="shippingcard">
        <div className="shippingimg">
            <img src="https://lirp.cdn-website.com/48f148a6/dms3rep/multi/opt/TT+Deliver+Box-1920w.png" alt="" />
        </div>
        <div className="shippingcontent">
            <div className="shooingadjust">
            <h2>Fast, Reliable, and Hassle-Free Delivery Services</h2>
            <p>Get your orders where they need to be at lightning speed. Our express service guarantees delivery within 48 Hours*(T&C).</p>
            <button onClick={()=>{navigate("/shop")}}>Shop Now</button>
            </div>

        </div>
      </div>
    </div>
  )
}

export default Shippingpage
