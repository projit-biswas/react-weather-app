const API_URL = "https://api.openweathermap.org";
const API_KEY = "0cb96b656380f6713c6079f5544666af";


function weatherData() {
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
}

export {weatherData}