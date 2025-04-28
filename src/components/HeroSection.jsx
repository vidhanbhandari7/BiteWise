import React from 'react'

const HeroSection = () => {
  return (
    <div className='flex flex-col gap-6 mt-15 justify-center align-middle items-center'>
        <div className='text-orange-600 font-medium border-1 border-orange-500 rounded-full bg-[#f8e8ce] px-5 py-4'>Your Personel Nutrition Assistant</div>
        <div className="text-5xl mt-2 font-extrabold leading-tight text-center">
            <p>Track your</p>
            <p>nutrition</p>
            <p>journey with AI</p>
        </div>

        <div className=''>
          <p className="mt-4 max-w-2xl text-center text-gray-600 text-lg leading-relaxed">Log meals in natural language, track calories effortlessly, and achieve your health goals with personalized insights.</p>
        </div>

        <div className='text-white rounded-xl bg-orange-400 py-2 px-4 hover:text-black transition-all duration-300'>Start tracking now!</div>
    </div>
  )
}

export default HeroSection