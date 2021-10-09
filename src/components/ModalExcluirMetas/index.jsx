import React from "react";
import "./styles.css";
import { AiOutlineClose } from "react-icons/ai";
import { VscWarning } from "react-icons/vsc";

const ModalExcluirMetas = () => {
  const handleClick = () => {
    alert("removido com sucesso!");
  };
  return (
    <>
      <div id="demo-modalexcluirmetas" className="modal">
        <div className="modal__content">
          <div className="row">
            <VscWarning className="icon-warning" size={50} />
          </div>
          <br></br>
          <div className="row text-meio-modal-excluir">
            Deseja realmente remover esse item?
          </div>
          <br></br>
          <div className="row modal__footer">
            <div className="col-md-6">
              <a href="#">
                <button className="modal_meta-voltar">Voltar</button>
              </a>
            </div>
            <div className="col-md-6">
              <button onClick={handleClick} className="modal_meta-excluir">
                Remover
              </button>
            </div>
          </div>
          <a href="#" className="modal__close">
            <AiOutlineClose size={20} />
          </a>
        </div>
      </div>
    </>
  );
};

export default ModalExcluirMetas;
