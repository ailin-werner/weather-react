import React, { useState } from "react";
import axios from 'axios';
import Button from "./Button";
import Salutation from "./Salutation";
import FormattedDate from "./FormattedDate";
import WeatherInfo from "./WeatherInfo";

import "./weather.css";


export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ready: false});
  const [city, setCity] = useState(props.defaultCity);

  function currentTemperature(response) {
    setWeatherData({
      ready: true,
      // time: "Tuesday 12:02",
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      feelsLike: response.data.main.feels_like,
      minTemp: response.data.main.temp_min,
      maxTemp: response.data.main.temp_max,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      city: response.data.name
    });
  }

  function search() {
    const apiKey = "3e712c360eb3016685312bd97cac9b63";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(currentTemperature);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleCityChange(event) {
    setCity(event.target.value);
  }
  if (weatherData.ready) {
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <div className="form-row justify-content-center">
            <div className="col">
              <input
                type="search"
                className="searchbar"
                placeholder="Where to next?"
                autocomplete="off"
                onChange={handleCityChange}
              />
            </div>
          </div>
        </form>
        <Button />
        <Salutation data={weatherData} />
        <FormattedDate date={weatherData.date} />
        <WeatherInfo data={weatherData} />
    </div>
  );

  } else {
    search();
    return <p>Loading temperature...</p>; 
  }


  
}