# Bitasmbl-Weather-Dashboard

A beginner-friendly React-based weather dashboard that allows users to search for any city and view current weather details using the OpenWeather API, emphasizing API integration, component-based architecture, and responsive design with Tailwind CSS.

## Tech Stack

- React
- Tailwind CSS
- OpenWeather API

## Requirements

- Use functional React components with hooks (Hint: Hooks simplify component state handling)
- Fetch real-time weather data from OpenWeather API (Hint: Handle API errors gracefully with try/catch)
- Style UI responsively using Tailwind CSS (Hint: Use md:, lg: classes for responsive adjustments)

## Installation

1. Clone the repository:
   bash
   git clone https://github.com/your-username/Bitasmbl-Weather-Dashboard.git
   cd Bitasmbl-Weather-Dashboard
   
2. Install dependencies:
   bash
   npm install
   
3. Create a `.env` file in the project root and add your OpenWeather API key:
   dotenv
   REACT_APP_OPENWEATHER_API_KEY=your_api_key_here
   

## Usage

1. Start the development server:
   bash
   npm start
   
2. Open your browser and navigate to `http://localhost:3000`.
3. Search for any city in the search bar to view current weather details.

## Implementation Steps

1. Initialize a new React app using Create React App.
2. Install Tailwind CSS and configure `tailwind.config.js`.
3. Create a `.env` file to store `REACT_APP_OPENWEATHER_API_KEY`.
4. Build a `WeatherDashboard` component with a search input and results display.
5. Use `useState` and `useEffect` hooks to manage form data and fetch weather data.
6. Implement the `fetchWeather` function with `try/catch` for error handling against the OpenWeather API endpoint (`https://api.openweathermap.org/data/2.5/weather`).
7. Create reusable UI components (e.g., `SearchBar`, `WeatherCard`) styled with Tailwind CSS responsive classes (`md:`, `lg:`).
8. Test responsiveness across breakpoints and adjust styling as needed.

## API Endpoints

- GET `https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}&units=metric`