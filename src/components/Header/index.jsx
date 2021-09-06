import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="header-content">
          <div className="header-nav">
            <div className="logotipo"> </div>
            <div className="header-items">
              <p>Entrar</p>
              <Link to="/cadastro">
                <button className="header-items__button">Cadastre-se</button>
              </Link>
            </div>
          </div>
          <div className="header-box">
            <div className="header-texto">
              <h1 className="header-h1">
                Gerenciando suas <p className="text-green">finanças</p>e
                projetando as suas <p className="text-green"> metas futuras </p>
              </h1>
              <button className="header-button">Conhecer</button>
            </div>

            <div className="header-imagem"></div>
          </div>
        </div>

        <div className="header-elipse"></div>
      </header>
    </>
  );
};

export default Header;
