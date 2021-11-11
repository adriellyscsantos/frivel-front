import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";
import "./styles.css";

const SignUp = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    api
      .get("/usuario/1")
      .then((response) => response.json())
      .then((r) => {
        setUser(r);
        console.log(r, "oi");
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
      
  }, []);

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
        {/* {user.map((item) => (
          <div key={item.id}>
            <p>{item.nome}</p>
          </div>
        ))} */}
      </div>
    </div>
  );
};

export default SignUp;
