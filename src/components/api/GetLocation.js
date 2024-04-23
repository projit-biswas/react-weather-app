function getLocation() {
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
}

export {getLocation}
