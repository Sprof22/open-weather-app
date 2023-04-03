import React from 'react'
import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from 'react-accessible-accordion'
import './ForecastWeather.css'
const ForecastWeather = ({data}) => {
  return (
    <div>
    <label  className="title">Daily</label>
    <Accordion allowZeroExpanded>
    {data.list.slice(0,7).map((item, index)=> (
      <AccordionItem key={item}>
        <AccordionItemHeading>
          <AccordionItemButton>
          <div className="daily-items">
                  <img
                    className="icon-small"
                    src={`icons/01n.png`}
                    alt="weather"
                  />
                  <label htmlFor="" className="day">
                    Monday
                  </label>
                  <label htmlFor="" className="description">
                    cloudy weather
                  </label>
                  <label htmlFor="" className="min-max">
                    12°C /{" "}
                    32°C
                  </label>
                </div>
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          ballalal
        </AccordionItemPanel>
      </AccordionItem>
    ))}

    </Accordion>
    
    </div>
  )
}

export default ForecastWeather