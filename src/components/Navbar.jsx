import React from 'react'

const Navbar = () => {
  return (
    <nav className='w-full flex flex-row align-middle items-center justify-between py-4 px-8 shadow-lg'>
        <h1 className='text-xl font-semibold text-gray-800'>BiteWise</h1>
        <div className='flex flex-row justify-center align-middle items-center gap-4'>
            <button className='text-gray-700 font-medium hover:text-orange-600'>Sign In</button>
            <button className='bg-orange-500 hover:bg-orange-600 text-white font-medium px-5 py-2 rounded-full transition-colors'>Sign Up</button>
        </div>

    </nav>
  )
}

export default Navbar