import React from "react";
import "./styles.css";
import { AiOutlineClose } from "react-icons/ai";

const ModalPerfil = () => {
  return (
    <>

      <div id="demo-modal-editar-perfil" className="modal">
        <div className="modal__content">
          <h1 className="modal__title">Editar Informações</h1>
          <form className="modal__form">
            <div className="modal__form-content">
              <div>
                <p>Nome</p>
                <input type="text" className="modal__form-input_perfil" />
              </div>
              <div>
                <br></br>
                <p>Informações Adicionais</p>
                <input type="text" className="modal__form-input_perfil" />
              </div>
              <div className="warning"> 
                <p>*Em caso de redefinição de senha*</p>
              </div>
              <br></br>
              <div className="row">
                <div className="">
                  <p>Senha</p>
                  <input type="text" className="modal__form-input_perfil" />
                </div>
                <div className="novasenha">
                <p>Nova Senha</p>
                <input type="text" className="modal__form-input_perfil" />
                </div>
              </div>
            </div>
          </form>
          <br></br>
          <div className="modal__footer">
            <button className="modal__footer-add">Editar</button>
          </div>
          <a href="#" className="modal__close">
            <AiOutlineClose size={20} />
          </a>
        </div>
      </div>
    </>
  );
};

export default ModalPerfil;
