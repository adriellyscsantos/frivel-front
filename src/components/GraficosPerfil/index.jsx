import React from "react";
import "./styles.css";
import Metas from "./metas.jsx";

const GraficosPerfil = () => {
  return (
    <div>
      <section className="cards__perfil-graficos">
        <div className="card__perfil-graficos">
          <div>
            <p className="card__perfil-titulo">Balanço dos ultimos 5 meses</p>
            <img
              src="https://lh3.ggpht.com/70Y3VpnvZSVfXsyXAI6o6cZC9J-ykoRIrNn0S7ib6qo3OnXBpvMiBcG6CHSnE0aaCi0LJeE=w386-rwa"
              alt=""
            />
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
          <img
            className="perfil-graficos_img"
            src="https://cdn-icons-png.flaticon.com/512/1170/1170601.png"
            alt=""
          />
        </div>
      </section>
    </div>
  );
};

export default GraficosPerfil;
