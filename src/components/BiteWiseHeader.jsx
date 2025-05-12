import React from 'react';
import { useState } from "react";
import { useNavigate } from "react-router";

export default function BiteWiseHeader() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  return (
    <header className="w-full bg-gradient-to-r from-orange-50 to-orange-100 py-4 px-6 flex justify-between items-center shadow-sm">
      <div className="font-medium text-gray-800 text-lg" onClick={() => navigate("/HomePage")}>BiteWise</div>
      <div className="h-8 w-8 rounded-full bg-gradient-to-br from-orange-300 to-red-400 shadow-md">
      <div className="relative inline-block text-left">
      {/* Trigger Button */}
      <button
        onClick={() => setOpen(!open)}
        className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-400 to-red-400 focus:outline-none shadow-lg"
      ></button>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 mt-2 w-44 origin-top-right rounded-xl bg-white shadow-lg ring-1 ring-black/10">
          <ul className="py-1 text-sm text-gray-700">
            <li>
              <button className="w-full text-left px-4 py-2 hover:bg-orange-50" onClick={() => navigate("/MealTracker")}>🍽️ Track</button>
            </li>
            <li>
              <button className="w-full text-left px-4 py-2 hover:bg-orange-50" onClick={() => navigate("/NutritionAnalytics")}>📊 Analytics</button>
            </li>
            <li>
              <button className="w-full text-left px-4 py-2 hover:bg-orange-50" onClick={() => navigate("/SettingsPage")}>⚙️ Settings</button>
            </li>
            <li>
              <button className="w-full text-left px-4 py-2 hover:bg-orange-50" onClick={() => navigate("/SignIn")}>↩️ Sign Out</button>
            </li>
          </ul>
        </div>
      )}
      </div>
    </div>
    </header>
  );
}