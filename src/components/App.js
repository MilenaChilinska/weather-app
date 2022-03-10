import React, { useState } from "react";
import Result from "./Result";
import "./App.css";
import '../index.css';

function App() {
  const [city, setCity] = useState('')
  const [weatherData, setWeatherData] = useState({
    date: "",
    city: "",
    temp: "",
    humidity: "",
    err: false,
  });
  const handleInput = (e) => {
    setCity(e.target.value);
  };
  const handleCitySubmit = (e) => {
    e.preventDefault();
    console.log("Potwierdzam");
    // const API = `http://api.weatherstack.com/current?access_key=283022ff78c8a4dd1f809ab880c65241&query=${city}`;
    const API = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=742adc56bc4ca2c32375e0cea556ad3c&units=metric`;
    fetch(API)
      .then((response) => {
        console.log(response);
        if (response.ok) {
          return response.json();
        }
        throw new Error("Blad");
      })
      .then((data) => {
        console.log(data);
        setWeatherData({
          err: false,
          date: new Date().toLocaleDateString(),
          city,
          temp: Math.floor(data.main.temp),
          humidity: data.main.humidity,
        });
      })
      .catch((error) => {
        console.log(error);
        setWeatherData({
          err: true,
        })
      });
  };
  
  return (
    <div className="wrapper"> 
      <div className="top"> 
        <h1>Weather App</h1> 
        <div className="main-info"> 
          <div>
          <form onSubmit={handleCitySubmit}>
          <input value={city} onChange={handleInput} type="text" placeholder='Type city...' />
          <button>Search city</button>
          </form>
          </div>
        </div>
      </div>
        
      <Result weather={weatherData} />
    </div>
  );
}

export default App;
