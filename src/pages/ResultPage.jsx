import React from 'react';
import { useContext } from 'react';
import { ResultContext } from '../context/ResultContext';
import { Navigate, useNavigate } from 'react-router'

export default function ResultPage() {
  const { result } = useContext(ResultContext);
  const navigate = useNavigate();
  return (

    <div className='flex h-screen justify-center align-middle items-center bg-gradient-to-b from-[#fef9ef] via-[#fffbf5] to-[#fffdfc] font-poppins'>
    
      <div className="bg-orange-50 p-8 rounded-xl shadow-md w-full max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-center mb-6">Your personalized goals</h2>
      <div className="space-y-4">
        <div>
          <label className="block font-medium">🔥 Daily calorie Goal</label>
          <input type="text" readOnly value={result.calories} className="w-full bg-white p-2 rounded-md" />
        </div>
        <div>
        <label className="block font-medium">🍗 Daily Protein Goal (g)</label>
        <input type="text" readOnly value={result.protein} className="w-full bg-white p-2 rounded-md" />
        </div>
        <div>
        <label className="block font-medium">🍭 Daily Carbs Goal (g)</label>
        <input type="text" readOnly value={result.carbs} className="w-full bg-white p-2 rounded-md" />
        </div>
        <div>
        <label className="block font-medium">🥑 Daily Fats Goal (g)</label>
        <input type="text" readOnly value={result.fat} className="w-full bg-white p-2 rounded-md" />
        </div>
      </div>
      <div className="flex justify-between mt-6">
        <button className="bg-gray-200 px-4 py-2 rounded-md"onClick={()=>navigate("/WelcomePage")}>← Go back</button>
        <button className="bg-orange-500 text-white px-4 py-2 rounded-md">Start tracking</button>
      </div>
      </div>
    </div>
);
}
