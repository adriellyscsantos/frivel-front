import React, { useState, useEffect } from "react";
import "./styles.css";
import api from "../../services/api";
import Receitas from "./receitas.jsx";
import ModalExcluirReceitas from "../ModalExcluirReceitas";

const ExibirReceitas = (props) => {
  const [receita, setMeta] = useState();
  useEffect(() => {
    api
      .get(`/receita/obterreceitas`)
      .then((response) => {
        setMeta(response.data);
      })
      .catch(() => {
        alert("Erro");
      });
  }, []);

  return (
    <div className="container__receitas card">
      <div className="container-box__receitas">
        <div>
          <h3 className="titulo-receitas__receitas">{props.titulo}</h3>
        </div>
        <div className="box-receitas__receitas">
          {receita?.map((item) => (
            <Receitas receita={item?.descricao} chave={item.idReceita} key={item.idReceita} valor={item?.valorReceita.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}/>
          ))}
        </div>
        <div>
          <ModalExcluirReceitas />
        </div>
      </div>
    </div>


  );
};

export default ExibirReceitas;
