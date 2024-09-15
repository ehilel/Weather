import React, { useState, useEffect } from 'react';
import './Weather.css'

const API_KEY = '8ee633956bad6ae1965b557a94ecfcba';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

const Weather = ({ city }) => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      const response = await fetch(`${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric&lang=he`);
      const data = await response.json();
      setWeather(data);
    };

    fetchWeather();
  }, [city]);

  if (!weather) return <div>טוען...</div>;

  const { name, weather: weatherDetails, main } = weather;
  const description = weatherDetails[0].description;
  const temp = Math.round(main.temp);
  const feelsLike = Math.round(main.feels_like);
  const humidity = main.humidity;

  return (
    <div className="weather-card">
      <h2>{name}</h2>
      <p>{description}</p>
      <p> {temp}°C :טמפ' נמדדת </p>
      <p> {feelsLike}°C :טמפ' מורגשת </p>
      <p>אחוזי לחות: {humidity}%</p>
   
    </div>
  );
};

export default Weather;
