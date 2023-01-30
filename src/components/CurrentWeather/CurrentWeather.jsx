import React from "react";


const CurrentWeather = ({ data }) => {
  const [, kontry] = data.city.split(', ')
  return (
    <div>
      <img src={`./icons/${data.weather[0].icon}.png`} alt="cloud" width={100} height={100} />
      <h1>{data.city}</h1>
      <i>
        <h2>{kontry}</h2>
        <p>{Math.floor(data.main.temp)}degs</p>
        <p>{data.weather[0].description}</p>
      </i>
    </div>
  );
};

export default CurrentWeather;
