import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "./ForecastWeather.css";


const WEEK_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const dayInAweek = new Date().getDay()
// console.log(dayInAweek)
const forecastDays = WEEK_DAYS.slice(dayInAweek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayInAweek))
console.log(forecastDays)

const ForecastWeather = ({ data }) => {
  return (
    <div>
      <label className="title">Daily</label>
      <Accordion allowZeroExpanded>
        {data.list.slice(0, 7).map((item, index) => (
          <AccordionItem key={index}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="daily-item">
                  <img className="icon-small" src={`./icons/${item.weather[0].icon}.png`} alt="cloud"/>
                  <label htmlFor="" className="day">
                    {forecastDays[index]}
                  </label>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>{Math.floor(item.main.temp)}degs</p>
              <p>{item.weather[0].description}</p>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default ForecastWeather;
