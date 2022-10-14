import React, { useContext } from "react";
import Api from "./Api";
import { IoIosCloseCircle } from "react-icons/io";
import { CardContext } from "../contexts/CardContext";

function Clima({ city, lat, lon, id }) {
  const { cards, setCards } = useContext(CardContext);
  
  const deleteCard = (uid) => {
    /* const delData = cards.filter((data) => data.id !== uid);
      setCards(delData) */
  };

  return (
    <div className="card m-5" style={{ width: "18rem", height: "24rem" }}>
      <div className="card-header text-end">
        <button className="btn" type="submit" onClick={deleteCard(id)}>
          <IoIosCloseCircle
            style={{ width: "2rem", height: "2rem" }}
          ></IoIosCloseCircle>
        </button>
      </div>

      <div className="card-body">
        <h3 className="card-title text-center" style={{ height: "5rem" }}>
          {city}
        </h3>
        <div className="text-muted">
          <h5>Latitud: {lat}</h5>
          <h5>Longitud: {lon}</h5>
          <Api lat={lat} lon={lon} />
        </div>
      </div>
    </div>
  );
}

export default Clima;