import React, { useState } from "react";
import "./styles.css";
import { AiOutlineClose } from "react-icons/ai";

const ModalGastos = () => {
  const [user, setUser] = useState({
    gasto: "",
    valor: "",
    categoria: "",
    tipo: "",
  });

  const [status, setStatus] = useState({
    type: "",
    mensagem: "",
  });

  const valueInput = (e) =>
    setUser({ ...user, [e.target.name]: e.target.value });

  const addUser = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    const saveDataForm = true;

    if (saveDataForm) {
      setStatus({
        type: "success",
        mensagem: "Gasto cadastrado com sucesso!",
      });
      setUser({
        gasto: "",
        valor: "",
        categoria: "",
        tipo: "",
      });
    } else {
      setStatus({
        type: "error",
        mensagem: "Erro: Usuário não cadastrado !",
      });
    }
  };

  function validate() {
    if (!user.gasto)
      return setStatus({
        type: "error",
        mensagem: " Necessário preencher o campo: Gasto!",
      });

    if (!user.categoria)
      return setStatus({
        type: "error",
        mensagem: " Necessário preencher o campo: Categoria!",
      });
    if (!user.tipo)
      return setStatus({
        type: "error",
        mensagem: " Necessário preencher o campo: Tipo!",
      });
    if (!user.valor)
      return setStatus({
        type: "error",
        mensagem: " Necessário preencher o campo: Valor!",
      });

    return true;
  }

  return (
    <>
      <div className="wrapper">
        <a href="#demo-modal">+ NOVO GASTO</a>
      </div>

      <div id="demo-modal" className="modal" name="formulario">
        <div className="modal__content">
          <div>
            <h1 className="modal__title">Adicionar gasto</h1>

            {status.type === "success" ? (
              <p style={{ color: "green", textAlign: "center" }}>
                {status.mensagem}
              </p>
            ) : (
              ""
            )}
            {status.type === "error" ? (
              <p style={{ color: "#ff0000", textAlign: "center" }}>
                {status.mensagem}
              </p>
            ) : (
              ""
            )}

            <form className="modal__form" onSubmit={addUser}>
              <div className="modal__form-content">
                <p>Gasto: </p>
                <input
                  className="modal__form-input"
                  type="text"
                  name="gasto"
                  onChange={valueInput}
                  value={user.gasto}
                />
                <div>
                  <p>Categoria</p>

                  <select
                    id="cars"
                    name="categoria"
                    onChange={valueInput}
                    value={user.categoria}
                    className="modal__form-input"
                  >
                    <option value="selecionarcategoria" disabled selected>
                      Selecione uma opçao
                    </option>
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
                    onChange={valueInput}
                    value={user.tipo}
                    className="modal__form-input"
                  >
                    <option value="selecionartipo" disabled selected>
                      Selecione uma opçao
                    </option>
                    <option value="fixo">Fixo</option>
                    <option value="variavel">Variavel</option>
                  </select>
                </div>

                <p>Valor: </p>
                <input
                  className="modal__form-input"
                  type="text"
                  name="valor"
                  onChange={valueInput}
                  value={user.valor}
                  placeholder="R$ 000,00"
                />
                <div className="modal__footer">
                  <button className="modal__footer-add" type="submit">
                    Cadastrar
                  </button>
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
