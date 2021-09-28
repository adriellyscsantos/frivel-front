import React from "react";
import "./styles.css";

const Gastos = (props) => {
  return (
    <>
      <div className="box__gastos"> 
        <p className="gasto__gastos">{props.gasto}</p>
        <p className="valor__gastos">{props.valor}</p>
        <button className="botao-excluir__gastos"> - </button>
      </div>
      <div className="borda-box__gastos"> </div>
    </>
  );
};

export default Gastos;
