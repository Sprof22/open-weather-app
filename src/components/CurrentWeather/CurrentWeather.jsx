import React from "react";
import "./CurrentWeather.css";

const CurrentWeather = ({data}) => {
  
  return (
    <div className="box">
      <div className="parent">
        <div className="display">
          <div className="first">
            <div className="temp">18°C</div>
            <div className="locale">{data.city}</div>
            <p className="desc">{data.weather[0].description}</p>
          </div>
          <div className="circle"  style={{background: 'red'}}  ><img className="picture" src={`icons/${data.weather[0].icon}.png`} alt="img"/></div>
          <div className="third">
            <div className="hum">26%</div>
            <div className="hum">16km/h</div>
            <div className="hum">6.5h</div>
          </div>
        </div>
        <div className="secondary">
          gimme some of that
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
