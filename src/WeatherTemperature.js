import React, { useState } from "react";

export default function WeatherTemperature(props){
    const [unit, setUnit] = useState('celsius');

    function showFahrenheit(event) {
        event.preventDefault();
        setUnit("fahrenheit");
    }
    function showCelsius(event) {
        event.preventDefault();
        setUnit("celsius");
    }

    if (unit === 'celsius') {
    return (<div>
                <h2>
                    <div className="changeTemp">
                        {Math.round(props.celsius)}
                        <span className="units">
                        °C {" "}
                        |<a href="/" onClick={showFahrenheit}>°F</a>
                        </span>
                    </div>
                </h2>
                <p>Min {Math.round(props.celsiusMinTemp)}°C / Max {Math.round(props.celsiusMaxTemp)}°C</p>
                <p className="paddingBottom20 text-capitalize">Feels like {Math.round(props.celsiusFeelsLike)}°C</p>
            </div>);
    } else {
        let fahrenheit = (props.celsius * 9/5) + 32;
        let minTempFahrenheit = (props.celsiusMinTemp * 9/5) + 32;
        let maxTempFahrenheit = (props.celsiusMaxTemp * 9/5) + 32;
        let feelLikeFahrenheit = (props.celsiusFeelsLike * 9/5) + 32;
        return (<div>
                <h2>
                    <div className="changeTemp">
                        {Math.round(fahrenheit)}
                        <span className="units">
                        <a href="/" onClick={showCelsius}>
                            °C
                        </a>{" "}
                        | °F
                        </span>
                    </div>
                </h2>
                <p>Min {Math.round(minTempFahrenheit)}°F / Max {Math.round(maxTempFahrenheit)}°F</p>
                <p className="paddingBottom20 text-capitalize">Feels like {Math.round(feelLikeFahrenheit)}°C</p>
            </div>);
    }
}