import React from "react";
import cloud from "./cloud.jpg";

const CurrentWeather = ({ data }) => {
  console.log(data, 'this is the data')

  const [, kontry] = data.city.split(', ')

  return (
    <div>
      <img src={cloud} alt="cloud" width={300} height={200} />
      <h1>{data.city}</h1>
      <i>
        <h2>{kontry}</h2>
        <p>16deg</p>
        <p>{data.weather[0].description}</p>
      </i>
    </div>
  );
};

export default CurrentWeather;
