import React from "react";
import "./styles.css";
import ModalExcluirMetas from "../../components/ModalExcluirMetas";

const Gastos = (props) => {
  return (
    <>
      <div className="box__gastos">
        <p className="gasto__gastos">{props.gasto}</p>
        <p className="valor__gastos">{props.valor}</p>
        <a href="#demo-modalexcluirmetas" className="botao-excluir__gastos">
          -
        </a>
      </div>
      <div className="borda-box__gastos"> </div>
      <div>
        <ModalExcluirMetas />
      </div>
    </>
  );
};

export default Gastos;
