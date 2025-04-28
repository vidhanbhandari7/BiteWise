import React from 'react'
import speaking from '../images/speaking.png'
import target from '../images/target.png'
import analysis from '../images/analysis.png'

const Footer = () => {
  return (
    <footer className='flex flex-row justify-center align-middle items-center gap-8 pb-8'>
      <div className='flex flex-col gap-2 mt-6 border-1 border-amber-400 rounded-lg bg-[#fdf7f0] p-2 '>
        <img src={speaking} alt="guy speaking " className='w-8 h-8'/>
        <p className='font-bold '>Natural Language Logging</p>
        <p className='text-gray-600 font-medium'>Log your meals in plain english,<br/> AI will the rest</p>
      </div>

      <div className='flex flex-col gap-2 mt-6 border-1  border-amber-400 rounded-lg bg-[#fdf7f0] p-2'>
        <img src={target} alt="guy speaking " className='w-8 h-8'/>
        <p className='font-bold' >Natural Language Logging</p>
        <p className='text-gray-600 font-medium' >Log your meals in plain english,<br/>AI will the rest</p>
      </div>

      <div className='flex flex-col gap-2 mt-6  border-amber-400 rounded-lg bg-[#fdf7f0] border-1 p-2'>
        <img src={analysis} alt="guy speaking " className='w-8 h-8'/>
        <p className='font-bold' >Natural Language Logging</p>
        <p className='text-gray-600 font-medium'>Log your meals in plain english,<br/>AI will the rest</p>
      </div>
    </footer>
  )
}

export default Footer