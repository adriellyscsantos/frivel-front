import React from "react";
import "./styles.css";
import Metas from "./metas.jsx";
import GraficoBarra from "../GraficoBarra";

const GraficosPerfil = () => {
  return (
    <div>
      <section className="cards__perfil-graficos">
        <div className="card__perfil-graficos">
          <div>
            <p className="card__perfil-titulo">Balanço dos ultimos 3 meses</p>

            <div>
              <GraficoBarra />
            </div>
          </div>
        </div>
        <div className="card__perfil-graficos">
          <div>
            <div className="card__perfil-botao">
              <p className="card__perfil-titulo">Metas alcançadas</p>
              <a className="botao__perfil-todas" href="/metas">
                ver todas
              </a>
            </div>
            <Metas meta="Comprar um carro" />
            <Metas meta="Viajar para RJ" />
            <Metas meta="Comprar um celular" />
          </div>
          {/* <div className="perfil-graficos_img"></div> */}
        </div>
      </section>
    </div>
  );
};

export default GraficosPerfil;
