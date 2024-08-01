import React from 'react'
import "./WhyPage.css"
import { RiAwardFill } from 'react-icons/ri'
import { AiOutlineSafety } from 'react-icons/ai'
import { FaChildren, FaHandsHoldingChild } from 'react-icons/fa6'
import { FaAward } from 'react-icons/fa'
import { IoMdGift } from 'react-icons/io'
import { TbTableOptions } from 'react-icons/tb'
import { CiDeliveryTruck } from 'react-icons/ci'

function WhyPage() {
  return (
    <div className='whypage'>
      <h1 className='text-[22px] font-[600]'>TinyTiaraa Promises</h1>
      <p className='text-center'>The promises that we'll never break</p>
      <div className="whywrapaper flex justify-center">

      <div className="whysection">
        <div className="whycard w-[100%] shadow-sm bg-white">
          <div className="whyimg mb-[5px] w-[100%] flex justify-center sm:w-[80%] ">
            <RiAwardFill size={60} fill='#ac9969'/>
          </div>
          <div className="content">
            <h2 className='mt-[10px] mb-[5px]'>Hypoallergenic Materials</h2>
            <p>Safe for Sensitive Skin: Our hypoallergenic jewelry ensures no rashes, just smiles!</p>
          </div>
        </div>

        <div className="whycard w-[100%] shadow-sm bg-white">
          <div className="whyimg mb-[5px] w-[100%] flex justify-center sm:w-[80%]">
            <TbTableOptions  size={60} fill='#ac9969' strokeWidth={0.5} />
          </div>
          <div className="content">
            <h2 className='mt-[10px] mb-[5px]'>Customizable Options</h2>
            <p>Personalize with Love: Engrave a name or date to make your gift timeless.</p>
          </div>
        </div>


        <div className="whycard w-[100%] shadow-sm bg-white">
          <div className="whyimg mb-[5px] w-[100%] flex justify-center sm:w-[80%]">
          <AiOutlineSafety size={60} fill='#ac9969'/>
          </div>
          <div className="content">
            <h2 className='mt-[10px] mb-[5px]'>Child-Safe Designs</h2>
            <p>Designed with Care: Secure clasps and smooth edges for playful days.</p>
          </div>
        </div>

        <div className="whycard w-[100%] shadow-sm bg-white">
          <div className="whyimg mb-[5px] w-[100%] flex justify-center sm:w-[80%]">
          <FaHandsHoldingChild size={60} fill='#ac9969'/> 
          </div>
          <div className="content">
            <h2 className='mt-[10px] mb-[5px]'>Crafted with Love</h2>
            <p>Handcrafted Perfection: Each piece is crafted with love and attention to detail.Perfectly crafted to adapt and shine as they do."</p>
          </div>
        </div>

        <div className="whycard w-[100%] shadow-sm bg-white">
          <div className="whyimg mb-[5px] w-[100%] flex justify-center sm:w-[80%]">
          <FaChildren size={60} fill='#ac9969'/> 
          </div>
          <div className="content">
            <h2 className='mt-[10px] mb-[5px]'>Age-Appropriate Styles</h2>
            <p>Grow with Style: Jewelry that evolves with your child’s tastes and ages.Designed to complement every milestone with elegance and charm</p>
          </div>
        </div>

        <div className="whycard w-[100%] shadow-sm bg-white">
          <div className=" mb-[5px] w-[80%] fl10x justify-center whyimg sm:w-[80%]">
          <FaAward size={60} fill='#ac9969'/>
          </div>
          <div className="content">
            <h2 className='mt-[10px] mb-[5px]'>SGL Certified Jewellery</h2>
            <p>Each piece of our diamond jewellery comes with the assurance of quality, certified by the SGL, a government-authorized laboratory.</p>
          </div>
        </div>
        <div className="whycard w-[100%] shadow-sm bg-white">
          <div className="whyimg mb-[5px] w-[100%] flex justify-center sm:w-[80%]">
          <IoMdGift size={60} fill='#ac9969'/>
          </div>
          <div className="content">
            <h2 className='mt-[10px] mb-[5px]'>Magical Gifting</h2>
            <p>Tiny Tiaraa is the ideal spot for gifts that bring joy. Each piece comes beautifully packaged, ready to create cherished memories.</p>
          </div>
        </div>
        <div className="whycard w-[100%] shadow-sm bg-white">
          <div className="whyimg mb-[5px] w-[100%] flex justify-center sm:w-[80%]">
          <CiDeliveryTruck size={60} fill='#ac9969'/>
          </div>
          <div className="content">
            <h2 className='mt-[10px] mb-[5px]'>Free Delivery Services</h2>
            <p>Get your orders where they need to be at lightning speed. Our express service guarantees delivery within 48 Hours</p>
          </div>
        </div>
        
        
      </div>
      </div>


    </div>
  )
}

export default WhyPage
