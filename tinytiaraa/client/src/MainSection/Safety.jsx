import React from 'react';
import { FaUserPlus, FaLink, FaShareAlt, FaGift } from 'react-icons/fa';
import './Safety.css'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Safety = () => {
  const { isAuthenticated, user, loading } = useSelector((state) => state.user)
  const navigate = useNavigate()
  

  return (
    <div className="safetbg flex flex-col items-center p-10 rounded-lg shadow-xl text-black">
      <h2 className="text-4xl font-extrabold mb-12 ">Referral Program</h2>
      <div className="flex flex-wrap justify-center w-full max-w-7xl">
        {/* Step 1: Sign Up */}
        <div className="flex flex-col items-center w-full sm:w-1/2 lg:w-1/4 p-4 cursor-pointer" onClick={()=>{ isAuthenticated ? navigate("/referrals") : navigate("/sign-up")}}>
          <div className="w-full h-full bg-white text-indigo-700 p-8 rounded-lg shadow-lg hover:shadow-2xl transform transition duration-300 hover:scale-105">
            <div className="w-20 h-20 flex items-center justify-center bg-indigo-500 text-white rounded-full mb-6 mx-auto">
              <FaUserPlus size={40} />
            </div>
            <h3 className="text-2xl font-semibold text-center">Sign Up</h3>
            <p className="text-center text-gray-700 mt-4">
              Create an account on our platform to get started.
            </p>
          </div>
        </div>

        {/* Step 2: Generate Link */}
        <div className="flex flex-col items-center w-full sm:w-1/2 lg:w-1/4 p-4 cursor-pointer">
          <div className="w-full h-full bg-white text-indigo-700 p-8 rounded-lg shadow-lg hover:shadow-2xl transform transition duration-300 hover:scale-105">
            <div className="w-20 h-20 flex items-center justify-center bg-indigo-500 text-white rounded-full mb-6 mx-auto">
              <FaLink size={40} />
            </div>
            <h3 className="text-2xl font-semibold text-center">Generate Link</h3>
            <p className="text-center text-gray-700 mt-4">
              Generate your unique referral link from your dashboard.
            </p>
          </div>
        </div>

        {/* Step 3: Share */}
        <div className="flex flex-col items-center w-full sm:w-1/2 lg:w-1/4 p-4 cursor-pointer">
          <div className="w-full h-full bg-white text-indigo-700 p-8 rounded-lg shadow-lg hover:shadow-2xl transform transition duration-300 hover:scale-105">
            <div className="w-20 h-20 flex items-center justify-center bg-indigo-500 text-white rounded-full mb-6 mx-auto">
              <FaShareAlt size={40} />
            </div>
            <h3 className="text-2xl font-semibold text-center">Share</h3>
            <p className="text-center text-gray-700 mt-4">
              Share your referral link with your friends and family.
            </p>
          </div>
        </div>

        {/* Step 4: Get Reward */}
        <div className="flex flex-col items-center w-full sm:w-1/2 lg:w-1/4 p-4 cursor-pointer">
          <div className="w-full h-full bg-white text-indigo-700 p-8 rounded-lg shadow-lg hover:shadow-2xl transform transition duration-300 hover:scale-105">
            <div className="w-20 h-20 flex items-center justify-center bg-indigo-500 text-white rounded-full mb-6 mx-auto">
              <FaGift size={40} />
            </div>
            <h3 className="text-2xl font-semibold text-center">Get Reward</h3>
            <p className="text-center text-gray-700 mt-4">
              Earn ₹200 for each successful order placed through your link.
            </p>
          </div>
        </div>
      </div>

      <div className='refbtn'>
        <button>Join Us</button>
      </div>
    </div>
  );
};

export default Safety;
