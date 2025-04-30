import React from 'react'

const Welcome = () => {
  return (
    <div className=' h-screen flex justify-center align-middle items-center bg-gradient-to-b from-[#fef9ef] via-[#fffbf5] to-[#fffdfc] font-poppins '>
     <div class="bg-white max-w-md w-full p-8 rounded-xl shadow-md">
    <h1 class="text-2xl font-semibold text-center text-gray-800 mb-2">Welcome Aboard</h1>
    <p class="text-center text-gray-500 mb-6">Let's personalize your nutrition journey</p>

    <h2 class="text-lg font-semibold text-gray-700 mb-4 text-center">Tell us about yourself</h2>

    <form class="space-y-4">
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">Age</label>
        <input type="number" placeholder="Enter your age"
          class="w-full border border-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-500 rounded-md px-4 py-2" />
      </div>

      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">Height (cm)</label>
        <input type="number" placeholder="Enter your height in cm"
          class="w-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500 rounded-md px-4 py-2" />
      </div>

      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">Weight (kg)</label>
        <input type="number" placeholder="Enter your weight in kg"
          class="w-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500 rounded-md px-4 py-2" />
      </div>

      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">Weight Goal</label>
        <select
          class="w-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500 rounded-md px-4 py-2">
          <option>Lose Weight</option>
          <option>Gain Weight</option>
        </select>
      </div>

      <button type="submit"
        class="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded-md mt-2 transition duration-200">
        Calculate Goals →
      </button>
    </form>
  </div>
  </div>
  )
}

export default Welcome