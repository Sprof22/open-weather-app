import React from "react";
import "./CurrentWeather.css";

const CurrentWeather = () => {
  
  return (
    <div className="box">
      <div className="parent">
        <div className="display">
          <div className="first">
            <div className="temp">18°C</div>
            <div className="locale">Jamaica</div>
          </div>
          <div className="circle" style={{background: `blue`}}></div>
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
