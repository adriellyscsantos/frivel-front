import React, { useState } from "react";
import "./styles.css";
import { AiOutlineClose } from "react-icons/ai";


const ModalReceitas = () => {
  const [user, setUser] = useState({
    valor: "",
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
        mensagem: "Receita cadastrada com sucesso!",
      });
      setUser({
        valor: "",
        tipo: ""
      });
    } else {
      setStatus({
        type: "error",
        mensagem: "Erro: Receita não cadastrada !",
      });
    }
    
    
  };

  function validate() {
    if (!user.valor)
      return setStatus({
        type: "error",
        mensagem: " Necessário preencher o campo: Valor!",
      });
    if (!user.tipo)
      return setStatus({
        type: "error",
        mensagem: " Necessário preencher o campo: Tipo!",
      });

    return true;
  }


  return (
    <>
      <div className="wrapper">
        <a href="#demo-modal">+ NOVA RECEITA</a>
      </div>

      <div id="demo-modal" className="modal" name="formulario">
        <div className="modal__content">
          <div>
            <h1 className="modal__title">Adicionar Receita</h1>

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
                <p>Tipo: </p>
                <input
                  className="modal__form-input"
                  type="text"
                  onChange={valueInput}
                  name="tipo"
                  value={user.tipo}
                />

                  

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
                    Adicionar
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

export default ModalReceitas;
