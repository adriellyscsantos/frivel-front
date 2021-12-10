import React, { useState } from "react";
import { useForm } from "react-hook-form";
import api from "../../services/api";
import "./styles.css";
import { AiOutlineClose } from "react-icons/ai";

const ModalMetas = () => {
  const [user, setUser] = useState({
    nome: "",
    descricao: "",
    valor: "",
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
        mensagem: "Meta cadastrada com sucesso!",
      });
      setUser({
        nome: "",
        valor: "",
        descricao: "",
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
    console.log(user.data);
    if (!user.nome)
      return setStatus({
        type: "error",
        mensagem: " Necessário preencher o campo: Meta!",
      });

    if (!user.descricao)
      return setStatus({
        type: "error",
        mensagem: " Necessário preencher o campo: Descrição!",
      });
    if (!user.data)
      return setStatus({
        type: "error",
        mensagem: " Necessário preencher o campo: Data Desejada!",
      });
    if (!user.valor)
      return setStatus({
        type: "error",
        mensagem: " Necessário preencher o campo: Valor necessário!",
      });

    return true;
  }

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    api
      .post(
        `/meta/novameta?nome=${data.nome}&dtMeta=${data.dtMeta}&descricao=${data.descricao}&vlMeta=${data.vlMeta}`,
        data
      )
      .then(() => {
        alert("Meta cadastrada com sucesso!");
      })
      .catch(() => {
        alert("Erro ao cadastrar meta.");
      });
  };

  return (
    <>
      <div id="demo-modal" className="modal">
        <div className="modal__content">
          <h1 className="modal__title-add">Adicionar Meta</h1>
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
            <div className="modal__form-content">
              <div>
                <p>Meta</p>
                <input
                  type="text"
                  name="nome"
                  {...register("nome")}
                  className="modal__form-input_metas"
                  onChange={valueInput}
                  value={user.nome}
                />
              </div>
              <div>
                <br></br>
                <p>Descrição</p>
                <textarea
                  rows="4"
                  name="descricao"
                  {...register("descricao")}
                  cols="45"
                  onChange={valueInput}
                  value={user.descricao}
                  className="modal__form-textarea-add"
                ></textarea>
              </div>
              <br></br>
              <div className="row">
                <div className="col-md-6">
                  <p>Valor necessário</p>
                  <input
                    type="number"
                    name="vlMeta"
                    {...register("vlMeta")}
                    // onChange={valueInput}
                    // value={user.valor}
                    className="modal_form-inputmenor"
                  ></input>
                </div>
                <div className="col-md-6">
                  <p>Data Desejada</p>
                  <input
                    type="date"
                    name="dtMeta"
                    {...register("dtMeta")}
                    // onChange={valueInput}
                    // value={user.data}
                    className="modal_form-inputmenor"
                  ></input>
                </div>
              </div>
              <div className="row mt-5">
                <div className="col-md-12">
                  <input
                    className="float-end modal__footer-add"
                    type="submit"
                  />
                  {/* Adicionar */}
                </div>
              </div>
            </div>
          </form>
          <a href="#" className="modal__close">
            <AiOutlineClose size={20} />
          </a>
        </div>
      </div>
    </>
  );
};

export default ModalMetas;
