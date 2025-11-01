// src/components/WeatherDisplay.jsx
import React from "react";
export default function WeatherDisplay({ data }) {
  if (!data) return null;
  const { name, main, weather } = data;
  return (
    <div className="mt-4 p-4 border rounded">
      <h2 className="text-xl font-bold">{name}</h2>
      <p>{weather[0].description}</p>
      <p>Temp: {Math.round(main.temp - 273.15)}°C</p>
    </div>
  );
}