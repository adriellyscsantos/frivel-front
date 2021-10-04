import React from "react";
import "./styles.css";
import { AiOutlineClose } from "react-icons/ai";
import { ProgressBar } from 'react-bootstrap';

const VisualizarMetas = () => {
  return (
    <>

      <div id="demo-visualizarmetas" className="modal">
        <div className="modal__content">
          <h1 className="modal__title">Visualizar Meta</h1>
          <div className="modal__form-content row">
            <div className="col-md-12 txt-area">
              <textarea rows="6" cols="50" className="modal__form-textarea">
              </textarea>
            </div>
            <div className="col-md-12">
              <button className="btn-edt-modal">Editar</button>
            </div>
            <div className="col-md-12 progresso-txt">
              Progresso
            </div>
            <p></p>
            <div className="progresso-modal col-md-12">
              <ProgressBar variant="success" now={60} />
            </div>
            <div className="col-md-12  progresso_meta">
              R$ 500,00 de R$ 900,00
            </div>
          </div>
          <div className="modal__footer">
            <a href="#"><button className="modal__fechar">Fechar</button></a>
          </div>

          <a href="#" className="modal__close">
            <AiOutlineClose size={20} />
          </a>
        </div>
      </div>
    </>
  );
};

export default VisualizarMetas;
