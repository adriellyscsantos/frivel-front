import React from "react";
import "./styles.css";
import { AiOutlineEye } from "react-icons/ai";
import ModalPerfil from "../ModalPerfil";

const ContainerPerfil = (props) => {
  return (
    <div>
      <section className="usuario__perfil">
        <div className="dados-usuarios__perfil">
          <img
            className="dados-usuarios__imagem"
            src="https://c4.wallpaperflare.com/wallpaper/145/591/827/anime-zero-no-tsukaima-louise-francoise-le-blanc-de-la-valliere-wallpaper-preview.jpg"
            alt=""
          />
          <div className="dados-usuarios-texto__perfil">
            <p>Fulana de Tal</p>
            <p>Recife, PE</p>
            <a className="editar__perfil" href="#demo-modal-editar-perfil"><button type="button" className="btn btn-new-meta btn-sm"><i aria-hidden="true"></i>Editar Perfil</button>
            </a>
          </div>
        </div>

        <div>
          <p className="dados-usuarios-texto__perfil">Renda Total Acumulada</p>
          <h2 className="renda__perfil">RS 16.500,00</h2>
        </div>
      </section>
      <div>
        <ModalPerfil />
      </div>
    </div>
  );
};

export default ContainerPerfil;
