import React, { useState } from "react";
import axios from "axios";

export default function Weather() {
  let [city, setCity] = useState(" ");
  let [temp, setTemp] = useState(" ");
  function updateCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }
  function showWeather(response) {
    console.log(response.data);
    let Temperature = `${city} ${Math.round(response.data.main.temp)}°C`;
    setTemp(
      <ul>
        <div className="city">
          <li>
            <strong>{Temperature}</strong>
          </li>
        </div>
        <li>
          <img
            src={`https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`}
            alt={response.data.weather[0].description}
          />
        </li>
        <li>
          <div className="wind">
            <strong>
              <li>{response.data.wind.speed} Km/h</li>
              <li>{response.data.main.humidity}</li>
            </strong>
          </div>
        </li>
      </ul>
    );
  }

  function handleWeather(event) {
    event.preventDefault();
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5da7b2dc058f07286fea39c4cee516a3&units=metric`;
    axios.get(apiUrl).then(showWeather);
  }
  return (
    <div className="weather">
      <form onSubmit={handleWeather}>
        <input type="search" placeholder="Type city" onChange={updateCity} />
        <input
          type="submit"
          value="search"
          className="btn btn-primary w-10 m-2"
        />
      </form>
      <div>{temp}</div>
    </div>
  );
}
