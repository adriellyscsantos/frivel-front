import React from "react";
import "./styles.css";

const Receitas = (props) => {
  return (
    <>
      <div className="box__receitas"> 
        <p className="receita__receitas">{props.receita}</p>
        <p className="valor__receitas">{props.valor}</p>
        <button className="botao-excluir__receitas"> - </button>
      </div>
      <div className="borda-box__receitas"> </div>
    </>
  );
};

export default Receitas;
