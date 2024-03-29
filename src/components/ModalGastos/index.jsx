import React, { useState } from "react";
import "./styles.css";
import { useForm } from "react-hook-form";
import api from "../../services/api";
import { AiOutlineClose } from "react-icons/ai";

const ModalGastos = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    api
      .post(
        `/gastos/novogastos?&descricao=${data.descricao}&categoria=${data.categoria}&tipoDoGasto=${data.tipoDoGasto}&valor=${data.valor}&dtGastos=${data.dtGastos}`,
        data
      )
      .then(() => {
        alert("Usuário cadastrado com sucesso!");
      })
      .catch(() => {
        alert("Erro");
      });
  };

  const [user, setUser] = useState({
    gasto: "",
    valor: "",
    categoria: "",
    tipo: "",
    data: "",
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
        data: "",
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
        mensagem: " Necessário preencher o campo: Descrição!",
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
    if (!user.data)
      return setStatus({
        type: "error",
        mensagem: " Necessário preencher o campo: Data Desejada!",
      });
    return true;
  }

  return (
    <>
      <div className="container__wrapper-gastos">
        <div>
          <h2>Gastos</h2>
        </div>
        <div className="wrapper">
          <a href="#demo-modal">+ NOVO GASTO</a>
        </div>
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

            <form className="modal__form" onSubmit={handleSubmit(onSubmit)}>
              <div className="modal__form-content-gastos">
                <p>Descrição </p>
                <input
                  {...register("descricao")}
                  className="modal__form-input"
                  type="text"
                  name="gasto"
                />
                <div>
                  <p>Categoria</p>

                  <select
                    {...register("categoria")}
                    id="cars"
                    name="categoria"
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
                  <p>Tipo do Gasto</p>
                  <select
                    {...register("tipoDoGasto")}
                    id="cars"
                    name="tipo"
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
                  {...register("valor")}
                  className="modal__form-input"
                  type="number"
                  name="valor"
                  onChange={valueInput}
                  value={user.valor}
                />

                <div>
                  <p>Data do gasto</p>
                  <input
                    {...register("dtGastos")}
                    type="date"
                    name="data"
                    className="modal__form-input"
                  ></input>
                </div>

                <div className="modal__footer">
                  {/* <button className="modal__footer-add" type="submit">
                    Adicionar
                  </button> */}
                  <input className="modal__footer-add" type="submit" />
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
