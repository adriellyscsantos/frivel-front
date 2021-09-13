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
        <div className="social-media">
          <ul className="list-social-media">
            <a className="link-social-media" href="#">
              <li className="item-social-media">
                <i className="fab fa-facebook-f"></i>
              </li>
            </a>
            <a className="link-social-media" href="#">
              <li className="item-social-media">
                <i className="fab fa-google-plus-g"></i>
              </li>
            </a>
            <a className="link-social-media" href="#">
              <li className="item-social-media">
                <i className="fab fa-linkedin-in"></i>
              </li>
            </a>
          </ul>
        </div>
        <p className="description description-second">
          ou use o email para se registrar:
        </p>
        <form className="form">
          <label className="label-input" for="">
            <i className="far fa-user icon-modify"></i>
            <input type="text" placeholder="Nome" />
          </label>

          <label className="label-input" for="">
            <i className="far fa-envelope icon-modify"></i>
            <input type="email" placeholder="Email" />
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
