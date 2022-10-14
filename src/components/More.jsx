import React from "react";
import "../routes/SeeMore/SeeMore.css"


function More({card, more}) {
  const {city} = card;

  
  return (
    <div className="col">
        {city}
        {more.daily.time.map((fecha, index) => {
            return(
                <div className="row" key={index}>{fecha}</div>
            )
        })}
        {more.daily.temperature_2m_max.map((max, index) => {
            return(
                <div key={index}>{max}</div>
            )
        })}
      
    </div>
  );
}

export default More;