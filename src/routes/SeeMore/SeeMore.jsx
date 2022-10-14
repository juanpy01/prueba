import "./SeeMore.css"
import React, { useContext, useEffect, useState } from "react";
import { getMore } from "../../service";
import { CardContext } from "../../contexts/CardContext";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import More from "../../components/More";


function SeeMore() {
  
  const { id } = useParams();
  const { cards } = useContext(CardContext);
  const [card] = cards.filter((card) => card.id === Number(id));
  const [more, setMore] = useState([]);

  useEffect(() => {
    getMore(card.lat, card.lon)
      .then((data) => {
        setMore(data);
        
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(card);

  return (
    <div className="more-container">
        <More card={card} more={more}/>
      <Link className="btn-back" to="/">
        Volver al Inicio
      </Link>
    </div>
  );
}

export default SeeMore;
