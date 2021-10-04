import React from "react";
import "./styles.css";
import { AiOutlineClose } from "react-icons/ai";

const ModalMetas = () => {
  return (
    <>

      <div id="demo-modal" className="modal">
        <div className="modal__content">
          <h1 className="modal__title">Adicionar Meta</h1>
          <form className="modal__form">
            <div className="modal__form-content">
              <div>
                <p>Meta</p>
                <input type="text" className="modal__form-input" />
              </div>
              <div>
                <br></br>
                <p>Descrição</p>
                <textarea rows="4" cols="45" className="modal__form-textarea-add">
                </textarea>
              </div>
              <br></br>
              <div className="row">
                <div className="col-md-6">
                  <p>Valor necessário</p>
                  <input type="number" className="modal_form-inputmenor"></input>
                </div>
                <div className="col-md-6">
                <p>Data Desejada</p>
                  <input type="date" className="modal_form-inputmenor"></input>
                </div>
              </div>
            </div>
          </form>
          <br></br>
          <div className="modal__footer">
            <button className="modal__footer-add">Adicionar</button>
          </div>

          <a href="#" className="modal__close">
            <AiOutlineClose size={20} />
          </a>
        </div>
      </div>
    </>
  );
};

export default ModalMetas;
