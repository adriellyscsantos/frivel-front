import React from "react";
import "./styles.css";

const Receitas = (props) => {
  var idExclusao = 0;

  function alterarValorExcluirReceitas(e){
    idExclusao = e.target.id;
  }
  return (
    <>
      <div className="box__receitas">
        <p className="receita__receitas">{props.receita}</p>
        <p className="valor__receitas">{props.valor}</p>
        <a href="#demo-modalexcluirReceitas" onClick={alterarValorExcluirReceitas} id={props.chave} className="botao-excluir__gastos btn-ex-rec">
          -
        </a>
      </div>
      <div className="borda-box__receitas"> </div>
    </>
  );
};

export default Receitas;
