import React, { useEffect, useState } from "react";
import { getWeather } from "../service";
import { WiCloudyGusts, WiCelsius } from "react-icons/wi";

function Api({ lat, lon }) {
  const [items, setItems] = useState([]);
  const [dato, setDato] = useState([]);

  useEffect(() => {
    getWeather(lat, lon)
      .then((data) => {
        setItems(data);
        setDato(data.current_weather);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="row mt-4">
        <div className="col text-center">
          <h2>
            {dato.temperature}
            <WiCelsius style={{ width: "3.3rem", height: "3.3rem" }} />
          </h2>
        </div>
        <div className="col text-center">
          <span>
          <h3>
            <WiCloudyGusts style={{ width: "3rem", height: "3rem" }} />{" "}
            {dato.windspeed} km/h
          </h3>
          </span>
          
        </div>
      </div>
    </>
  );
}

export default Api;