import React from "react";
import "./styles.css";
import { AiOutlineClose } from "react-icons/ai";

const ModalGastos = () => {
  return (
    <>
      <div id="demo-visualizargastos" className="modal" name="formulario">
        <div className="modal__content">
          <div>
            <h1 className="modal__title">Visualizar gasto</h1>

            <form className="modal__form">
              <div className="modal__form-content-gastos">
                <p>Descrição </p>
                <input
                  className="modal__form-input"
                  type="text"
                  name="gasto"
                  disabled
                />
                <div>
                  <p>Categoria</p>

                  <select
                    id="cars"
                    name="categoria"
                    className="modal__form-input"
                    disabled
                  >
                    <option value="lazer">Lazer</option>
                    <option value="alimentacao">Alimentaçao</option>
                    <option value="estudo">Estudo</option>
                    <option value="divida">Divida</option>
                  </select>
                </div>

                <div>
                  <p>Tipo do gasto</p>
                  <select
                    id="cars"
                    name="tipo"
                    className="modal__form-input"
                    disabled
                  >
                    <option value="fixo">Fixo</option>
                    <option value="variavel">Variavel</option>
                  </select>
                </div>

                <p>Valor: </p>
                <input
                  className="modal__form-input"
                  type="number"
                  name="valor"
                  disabled
                />

                <div>
                  <p>Data do gasto</p>
                  <input
                    type="date"
                    name="data"
                    className="modal__form-input"
                    disabled
                  ></input>
                </div>
              </div>
            </form>
          </div>
          <a href="#" className="modal__close">
            <AiOutlineClose size={20} />
          </a>
        </div>
      </div>
    </>
  );
};

export default ModalGastos;
