import React from "react";
import "./styles.css";
import Historico from "./historico.jsx";

const HistoricoGastos = (props) => {
  return (
    <div className="container__historico">
      <div className="container-box__historico">
        <div>
          <h3 className="titulo__historico">Histórico mensal de gastos</h3>
        </div>

        <div className="box-gastos__historico">
          <Historico gasto="Spotify" valor="R$ 15.00" />
          <Historico gasto="Spotify" valor="R$ 15.00" />
          <Historico gasto="Spotify" valor="R$ 15.00" />
          <Historico gasto="Spotify" valor="R$ 15.00" />
          <Historico gasto="Spotify" valor="R$ 15.00" />
        </div>
      </div>
    </div>
  );
};

export default HistoricoGastos;
