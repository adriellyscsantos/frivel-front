import React from "react";
import "./styles.css";

const Perfil= (props) => {
  return (
    <>
      <div className="box__receitas"> 
        <p className="receita__perfil">{props.perfil}</p>
        <p className="valor__perfil">{props.valor}</p>
        <button className="botao-excluir__perfil"> - </button>
      </div>
      <div className="borda-box__perfil"> </div>
    </>
  );
};

export default Perfil;
