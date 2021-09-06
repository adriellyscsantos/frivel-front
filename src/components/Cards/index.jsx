import React from "react";
import "./styles.css";

const Cards = (props) => {
  return (
    <div className="container">
      <div className="box">
          <div className='imagem'></div>
        <h3 className="titulo">{props.titulo}</h3>
        <p className="descricao">{props.descricao}</p>
      </div>
    </div>
  );
};

export default Cards;
