import React, { useState, useEffect } from "react";
import "./styles.css";
import api from "../../services/api";
import Receitas from "./receitas.jsx";
import ModalExcluirReceitas from "../ModalExcluirReceitas";

const data = [
  {
    receita: "Salario",
    valor: "150,00",
  },
  {
    receita: "Salario 2",
    valor: "2.500",
  },
  {
    receita: "Freela",
    valor: "500,00",
  },
  {
    receita: "Aluguel",
    valor: "900,00",
  },
];

const ExibirReceitas = (props) => {
  const [receita, setMeta] = useState();
  useEffect(() => {
    // api
    //   .get(`/receita/obterreceitas`)
    //   .then((response) => {
    //     setMeta(response.data);
    //   })
    //   .catch(() => {
    //     alert("Erro");
    //   });
  }, []);

  return (
    <div className="col-12 ">
      <div className="row">
       {data?.map((item) => (
      
        <div className="container__receitas card col-md-6">
          <div className="container-box__receitas">
            <div>
             
            </div>
            <div className="box-receitas__receitas">
             
                <Receitas
                  receita={item.receita}
                  chave="oi"
                  key="oi"
                  valor={item.valor}
                />
             
            </div>
            <div>
              <ModalExcluirReceitas />
            </div>
          </div>
        </div>
       
      
       ))}
       </div>
    </div>
  );
};

export default ExibirReceitas;
