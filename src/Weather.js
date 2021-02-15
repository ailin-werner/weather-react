import React from "react";
import axios from 'axios';


export default function Weather() {
    // function handleResponse(response) {
    //     alert(`The weather in NY is ${response.data.main.temp} degrees`);
    // }

    // let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=New York&appid=3e712c360eb3016685312bd97cac9b63&units=metric`;

    // axios.get(apiUrl).then(handleResponse);
    return <h2>Hello from Weather</h2>;
}