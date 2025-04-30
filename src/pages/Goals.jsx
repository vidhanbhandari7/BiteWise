import React from 'react'
import { Navigate, useNavigate } from 'react-router'
const Goals = () => {
    const navigate = useNavigate();
  return (
       <div className='flex h-screen justify-center align-middle items-center bg-gradient-to-b from-[#fef9ef] via-[#fffbf5] to-[#fffdfc] font-poppins'>
        <div className='rounded-lg text-card-foreground shadow-xl bg-orange-100/40 border border-orange-200/50 h-140 w-140'>
            <div className='flex flex-col p-6 space-y-1'>
                <h4 className='text-center tracking-tight text-2xl font-medium'>Your personalized goals</h4>
                <p className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 pt-7'>🔥 Daily calorie Goal</p>
                <input type="text" className='flex h-10 w-full rounded-md border border-orange-200/50 px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm bg-white/60 backdrop-blur input-focus pt-0.2'  />

                <p className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 pt-7'>🍗 Daily Protien Goal (g)</p>
                <input type="text" className='flex h-10 w-full rounded-md border border-orange-200/50 px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm bg-white/60 backdrop-blur input-focus pt-0.2' />

                <p className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 pt-7'>🍚 Daily Carbs Goal (g)</p>
                <input type="text" className='flex h-10 w-full rounded-md border border-orange-200/50 px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm bg-white/60 backdrop-blur input-focus pt-0.2' />

                <p className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 pt-7'>🥑 Daily Fats Goal (g)</p>
                <input type="text" className='flex h-10 w-full rounded-md border border-orange-200/50 px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm bg-white/60 backdrop-blur input-focus pt-0.2' />
                <div className='flex flex-row gap-5'>
                    <button className='gap-2 whitespace-nowrap rounded-md text-base font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 outline outline-gray-300 h-10 px-4 py-2 w-60 bg-gray-300 mt-6 text-black hover:text-white duration-300' onClick={()=>navigate("/Welcome")}>⬅ Go back</button>

                    <button className=' whitespace-nowrap rounded-md text-base font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 outline outline-orange-600/90 h-10 px-4 py-2 w-60 bg-orange-400 mt-6 text-amber-50 hover:text-black duration-300'>Start tracking</button>
                </div>
            </div>

            
            
        </div>
    </div>
  )
}

export default Goals