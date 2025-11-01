// src/components/SearchBar.jsx
import React, { useState } from "react";
export default function SearchBar({ onSearch }) {
  const [city, setCity] = useState("");
  return (
    <form onSubmit={e=>{e.preventDefault();onSearch(city);}} className="flex">
      <input value={city} onChange={e=>setCity(e.target.value)} placeholder="City" className="border p-2" />
      <button type="submit" className="ml-2 p-2 bg-blue-500 text-white">Search</button>
    </form>
  );
}