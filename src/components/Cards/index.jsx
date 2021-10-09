import React from "react";
import "./styles.css";

const Cards = (props) => {
  return (
    <div className="container__cards" id="cards">
      <div className="box__cards">
        <div className="imagem__cards"></div>
        <h3 className="titulo__cards">{props.titulo}</h3>
        <p className="descricao__cards">{props.descricao}</p>
      </div>
    </div>
  );
};

export default Cards;
