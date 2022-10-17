import React from "react";
import ExibirGastos from "../../components/ExibirGastos";
import HistoricoGastos from "../../components/HistoricoGastos";
import Sidebar from "../../components/Sidebar";
import ModalGastos from "../../components/ModalGastos";

const Gastos = () => {
  return (
    <>
      <Sidebar />

      <div className="layout">
        <div>
          <ModalGastos />
        </div>

        <div className="gastos-container">
          <div>
            <ExibirGastos titulo="Fixos" />
          
          </div>
          <div>
          <ExibirGastos titulo="Variáveis" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Gastos;
