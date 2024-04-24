import React, { useCallback } from "react";
import { useState } from "react";

function Search() {
  const [cityName, setCityName] = useState("");
  const [data, setData] = useState([]);

  const API_KEY = "0cb96b656380f6713c6079f5544666af";

  const handelchange = (e) => {
    setCityName(e.target.value);
  };

  const handelClick = useCallback(() => {
    const SearchData = async () => {
      const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`
        )
        const citydata = await response.json()
        setData(citydata)
      console.log(data);
    };
    SearchData()
  }, [cityName]);

  return (
    <>
      <div className="flex w-full items-center space-x-2 md:w-1/3">
        <input
          className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
          type="name"
          placeholder="Your City Name"
          onChange={handelchange}
        ></input>
        <button
          type="button"
          className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          onClick={handelClick}
        >
          Search
        </button>
      </div>
    </>
  );
}

export default Search;