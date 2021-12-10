import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import api from "../../services/api";
import "./styles.css";
import { AiOutlineClose } from "react-icons/ai";

const ModalMetas = () => {
  const [meta, setMeta] = useState();

  useEffect(() => {
    api
      .get(`/meta/obtermetas`)
      .then((response) => {
        setMeta(response.data);
      })
      .catch(() => {
        alert("Erro");
      });
  }, []);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    api
      .put(
        `/meta/alterarmeta?nome=${data.nome}&dtMeta=${data.dtMeta}&descricao=${data.descricao}&vlMeta=${data.vlMeta}&idMeta=1`,
        data
      )
      .then(() => {
        alert("Meta alterada com sucesso!");
      })
      .catch(() => {
        alert("Erro ao atualizar meta.");
      });
  };

  return (
    <>
      <div id="demo-modal-editar-meta" className="modal">
        <div className="modal__content">
          <h1 className="modal__title-editar">Editar Meta</h1>

          <form className="modal__form" onSubmit={handleSubmit(onSubmit)}>
            <div className="modal__form-content">
              <div>
                <p>Meta</p>
                <input
                  type="text"
                  name="nome"
                  className="modal__form-input_metas"
                  {...register("nome")}
                />
              </div>
              <div>
                <br></br>
                <p>Descrição</p>
                <textarea
                  rows="4"
                  name="descricao"
                  cols="45"
                  className="modal__form-textarea-add"
                  {...register("descricao")}
                ></textarea>
              </div>
              <br></br>
              <div className="row">
                <div className="col-md-6">
                  <p>Valor necessário</p>
                  <input
                    type="number"
                    name="valor"
                    className="modal_form-inputmenor"
                    {...register("vlMeta")}
                  ></input>
                </div>
                <div className="col-md-6">
                  <p>Data Desejada</p>
                  <input
                    type="date"
                    name="data"
                    className="modal_form-inputmenor data-campo-edit"
                    {...register("dtMeta")}
                  ></input>
                </div>
                <div className="row mt-5">
                  <div className="col-md-12">
                    <input
                      className="float-end modal__footer-add-edit"
                      type="submit"
                    />
                    {/* Editar */}
                  </div>
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
