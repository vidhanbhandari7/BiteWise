import { useState } from "react";
import { Navigate, useNavigate } from "react-router";
export default function SettingsPage() {
  const navigate = useNavigate();
  const [result, setResult] = useState(
    JSON.parse(localStorage.getItem("result"))
  );
  return (
    <div className='max-w-4xl mx-auto p-6'>
      <h1 className='text-3xl font-bold text-gray-800 mb-2'>Settings</h1>
      <p className='text-gray-500 mb-8'>Manage your profile and preferences</p>

      <div className='bg-orange-50 rounded-lg p-8 border border-orange-100'>
        <h2 className='text-2xl font-semibold text-gray-800 mb-6'>
          Personal Information
        </h2>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-8'>
          <div>
            <label className='block text-gray-700 mb-2' htmlFor='height'>
              Height (cm)
            </label>
            <input
              type='number'
              id='height'
              className='w-full p-3 border border-gray-300 rounded-md'
              defaultValue='176'
            />
          </div>

          <div>
            <label className='block text-gray-700 mb-2' htmlFor='weight'>
              Weight (kg)
            </label>
            <input
              type='number'
              id='weight'
              className='w-full p-3 border border-gray-300 rounded-md'
              defaultValue='70'
            />
          </div>
        </div>

        <h2 className='text-2xl font-semibold text-gray-800 mb-6'>
          Nutrition Goals
        </h2>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-4'>
          <div>
            <label className='block text-gray-700 mb-2' htmlFor='calories'>
              Daily Calories
            </label>
            <input
              value={result.calories}
              type='number'
              id='calories'
              className='w-full p-3 border border-gray-300 rounded-md'
              defaultValue='2700'
            />
            <p className='text-xs text-gray-400 mt-1'>
              Target calories per day
            </p>
          </div>

          <div>
            <label className='block text-gray-700 mb-2' htmlFor='protein'>
              Protein (g)
            </label>
            <input
              value={result.protein}
              type='number'
              id='protein'
              className='w-full p-3 border border-gray-300 rounded-md'
              defaultValue='150'
            />
            <p className='text-xs text-gray-400 mt-1'>Daily protein target</p>
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-8'>
          <div>
            <label className='block text-gray-700 mb-2' htmlFor='carbs'>
              Carbs (g)
            </label>
            <input
              value={result.carbs}
              type='number'
              id='carbs'
              className='w-full p-3 border border-gray-300 rounded-md'
              defaultValue='330'
            />
            <p className='text-xs text-gray-400 mt-1'>Daily carbs target</p>
          </div>

          <div>
            <label className='block text-gray-700 mb-2' htmlFor='fat'>
              Fat (g)
            </label>
            <input
              value={result.fat}
              type='number'
              id='fat'
              className='w-full p-3 border border-gray-300 rounded-md'
              defaultValue='75'
            />
            <p className='text-xs text-gray-400 mt-1'>Daily fat target</p>
          </div>
        </div>

        <button
          className='bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-6 rounded-md transition duration-200'
          onClick={() => {
            // Save nutrition goals to localStorage as 'result' object
            const calories = parseInt(
              document.getElementById("calories").value
            );
            const protein = parseInt(document.getElementById("protein").value);
            const fat = parseInt(document.getElementById("fat").value);
            const carbs = parseInt(document.getElementById("carbs").value);
            localStorage.setItem(
              "result",
              JSON.stringify({ calories, protein, fat, carbs })
            );
            navigate("/MealTracker");
          }}
        >
          Save Changes
        </button>
      </div>
    </div>
  );
}
