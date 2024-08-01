import React from 'react'
import './Aboutsection4.css'
import { useNavigate } from 'react-router-dom'
function AboutSection4() {
  const navigate = useNavigate()
  return (
    <div className='Aboutsection4'>
        <div className='aboutsection4con'>
            <p>Thank you for choosing Tiny Tiaraa Kids Jewellery to be a part of your family's memories. Let's celebrate the sparkle of childhood together</p>

            <p>Let the magic begin.</p>
            <button onClick={()=>{navigate('/shop')}}>See Collection</button>
        </div>
      
    </div>
  )
}

export default AboutSection4
