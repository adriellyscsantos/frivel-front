import React from "react";
import "./styles.css";
import Gastos from "./gastos.jsx";

const ExibirGastos = (props) => {
  return (
    <div className="container__gastos">
      <div className="container-box__gastos">
        <div>
          <h3 className="titulo-gastos__gastos">{props.titulo}</h3>
        </div>

        <div className="box-gastos__gastos">
          <Gastos gasto="Spotify" valor="R$ 15.00" />
          <Gastos gasto="Spotify" valor="R$ 15.00" />
          <Gastos gasto="Spotify" valor="R$ 15.00" />
          <Gastos gasto="Spotify" valor="R$ 15.00" />
        </div>
      </div>
    </div>
  );
};

export default ExibirGastos;
