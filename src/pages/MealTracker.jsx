import React from 'react'

import { useState } from 'react';
// import { Navigate, useNavigate } from 'react-router'

const MealTracker = () => {
  // const navigate = useNavigate();
  const [mealDescription, setMealDescription] = useState('');
  const [meals, setMeals] = useState([]);

  const handleAddMeal = () => {
    if (mealDescription.trim()) {
      setMeals([...meals, mealDescription]);
      setMealDescription('');
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-orange-50 min-h-screen font-poppins">
      <h1 className="text-2xl font-bold text-gray-800 mb-1">Track Meals</h1>
      <p className="text-gray-500 text-sm mb-6">Log your meals and track your daily nutrition progress</p>
      
      {/* Today's Progress */}
      <div className="bg-white rounded-lg p-6 mb-6 border border-amber-100">
        <h2 className="text-lg font-medium text-gray-800 mb-8">Today's Progress</h2>
        
        <div className="flex justify-between items-center">
          {/* Calories Progress */}
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 rounded-full border-4 border-orange-100 flex items-center justify-center mb-2">
              <div className="text-center">
                <div className="text-xl font-bold">0%</div>
                <div className="text-xs text-gray-500">Calories</div>
              </div>
            </div>
          </div>
          
          {/* Protein Progress */}
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 rounded-full border-4 border-orange-100 flex items-center justify-center mb-2">
              <div className="text-center">
                <div className="text-xl font-bold">0%</div>
                <div className="text-xs text-gray-500">Protein</div>
              </div>
            </div>
          </div>
          
          {/* Carbs Progress */}
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 rounded-full border-4 border-orange-100 flex items-center justify-center mb-2">
              <div className="text-center">
                <div className="text-xl font-bold">0%</div>
                <div className="text-xs text-gray-500">Carbs</div>
              </div>
            </div>
          </div>
          
          {/* Fat Progress */}
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 rounded-full border-4 border-orange-100 flex items-center justify-center mb-2">
              <div className="text-center">
                <div className="text-xl font-bold">0%</div>
                <div className="text-xs text-gray-500">Fat</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Add Meal */}
      <div className="bg-white rounded-lg p-6 mb-6 border border-amber-100">
        <h2 className="text-lg font-medium text-gray-800 mb-4">Add Meal</h2>
        
        <div className="mb-4">
          <textarea
            value={mealDescription}
            onChange={(e) => setMealDescription(e.target.value)}
            placeholder="Describe your meal (e.g., 1 bowl rice, 100g chicken, 50g broccoli)"
            className="w-full p-3 border border-orange-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-300 min-h-24"
          />
        </div>
        
        <button 
          onClick={handleAddMeal}
          className="px-5 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-md flex items-center transition-colors"
        >
    
          Add+
        </button>
      </div>
      
      {/* Today's Meals */}
      <div className="bg-white rounded-lg p-6 border border-amber-100">
        <h2 className="text-lg font-medium text-gray-800 mb-6">Today's Meals</h2>
        
        {meals.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center mb-4">
              +
            </div>
            <p className="text-gray-700 font-medium mb-2">No meals logged yet</p>
            <p className="text-gray-500 text-sm">Start tracking your meals by adding your first entry above</p>
          </div>
        ) : (
          <div className="space-y-4">
            {meals.map((meal, index) => (
              <div key={index} className="p-4 border border-gray-100 rounded-lg flex justify-between">
                <span>{meal}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default MealTracker

