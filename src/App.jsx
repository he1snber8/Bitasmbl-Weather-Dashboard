// src/App.jsx
import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import WeatherDisplay from "./components/WeatherDisplay";
import { fetchWeather } from "./api/weatherApi";
export default function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const handleSearch = async city => {
    try { setError(null); const res = await fetchWeather(city); setData(res); } catch { setError("Failed to fetch"); }
  };
  return (
    <div className="max-w-md mx-auto p-4">
      <SearchBar onSearch={handleSearch} />
      {error && <p className="text-red-500">{error}</p>}
      <WeatherDisplay data={data} />
    </div>
  );
}