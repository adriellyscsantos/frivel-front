import React from "react";
import "./styles.css";
import ModalExcluirMetas from "../../components/ModalExcluirMetas";

const Receitas = (props) => {
  return (
    <>
      <div className="box__receitas"> 
        <p className="receita__receitas">{props.receita}</p>
        <p className="valor__receitas">{props.valor}</p>
        <a href="#demo-modalexcluirmetas" className="botao-excluir__gastos">
          -
        </a>
      </div>
      <div className="borda-box__receitas"> </div>
      <div>
        <ModalExcluirMetas />
      </div>
    </>
  );
};

export default Receitas;
