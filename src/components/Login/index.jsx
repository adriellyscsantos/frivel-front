import React from "react";
import "./styles.css";

const SignUp = () => {
  return (
    <div className="content first-content">
      <div className="first-column">
        <div className="logo"></div>
        <h2 className="title title-primary">Bem-vindo(a) ao Frivel</h2>
        <p className="description description-primary">
          Use seus dados para se cadastrar
        </p>
        <p className="description description-primary">
          E inicie sua jornada conosco!
        </p>
        <button id="signin" className="btn btn-primary">
          Cadastrar
        </button>
      </div>
      <div className="second-column">
        <h2 className="title title-second">Entre no Frivel</h2>
        <form className="form">
          <label className="label-input" for="">
            <i className="far fa-user icon-modify"></i>
            <input type="text" placeholder="Nome" />
          </label>

          <label className="label-input" for="">
            <i className="far fa-envelope icon-modify"></i>
            <input type="e-mail" placeholder="E-mail" />
          </label>

          <button className="btn btn-second ">entrar</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
