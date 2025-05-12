import React from "react";
import { useState, useEffect } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import BiteWiseHeader from "../components/BiteWiseHeader";

const MealTracker = () => {
  const [mealDescription, setMealDescription] = useState("");
  const [meals, setMeals] = useState(() => {
    // Load meals from localStorage on initial render
    const savedMeals = localStorage.getItem("meals");
    return savedMeals ? JSON.parse(savedMeals) : [];
  });
  const [loading, setLoading] = useState(false);

  // Calculate total calories consumed
  const totalCalories = meals.reduce((acc, meal) => acc + meal.calories, 0);
  const targetMacros = JSON.parse(localStorage.getItem("result")) || {
    calories: 2000,
    protein: 100,
    fats: 70,
    carbs: 250,
  };
  const targetCalories = parseInt(targetMacros.calories);
  // Calculate percentage of calories consumed
  const caloriesPercentage = Math.min(
    Math.round((totalCalories / targetCalories) * 100),
    100
  );

  // Calculate total nutrition values
  const totalProtein = meals.reduce((acc, meal) => acc + meal.protein, 0);
  const totalFats = meals.reduce((acc, meal) => acc + meal.fats, 0);
  const totalCarbs = meals.reduce((acc, meal) => acc + meal.carbs, 0);

  // Get targets from localStorage or use defaults
  const targetProtein = parseInt(targetMacros.protein);
  const targetFats = parseInt(targetMacros.fat);
  const targetCarbs = parseInt(targetMacros.carbs);

  // Calculate percentages
  const proteinPercentage = Math.min(
    Math.round((totalProtein / targetProtein) * 100),
    100
  );
  const fatsPercentage = Math.min(
    Math.round((totalFats / targetFats) * 100),
    100
  );
  const carbsPercentage = Math.min(
    Math.round((totalCarbs / targetCarbs) * 100),
    100
  );

  // Pie data for each
  const pieDataCalories = [
    { name: "Consumed", value: caloriesPercentage, color: "#FF8042" },
    { name: "Remaining", value: 100 - caloriesPercentage, color: "#E5E7EB" },
  ];
  const pieDataProtein = [
    { name: "Consumed", value: proteinPercentage, color: "#FF8042" },
    { name: "Remaining", value: 100 - proteinPercentage, color: "#E5E7EB" },
  ];
  const pieDataFats = [
    { name: "Consumed", value: fatsPercentage, color: "#FF8042" },
    { name: "Remaining", value: 100 - fatsPercentage, color: "#E5E7EB" },
  ];
  const pieDataCarbs = [
    { name: "Consumed", value: carbsPercentage, color: "#FF8042" },
    { name: "Remaining", value: 100 - carbsPercentage, color: "#E5E7EB" },
  ];

  // Save meals to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("meals", JSON.stringify(meals));
  }, [meals]);

  const handleAddMeal = async () => {
    if (mealDescription.trim()) {
      setLoading(true);
      try {
        const response = await fetch(
          "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyBL0VbUvDez4Lg26_x-8LsGy4O51aSRFCY",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              contents: [
                {
                  parts: [
                    {
                      text: `Analyze this meal and return ONLY a JSON object with calories and protein in grams. Format: {"calories": number, "protein": number, "fats": number, "carbs": number}. Meal: ${mealDescription}`,
                    },
                  ],
                },
              ],
            }),
          }
        );

        const data = await response.json();
        console.log(data);
        const jsonText = data.candidates[0].content.parts[0].text.replace(
          /```json\n|\n```/g,
          ""
        );
        const nutritionData = JSON.parse(jsonText);

        setMeals([
          ...meals,
          {
            description: mealDescription,
            calories: nutritionData.calories,
            protein: nutritionData.protein,
            fats: nutritionData.fats,
            carbs: nutritionData.carbs,
          },
        ]);

        setMealDescription("");
      } catch (error) {
        console.error("Error analyzing meal:", error);
        setMeals([
          ...meals,
          {
            description: mealDescription,
            calories: 0,
            protein: 0,
            fats: 0,
            carbs: 0,
          },
        ]);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
  <div>
    <BiteWiseHeader/>
    <div className='mt-4 max-w-6xl mx-auto p-6 bg-orange-50 min-h-screen font-poppins'>
      <h1 className='text-2xl font-bold text-gray-800 mb-1'>Track Meals</h1>
      <p className='text-gray-500 text-sm mb-6'>
        Log your meals and track your daily nutrition progress
      </p>

      {/* Today's Progress */}
      <div className='bg-white rounded-lg p-6 mb-6 border border-amber-100'>
        <h2 className='text-lg font-medium text-gray-800 mb-8'>
          Today's Progress
        </h2>

        <div className='flex flex-wrap justify-center items-center gap-6'>
          {/* Calories Progress */}
          <div className='flex flex-col items-center'>
            <ResponsiveContainer width={200} height={200}>
              <PieChart>
                <Pie
                  data={pieDataCalories}
                  cx='50%'
                  cy='50%'
                  innerRadius={45}
                  outerRadius={60}
                  startAngle={90}
                  endAngle={-270}
                  dataKey='value'
                >
                  {pieDataCalories.map((entry, index) => (
                    <Cell key={`cell-cal-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  formatter={(value, name) => {
                    if (name === "Consumed") {
                      const cal = Math.round(
                        (caloriesPercentage / 100) * targetCalories
                      );
                      return [
                        `${caloriesPercentage}% (${cal} cal)`,
                        "Consumed",
                      ];
                    } else {
                      const rem = 100 - caloriesPercentage;
                      const cal =
                        targetCalories -
                        Math.round((caloriesPercentage / 100) * targetCalories);
                      return [`${rem}% (${cal} cal)`, "Remaining"];
                    }
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
            <div className='text-center mt-1'>
              <div className='text-xl font-bold text-gray-800'>
                {caloriesPercentage}%
              </div>
              <div className='text-xs text-gray-500'>
                {totalCalories} / {targetCalories} calories
              </div>
            </div>
          </div>
          {/* Protein Progress */}
          <div className='flex flex-col items-center'>
            <ResponsiveContainer width={200} height={200}>
              <PieChart>
                <Pie
                  data={pieDataProtein}
                  cx='50%'
                  cy='50%'
                  innerRadius={45}
                  outerRadius={60}
                  startAngle={90}
                  endAngle={-270}
                  dataKey='value'
                >
                  {pieDataProtein.map((entry, index) => (
                    <Cell key={`cell-protein-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  formatter={(value, name) => {
                    if (name === "Consumed") {
                      const grams = Math.round(
                        (proteinPercentage / 100) * targetProtein
                      );
                      return [`${proteinPercentage}% (${grams}g)`, "Consumed"];
                    } else {
                      const rem = 100 - proteinPercentage;
                      const grams =
                        targetProtein -
                        Math.round((proteinPercentage / 100) * targetProtein);
                      return [`${rem}% (${grams}g)`, "Remaining"];
                    }
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
            <div className='text-center mt-1'>
              <div className='text-xl font-bold text-gray-800'>
                {proteinPercentage}%
              </div>
              <div className='text-xs text-gray-500'>
                {totalProtein} / {targetProtein}g protein
              </div>
            </div>
          </div>
          {/* Fats Progress */}
          <div className='flex flex-col items-center'>
            <ResponsiveContainer width={200} height={200}>
              <PieChart>
                <Pie
                  data={pieDataFats}
                  cx='50%'
                  cy='50%'
                  innerRadius={45}
                  outerRadius={60}
                  startAngle={90}
                  endAngle={-270}
                  dataKey='value'
                >
                  {pieDataFats.map((entry, index) => (
                    <Cell key={`cell-fats-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  formatter={(value, name) => {
                    if (name === "Consumed") {
                      const grams = Math.round(
                        (fatsPercentage / 100) * targetFats
                      );
                      return [`${fatsPercentage}% (${grams}g)`, "Consumed"];
                    } else {
                      const rem = 100 - fatsPercentage;
                      const grams =
                        targetFats -
                        Math.round((fatsPercentage / 100) * targetFats);
                      return [`${rem}% (${grams}g)`, "Remaining"];
                    }
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
            <div className='text-center mt-1'>
              <div className='text-xl font-bold text-gray-800'>
                {fatsPercentage}%
              </div>
              <div className='text-xs text-gray-500'>
                {totalFats} / {targetFats}g fats
              </div>
            </div>
          </div>
          {/* Carbs Progress */}
          <div className='flex flex-col items-center'>
            <ResponsiveContainer width={200} height={200}>
              <PieChart>
                <Pie
                  data={pieDataCarbs}
                  cx='50%'
                  cy='50%'
                  innerRadius={45}
                  outerRadius={60}
                  startAngle={90}
                  endAngle={-270}
                  dataKey='value'
                >
                  {pieDataCarbs.map((entry, index) => (
                    <Cell key={`cell-carbs-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  formatter={(value, name) => {
                    if (name === "Consumed") {
                      const grams = Math.round(
                        (carbsPercentage / 100) * targetCarbs
                      );
                      return [`${carbsPercentage}% (${grams}g)`, "Consumed"];
                    } else {
                      const rem = 100 - carbsPercentage;
                      const grams =
                        targetCarbs -
                        Math.round((carbsPercentage / 100) * targetCarbs);
                      return [`${rem}% (${grams}g)`, "Remaining"];
                    }
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
            <div className='text-center mt-1'>
              <div className='text-xl font-bold text-gray-800'>
                {carbsPercentage}%
              </div>
              <div className='text-xs text-gray-500'>
                {totalCarbs} / {targetCarbs}g carbs
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add Meal */}
      <div className='bg-white rounded-lg p-6 mb-6 border border-amber-100'>
        <h2 className='text-lg font-medium text-gray-800 mb-4'>Add Meal</h2>

        <div className='mb-4'>
          <textarea
            value={mealDescription}
            onChange={(e) => setMealDescription(e.target.value)}
            placeholder='Describe your meal (e.g., 1 bowl rice, 100g chicken, 50g broccoli)'
            className='w-full p-3 border border-orange-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-300 min-h-24'
          />
        </div>

        <button
          onClick={handleAddMeal}
          disabled={loading}
          className='px-5 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-md flex items-center transition-colors disabled:bg-orange-300'
        >
          {loading ? "Analyzing..." : "Add+"}
        </button>
      </div>

      {/* Today's Meals */}
      <div className='bg-white rounded-lg p-6 border border-amber-100'>
        <h2 className='text-lg font-medium text-gray-800 mb-6'>
          Today's Meals
        </h2>

        {meals.length === 0 ? (
          <div className='flex flex-col items-center justify-center py-12 text-center'>
            <div className='w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center mb-4'>
              +
            </div>
            <p className='text-gray-700 font-medium mb-2'>
              No meals logged yet
            </p>
            <p className='text-gray-500 text-sm'>
              Start tracking your meals by adding your first entry above
            </p>
          </div>
        ) : (
          <div className='space-y-4'>
            {meals.map((meal, index) => (
              <div
                key={index}
                className='p-4 border border-gray-100 rounded-lg flex justify-between'
              >
                <div>
                  <span className='block'>🍽️{meal.description}</span>
                  <span className='text-sm text-gray-500'>
                    {meal.calories} calories | {meal.protein}g protein |{" "}
                    {meal.fats}g fats | {meal.carbs}g carbs
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
    </div>
  );
};

export default MealTracker;
