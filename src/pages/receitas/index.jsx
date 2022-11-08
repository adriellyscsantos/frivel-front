import React from "react";
import ExibirReceitas from "../../components/ExibirReceitas";
//import HistoricoReceitas from "../../components/HistoricoReceitas";
import Navbar from "../../components/Navbar";
import ModalReceitas from "../../components/ModalReceitas";

const Receitas = () => {
  return (
    <>
       <div className="container__nav">
        <Navbar />
      </div>

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
