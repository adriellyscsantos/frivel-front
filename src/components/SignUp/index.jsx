import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import api from "../../services/api";
import "./styles.css";

const SignUp = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    api
      .post(
        `/usuario/novousuario?nome=${data.nome}&email=${data.email}&senha=${data.senha}`,
        data
      )
      .then(() => {
        alert("Usuário cadastrado com sucesso!");
      })
      .catch(() => {
        alert("Erro ao cadastrar usuário.");
      });
    console.log(data);
  };

  return (
    <div className="content first-content">
      <div className="first-column">
        <div className="logo"></div>
        <h2 className="title title-primary">Bem vindo(a) ao Frivel</h2>
        <p className="description description-primary">
          Para se manter conectado com a gente
        </p>
        <p className="description description-primary">
          por favor faça o login com suas informações pessoais
        </p>

        <Link to="/login">
          <button id="signin" className="btn btn-primary">
            Entrar
          </button>
        </Link>
      </div>
      <div className="second-column">
        <h2 className="title title-second">Criar conta</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="form">
          <label className="label-input">
            <input name="nome" {...register("nome")} placeholder="Nome" />
          </label>
          {errors.nome?.type === "required" && "campo Nome é obrigatório."}
          <label className="label-input">
            <input
              name="email"
              {...register("email")}
              type="email"
              placeholder="Email"
            />
          </label>
          {errors.email && "campo Email é obrigatório."}
          <label className="label-input">
            <input
              name="nascimento"
              {...register("nascimento")}
              type="date"
              placeholder="Data de nascimento"
            />
          </label>
          {errors.nascimento && "campo Data de nascimento é obrigatório."}
          <label className="label-input">
            <input
              name="Estado"
              {...register("estado")}
              type="text"
              placeholder="Estado"
            />
          </label>
          {errors.estado && "campo Estado é obrigatório."}
          <label className="label-input">
            <input
              name="cidade"
              {...register("cidade")}
              type="text"
              placeholder="Cidade"
            />
          </label>
          {errors.cidade && "campo cidade é obrigatório."}

          <label className="label-input">
            <input
              name="senha"
              {...register("senha")}
              placeholder="Senha"
              type="password"
            />
          </label>
          {errors.senha && "campo Senha é obrigatório."}
          <input className=" btn-second" type="submit" />
        </form>
      </div>
    </div>
  );
};

export default SignUp;
