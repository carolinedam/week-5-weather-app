import Weather from "./Weather";
import React from "react";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  let latitude = props.coordinates.lat;
  let longitude = props.coordinates.lon;
  let apiKey = `4d0850e5170aa01c3c0597d0577f945a`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);
}
