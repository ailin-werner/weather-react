import React from "react";
import WeatherIconSmaller from "./WeatherIconSmaller";

export default function WeatherForecastPreview(props) {
    function hours() {
        let date = new Date(props.data.dt * 1000);
        let hours = date.getHours();
        return `${hours}:00`;
    }

    function temperature() {
    let temperature = Math.round(props.data.main.temp);
    return `${temperature}°C`;
    }
    function fahrenheit() {
        let temperature = Math.round((props.data.main.temp * 9) / 5 + 32);
        return `${temperature}°F`;
    }
    if (props.unit === "celsius") {
    return (
        <div className="col">
            {hours()}
            <WeatherIconSmaller code={props.data.weather[0].icon} />
            {temperature()}
        </div>
    );
    } else {
        return (
        <div className="col">
            {hours()}
            <WeatherIconSmaller code={props.data.weather[0].icon} />
            {fahrenheit()}
        </div>
        )
    }
}