import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import api from "../../services/api";
import "./styles.css";
import { AiOutlineClose } from "react-icons/ai";
import { VscWarning } from "react-icons/vsc";

const ModalExcluirMetas = () => {
  // const handleClick = () => {
  //   alert("removido com sucesso!");
  // };

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = () => {
    api
      .delete(`/meta/1`)
      .then(() => {
        alert("Meta excluída com sucesso!");
      })
      .catch(() => {
        alert("Erro ao excluir meta.");
      });
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
              <form className="modal__form" onSubmit={handleSubmit(onSubmit)}>
                <button className="modal_meta-excluir">Remover</button>
                <input className="d-none" type="submit" />
              </form>
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
