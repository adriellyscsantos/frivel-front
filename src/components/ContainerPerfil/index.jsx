import React from "react";
import "./styles.css";
import { AiOutlineEye } from "react-icons/ai";
import ModalPerfil from "../ModalPerfil";

const ContainerPerfil = (props) => {
  return (
    <div>
      <section className="usuario__perfil">
        <div className="dados-usuarios__perfil">
         
          <div className="dados-usuarios-texto__perfil">
            <p>Isabela Almeida</p>
            <p>Recife, PE</p>
           
          </div>
        </div>

        <div>
          <p className="dados-usuarios-texto__perfil">Saldo total</p>
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
