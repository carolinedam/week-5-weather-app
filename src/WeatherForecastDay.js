import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function maxTemp() {
    let temperature = Math.round(props.data.weather[0].temp.max);
    return `${temperature}°`;
  }

  function minTemp() {
    let temperature = Math.round(props.data.weather[0].temp.min);
    return `${temperature}°`;
  }

  function day() {
    let date = props.data.dt * 1000;
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
    return days[day];
  }

  return (
    <div>
      <div className="weatherForecast-day">{day()}</div>
      <WeatherIcon code={props.data.weather[0].icon} size={36} />
      <div className="weatherForecast-temperatures">
        <span className="weatherForecast-temperatures-max">{maxTemp()}</span>{" "}
        <span className="weatherForecast-temperatures-min">{minTemp()}</span>
      </div>
    </div>
  );
}
