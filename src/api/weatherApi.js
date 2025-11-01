// src/api/weatherApi.js
export async function fetchWeather(city) {
  try {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=YOUR_API_KEY`);
    if (!res.ok) throw new Error("Network response error");
    return await res.json();
  } catch (err) {
    console.error(err);
    throw err;
  }
}