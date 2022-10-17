import React from "react";
import "./styles.css";
// import { AiOutlineEye } from "react-icons/ai";
import ModalExcluirMetas from "../../components/ModalExcluirMetas";
import VisualizarGastos from "../../components/VisualizarGastos";

const Gastos = (props) => {
  return (
    <>
      <div className="box__gastos">
        <p className="gasto__gastos">{props.gasto}</p>
      

        <div className="box__botoesgastos">
        <p className="valor__gastos">{props.valor}</p>
          <a href="#demo-modalexcluirmetas" className="botao-excluir__gastos">
            -
          </a>
          {/* <a href="#demo-visualizargastos">
            <AiOutlineEye size={20} className="buttonvisualizar"></AiOutlineEye>
          </a> */}
        </div>
      </div>
      <div className="borda-box__gastos"> </div>
      <div>
        <ModalExcluirMetas />
        <VisualizarGastos />
      </div>
    </>
  );
};

export default Gastos;
