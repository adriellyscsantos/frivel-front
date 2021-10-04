import React from "react";
import "./styles.css";

const Historico = (props) => {
  return (
    <>
      <div className="box__historico">
        <div className="box-img__historico">
          <div className="img-historico"> </div>
          <p className="receita__historico">{props.receita}</p>
        </div>

        <p className="valor__historico">{props.valor}</p>
      </div>
      <div className="borda-box__historico"> </div>
    </>
  );
};

export default Historico;
