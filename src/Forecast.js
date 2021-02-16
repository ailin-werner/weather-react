import React from "react";
import axios from 'axios';
import ReactAnimatedWeather from 'react-animated-weather';


export default function Forecast() {
  return <div class="row justify-content-center">
        <div class="col-sm">
          <p class="paddingBottom30">
            Monday<br />
            <ReactAnimatedWeather
        icon="PARTLY_CLOUDY_DAY"
        color="yellow"
        size={50}
        animate={true}
      /><br />13°C / 18°C
          </p>
        </div>
        <div class="col-sm">
          <p class="paddingBottom30">
            Tuesday<br />
            <ReactAnimatedWeather
        icon="CLOUDY"
        color="yellow"
        size={50}
        animate={true}
      /><br />15°C / 19°C
          </p>
        </div>
        <div class="col-sm">
          <p class="paddingBottom30">
            Wednesday<br />
            <ReactAnimatedWeather
        icon="RAIN"
        color="yellow"
        size={50}
        animate={true}
      /><br />18°C / 25°C
          </p>
        </div>
        <div class="col-sm">
          <p class="paddingBottom30">
            Thursday<br />
            <ReactAnimatedWeather
        icon="SLEET"
        color="yellow"
        size={50}
        animate={true}
      /><br />18°C / 25°C
          </p>
        </div>
        <div class="col-sm">
          <p class="paddingBottom30">
            Friday<br />
            <ReactAnimatedWeather
        icon="FOG"
        color="yellow"
        size={50}
        animate={true}
      /><br />18°C / 25°C
          </p>
        </div>
      </div>;
}
