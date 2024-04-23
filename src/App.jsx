import { useState, useEffect } from "react";
import "./App.css";
import {dateConvert} from "./components/DateConvert";


function App() {
  const [lat, setLat] = useState(null);
  const [long, setLong] = useState(null);
  const [data, setData] = useState(null);

  const API_URL = "https://api.openweathermap.org";
  const API_KEY = "0cb96b656380f6713c6079f5544666af";

  useEffect(() => {
    const getLocation = async () => {
      navigator.geolocation.getCurrentPosition((position) => {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);

        console.log(lat);
        console.log(long);
      });
    };
    getLocation();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      if (lat !== null && long !== null) {
        const response = await fetch(
          `${API_URL}/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`
        );
        const jsonData = await response.json();
        setData(jsonData);
        console.log(jsonData);
      }
    };
    fetchData();
  }, [lat, long, API_KEY, API_URL]);

  return (
    <>
      <h1 className="text-3xl font-bold">The Weather app</h1>

      {data ? (
        <>
          <h1>City Name : {data.name}, {data.sys.country}</h1>
          <p>Weather : {data.weather.main}</p>
          <p>Weather Condition : {data.weather.description} <span><img src={`./assets/icons/${data.weather[0].icon}.png`} alt="pic" /></span></p>
          <p>Temperature : {Math.round(data.main.temp)} °C</p>
          <p>MIN_Temperature : {Math.round(data.main.temp_min)} °C</p>
          <p>MAX_Temperature : {Math.round(data.main.temp_max)} °C</p>
          <p>Feels Like : {Math.round(data.main.feels_like)} °C</p>
          <p>Pressure : {data.main.pressure} hPa</p>
          <p>Humidity : {data.main.humidity } %</p>
          <p>Date : {dateConvert(data.dt)}</p>
          <p>Sunrise : {dateConvert(data.sys.sunrise)}</p>
          <p>Sunset : {dateConvert(data.sys.sunset)}</p>
          <p> Cloudiness : {data.clouds.all} %</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}

export default App;
