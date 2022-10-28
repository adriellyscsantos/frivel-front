import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./styles.css";
import api from "../../services/api";
import { AiOutlineClose } from "react-icons/ai";

const ModalReceitas = () => {
  const [user, setUser] = useState({
    descricao: "",
    valor: "",
    tipo: "",
  });

  const [status, setStatus] = useState({
    descricao: "",
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
        descricao: "",
        valor: "",
        tipo: "",
      });
    } else {
      setStatus({
        type: "error",
        mensagem: "Erro: Receita não cadastrada !",
      });
    }
  };

  function validate() {
    if (!user.descricao)
      return setStatus({
        type: "error",
        mensagem: " Necessário preencher o campo: Descrição!",
      });

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

    
    onSubmit(user);
    return true;
  }

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    let dataAtual = new Date();
    dataAtual = dataAtual.toLocaleDateString();
    data.valor = data.valor.replace(/,/g, '.')
    api
      .post(
        `/receita/novareceita?descricao=${data.descricao}&valorReceita=${data.valor}&dataReceita=${dataAtual}`,
        data
      )
      .then(() => {
        return true;
      })
      .catch((e) => {
        console.log(e);
      });
    
  };

  return (
    <>
      <div className="container__wrapper-gastos">
        <div>
          <h2>Receitas</h2>
        </div>
        <div className="wrapper">
          <a href="#demo-modal">+ NOVA RECEITA</a>
        </div>
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
                <p>Descrição: </p>
                <input
                  className="modal__form-input"
                  type="text"
                  onChange={valueInput}
                  name="descricao"
                  value={user.descricao}
                />
                <p>Tipo:
                <select className="select-receitas" defaultValue={2}>
                                <option value="1">Fixo</option>
                                <option value="2">Variável</option>
                            </select>
                </p>
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
