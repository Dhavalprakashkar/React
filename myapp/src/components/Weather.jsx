import React, { useState, useEffect } from "react";
import axios from "axios";
import backgroundImage from "./img/wee.jpg"

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("London");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchWeatherData = async (city) => {
    const options = {
      method: "GET",
      url: "https://weatherapi-com.p.rapidapi.com/forecast.json",
      params: { q: city, days: "3" },
      headers: {
        "x-rapidapi-key": "f48114461fmsh1c02aba6eb38357p1aa904jsn0ddbc6a0217d",
        "x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
      },
    };

    try {
      setLoading(true);
      const response = await axios.request(options);
      setWeatherData(response.data);
      console.log(response.data, "data");
      setLoading(false);
    } catch (error) {
      setError("Failed to fetch weather data");
      setLoading(false);
    }
  };

  // useEffect(() => {
  //   fetchWeatherData(city);
  // }, [city]);

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  return (
    
    <div style={{border:"3px solid black",backgroundImage:`url(${backgroundImage})`,backgroundRepeat:"no-repeat"}}>
        <div >
      <h1 style={{fontFamily:"Tahoma",color:"black",textShadow:"2px 2px  2px red"}}>Weather Forecast</h1>
      <input
        type="text"
        value={city}
        onChange={handleCityChange}
        placeholder="Enter city"
      />
      <button onClick={() => fetchWeatherData(city)}>Get Weather</button>
      {loading ? (
      <p>Loading...</p>
    ) : error ? (
      <p>{error}</p>
    ) : weatherData ? (
        <div>
          <h3>City Name: {weatherData.location.name}</h3>
          <h3>Country Name: {weatherData.location.country}</h3>
          <p style={{color:"red"}}>Temperature: {weatherData.current.temp_c} °C</p>
          <p>Humidity: {weatherData.current.humidity} </p>

          {/* <img src={weatherData.current.condition.icon} alt="" /> */}
          {weatherData.forecast.forecastday[0].hour.map((forecastday) => (
            <div>
              <h4>Forecastday Time {forecastday.time.slice(11)}</h4>
              <h4>Forecastday Temp {forecastday.temp_c}</h4>
            </div>
            
          ))}
          {/* <p>Weather: {weatherData.weather[0].description}</p> */}
          {/* <p>Humidity: {weatherData.main.humidity}%</p> */}
        </div>
      ) : (
        <div>Data not found!!</div>
      )}
    </div>
    </div>
  );
};

export default Weather;