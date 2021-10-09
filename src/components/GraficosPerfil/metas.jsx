import React from "react";
import "./styles.css";
import VisualizarMetas from "../../components/VisualizarMetas";

const Gastos = (props) => {
  return (
    <>
      <div className="box__perfil-metas">
        <p className="titulo__perfil-metas">{props.meta}</p>

        <a href="#demo-visualizarmetas" className="botao__perfil-metas">
          visualizar
        </a>
      </div>

      <div>
        <VisualizarMetas />
      </div>
    </>
  );
};

export default Gastos;
