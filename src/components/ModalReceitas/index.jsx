import React from "react";
import "./styles.css";
import { AiOutlineClose } from "react-icons/ai";

const ModalReceitas = () => {
  return (
    <>
      <div className="wrapper">
        <a href="#demo-modal">+ NOVA RECEITA</a>
      </div>

      <div id="demo-modal" className="modal">
        <div className="modal__content">
          <h1 className="modal__title">Adicionar Receita</h1>
          <form className="modal__form">
            <div className="modal__form-content">
              <div>
                <p>Valor</p>
                <input type="text" className="modal__form-input" />
              </div>
              <div>
                {/*<p>Categoria</p>*/}

               {/* <select name="cars" id="cars">
                  <option value="volvo">Selecione uma opçao</option>
                  <option value="volvo">Lazer</option>
                  <option value="saab">Alimentaçao</option>
                  <option value="mercedes">Estudo</option>
                  <option value="audi">Divida</option>
                </select>
              </div>
              <div>
                <p>Tipo da receita</p>
                <input type="radio" name="fixo" value="fixo" />
                <label for="dewey">Fixo</label>
                <input type="radio" name="variavel" value="variavel" />
                <label for="dewey">Variável</label>*/}
                </div>
              <div>
                <p>Tipo</p>
                <input type="text" className="modal__form-input" />
              </div>
            </div>
          </form>

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

export default ModalReceitas;
