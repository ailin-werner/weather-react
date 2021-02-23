import React from "react";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
    return (
            <div className="row padding80">
                <div className="col">
                    <WeatherTemperature celsius={props.data} celsiusMinTemp={props.data.minTemp} celsiusMaxTemp={props.data.maxTemp} celsiusFeelsLike={props.data.feelsLike} unit={props.unit} setUnit={props.setUnit} />
                </div>
                <div className="col">
                    <WeatherIcon code={props.data.icon} />
                </div>
                <div className="col">
                    <p className="text-capitalize">{props.data.description}</p>
                    <p>💧 Humidity: {props.data.humidity}%</p>
                    <p>🌬 Wind: {Math.round(props.data.wind)} km/h</p>
                </div>
            </div>);
}