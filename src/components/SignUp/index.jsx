import React from "react";
import "./styles.css";

const SignUp = () => {
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
        <button id="signin" className="btn btn-primary">
          Entrar
        </button>
      </div>
      <div className="second-column">
        <h2 className="title title-second">Criar conta</h2>
        <form className="form">
          <label className="label-input" for="">
            <i className="far fa-user icon-modify"></i>
            <input type="text" placeholder="Nome" />
          </label>

          <label className="label-input" for="">
            <i className="far fa-envelope icon-modify"></i>
            <input type="email" placeholder="E-mail" />
          </label>

          <label className="label-input" for="">
            <i className="fas fa-lock icon-modify"></i>
            <input type="password" placeholder="Senha" />
          </label>

          <button className="btn btn-second ">cadastrar</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
