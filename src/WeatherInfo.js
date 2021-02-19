import React from "react";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
    return (
        <div>
            <div className="row justify-content-center padding80">
            <div className="col-sm">
                <WeatherTemperature celsius={props.data.temperature} celsiusMinTemp={props.data.minTemp} celsiusMaxTemp={props.data.maxTemp} celsiusFeelsLike={props.data.feelsLike} />
                
                
                {/* <p className="paddingBottom20 text-capitalize">{props.data.description}</p> */}
            </div>
            <div className="col-sm">
                <WeatherIcon code={props.data.icon} />
            </div>
            <div className="col-sm">
                <p>
                <span className="text-capitalize">{props.data.description}</span>
                <br />
                💧 Humidity: {props.data.humidity}%
                <br />
                🌬 Wind: {Math.round(props.data.wind)} km/h
                </p>
            </div>
            </div>
            </div>);
}