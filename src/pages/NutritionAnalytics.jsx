import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import BiteWiseHeader from '../components/BiteWiseHeader';
const data = [
  { day: 'Sun', calories: 0 },
  { day: 'Mon', calories: 900 },
  { day: 'Tue', calories: 0 },
  { day: 'Wed', calories: 0 },
  { day: 'Thu', calories: 0 },
  { day: 'Fri', calories: 0 },
  { day: 'Sat', calories: 0 },
];


export default function AnalyticsDashboard() {
  
  return (
    <div>
      <BiteWiseHeader/>
    <div className="p-6 bg-[#fff8f4] min-h-screen text-[#2c2c2c]">
      <h1 className="text-2xl font-bold mb-2">Analytics</h1>
      <p className="mb-6 text-sm">View insights and trends from your nutrition journey</p>

      <div className="bg-white p-4 rounded-2xl shadow-sm">
        <h2 className="text-lg font-semibold mb-4">Weekly Calorie Intake</h2>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="calories" stroke="#b46d45" strokeWidth={2} dot={{ r: 4 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
        <div className="bg-white p-4 rounded-2xl shadow-sm">
          <p className="text-sm text-gray-500">Proteins</p>
          <p className="text-xl font-bold text-orange-700">31g</p>
          <p className="text-sm text-gray-500">Daily Average</p>
        </div>
        <div className="bg-white p-4 rounded-2xl shadow-sm">
          <p className="text-sm text-gray-500">Carbohydrates</p>
          <p className="text-xl font-bold text-orange-700">86g</p>
          <p className="text-sm text-gray-500">Daily Average</p>
        </div>
        <div className="bg-white p-4 rounded-2xl shadow-sm">
          <p className="text-sm text-gray-500">Fats</p>
          <p className="text-xl font-bold text-orange-700">16g</p>
          <p className="text-sm text-gray-500">Daily Average</p>
        </div>
      </div>

      <div className="bg-white mt-6 p-4 rounded-2xl shadow-sm">
        <h3 className="text-md font-semibold mb-1">Weekly Summary</h3>
        <p className="text-sm text-gray-500">Average Daily Calories</p>
        <p className="text-lg font-bold text-orange-700">159 cal</p>
      </div>
    </div>
    </div>
  );
}