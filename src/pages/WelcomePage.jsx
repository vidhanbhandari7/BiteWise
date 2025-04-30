import React from 'react'
import { useState, useContext } from 'react';
import { calculateMacros } from '../utils/macroCalculator.js';
import { ResultContext } from '../context/ResultContext.jsx';
import { useNavigate } from 'react-router-dom';

export default function WelcomePage() {
  const [age, setAge] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [goal, setGoal] = useState('Lose Weight');

  const { setResult } = useContext(ResultContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = calculateMacros(parseInt(age), parseInt(height), parseInt(weight), goal);
    setResult(result);             // Set context
    navigate('/ResultPage');      // Navigate to result page
  };

  return (
    <div className='flex h-screen justify-center align-middle items-center bg-gradient-to-b from-[#fef9ef] via-[#fffbf5] to-[#fffdfc] font-poppins'>
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-center mb-2">Welcome Aboard</h2>
      <p className="text-center text-gray-500 mb-4">Let's personalize your nutrition journey</p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 font-semibold">Age</label>
          <input type="number" value={age} onChange={(e) => setAge(e.target.value)} placeholder="Enter your age" className="w-full border p-2 rounded-md" required />
        </div>
        <div>
          <label className="block mb-1 font-semibold">Height (cm)</label>
          <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} placeholder="Enter your height in cm" className="w-full border p-2 rounded-md" required />
        </div>
        <div>
          <label className="block mb-1 font-semibold">Weight (kg)</label>
          <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} placeholder="Enter your weight in kg" className="w-full border p-2 rounded-md" required />
        </div>
        <div>
          <label className="block mb-1 font-semibold">Weight Goal</label>
          <select value={goal} onChange={(e) => setGoal(e.target.value)} className="w-full border p-2 rounded-md">
            <option>Lose Weight</option>
            <option>Maintain Weight</option>
            <option>Gain Weight</option>
          </select>
        </div>
        <button type="submit" className="bg-orange-500 text-white py-2 px-4 rounded-md w-full font-semibold">Calculate Goals →</button>
      </form>
      </div>
    </div>
  );
}