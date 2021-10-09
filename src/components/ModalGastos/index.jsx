import React, { useState } from "react";
import "./styles.css";
import { AiOutlineClose } from "react-icons/ai";

const ModalGastos = () => {
  const [inputValue, setInputValue] = useState("");
  const handleClick = () => {
    // alert("Gasto adicionado com sucesso!");
  };

  const handleInput = (e) => {
    const values = e.target.value;
    setInputValue(values);

    if (values === "") {
      alert("Por favor preencha o campo");
    }
  };
  return (
    <>
      <div className="wrapper">
        <a href="#demo-modal">+ NOVO GASTO</a>
      </div>

      <div id="demo-modal" className="modal">
        <div className="modal__content">
          <h1 className="modal__title">Adicionar gasto</h1>
          <form className="modal__form">
            <div className="modal__form-content">
              <div>
                <p>Gasto</p>
                <input
                  type="text"
                  className="modal__form-input"
                  onChange={(e) => handleInput(e)}
                  value={inputValue}
                />
              </div>
              <div>
                <p>Categoria</p>

                <select name="cars" id="cars">
                  <option value="volvo">Selecione uma opçao</option>
                  <option value="volvo">Lazer</option>
                  <option value="saab">Alimentaçao</option>
                  <option value="mercedes">Estudo</option>
                  <option value="audi">Divida</option>
                </select>
              </div>
              <div>
                <p>Tipo do gasto</p>
                <input type="radio" name="radio-tipo-gasto" value="fixo" />
                <label for="dewey">Fixo</label>
                <input type="radio" name="radio-tipo-gasto" value="variavel" />
                <label for="dewey">Variável</label>
              </div>
              <div>
                <p>Valor</p>
                <input type="text" className="modal__form-input" />
              </div>
            </div>
          </form>

          <div className="modal__footer">
            <button
              type="submit"
              className="modal__footer-add"
              onClick={handleClick}
            >
              Adicionar
            </button>
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
