import React, { useState } from "react";
import axios from 'axios';
import ReactAnimatedWeather from 'react-animated-weather';
import FormattedDate from "./FormattedDate";

import "./weather.css";


export default function Weather(props) {
  let [weatherData, setWeatherData] = useState({});

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
    });
  }
  if (weatherData.ready) {
    return (
      <div>
        <FormattedDate date={weatherData.date} />
        <div className="row justify-content-center padding80">
          <div className="col-sm">
            <h2>
              <div className="changeTemp">
                {Math.round(weatherData.temperature)}
                <span className="units">
                  <a href="/" className="active">
                    °C
                  </a>{" "}
                  |<a href="/">°F</a>
                </span>
              </div>
            </h2>
            <p>Min {Math.round(weatherData.minTemp)}°C / Max {Math.round(weatherData.maxTemp)}°C</p>
            <p className="paddingBottom20 text-capitalize">{weatherData.description}</p>
          </div>
          <div className="col-sm">
            <ReactAnimatedWeather
            icon="CLEAR_DAY"
            color="yellow"
            size={100}
            animate={true}
          />
            {/* <img src="" alt=" " className="weatherIcon" /> */}
          </div>
          <div className="col-sm">
            <p>
              Feels like {Math.round(weatherData.feelsLike)}°C
              <br />
              💧 Humidity: {weatherData.humidity}%
              <br />
              🌬 Wind: {Math.round(weatherData.wind)} km/h
            </p>
          </div>
        </div>
    </div>
  );

  } else {
    const apiKey = "3e712c360eb3016685312bd97cac9b63";
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(currentTemperature);

    return <p>Loading temperature...</p>; 
  }


  
}