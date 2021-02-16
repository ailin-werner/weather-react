import React from "react";
import axios from 'axios';
import ReactAnimatedWeather from 'react-animated-weather';

import "./weather.css";


export default function Weather() {
  return (
    <div className="row justify-content-center padding80">
      <div className="col-sm">
        <h2>
          <div className="changeTemp">
            18
            <span className="units">
              <a href="/" className="active">
                °C
              </a>{" "}
              |<a href="/">°F</a>
            </span>
          </div>
        </h2>
        <p className="paddingBottom20">Min 15°C / Max 20°C</p>
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
          Feels like 20°C
          <br />
          💧 Humidity: 60%
          <br />
          🌬 Wind: 3 km/h
        </p>
      </div>
    </div>
  );
}