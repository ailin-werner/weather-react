import React from "react";
import ReactAnimatedWeather from 'react-animated-weather';

export default function WeatherInfo(props) {
    return (
        <div>
            <div className="row justify-content-center padding80">
            <div className="col-sm">
                <h2>
                <div className="changeTemp">
                    {Math.round(props.data.temperature)}
                    <span className="units">
                    <a href="/" className="active">
                        °C
                    </a>{" "}
                    |<a href="/">°F</a>
                    </span>
                </div>
                </h2>
                <p>Min {Math.round(props.data.minTemp)}°C / Max {Math.round(props.data.maxTemp)}°C</p>
                <p className="paddingBottom20 text-capitalize">{props.data.description}</p>
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
                Feels like {Math.round(props.data.feelsLike)}°C
                <br />
                💧 Humidity: {props.data.humidity}%
                <br />
                🌬 Wind: {Math.round(props.data.wind)} km/h
                </p>
            </div>
            </div>
            </div>);
}