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
            <ExibirGastos titulo="Gastos fixos" />
            <ExibirGastos titulo="Gastos variaveis" />
          </div>
          <div>
            <HistoricoGastos />
          </div>
        </div>
      </div>
    </>
  );
};

export default Gastos;
