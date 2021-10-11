import React from "react";
import "./styles.css";
import Receitas from "./receitas.jsx";
import ModalExcluirReceitas from "../ModalExcluirReceitas";

const ExibirReceitas = (props) => {
  return (
    <div className="container__receitas">
      <div className="container-box__receitas">
        <div>
          <h3 className="titulo-receitas__receitas">{props.titulo}</h3>
        </div>
        <div className="box-receitas__receitas">
          <Receitas receita="Salário" valor="R$ 4500.00" />
          <Receitas receita="Vale Ref" valor="R$ 1200.00" />
          <Receitas receita="Vale Ali" valor="R$ 1000.00" />
          <Receitas receita="Extras" valor="R$ 1500.00" />
        </div>
        <div>
        <ModalExcluirReceitas />
        </div>
      </div>
    </div>
    
    
  );
};

export default ExibirReceitas;
