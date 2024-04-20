import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [lat, setLat] = useState(null); 
  const [long, setLong] = useState(null); 
  const [data, setData] = useState([]);

  const API_URL = "https://api.openweathermap.org";
  const API_KEY = "0cb96b656380f6713c6079f5544666af";

  useEffect(() => {
    const weatherData = async () => {
      navigator.geolocation.getCurrentPosition((position) => {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);

        console.log(lat);
        console.log(long);
      });
    };
    weatherData();
  }, []); 

  useEffect(() => {
    if (lat !== null && long !== null) {
      const fetchData = async () => {
        await fetch(
          `${API_URL}/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`
        )
          .then((res) => res.json())
          .then((data) => setData(data));
          console.log(data);
      };
      fetchData();
    }
  }, [lat, long, API_KEY, API_URL]);

  return (
    <>
      <h1 className="text-3xl font-bold">The Weather app</h1>
    </>
  );
}

export default App;
