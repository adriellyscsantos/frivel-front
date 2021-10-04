import React from "react";
import ExibirReceitas from "../../components/ExibirReceitas";
//import HistoricoReceitas from "../../components/HistoricoReceitas";
import Sidebar from "../../components/Sidebar";
import ModalReceitas from "../../components/ModalReceitas";

const Receitas = () => {
  return (
    <>
      <Sidebar />

      <div className="layout">
        <div>
          <ModalReceitas />
        </div>

        <div className="receitas-container">
          <div>
            <ExibirReceitas titulo="Receitas" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Receitas;
