import React from "react";
import "./styles.css";

const Login = () => {
  return (
    <><div class="content second-content">
          <div class="first-column">
              <img class="logo" src="img\logo666.png" />
              <h2 class="title title-primary">Olá Amigo!</h2>
              <p class="description description-primary">
                  Entre com seus dados pessoais
              </p>
              <p class="description description-primary">
                  e inicie sua jornada conosco
              </p>
              <button id="signup" class="btn btn-primary">cadastre-se</button>
          </div>
          <div class="second-column">
              <h2 class="title title-second">Entre no Frivel</h2>
              <div class="social-media">
                  <ul class="list-social-media">
                      <a class="link-social-media" href="#">
                          <li class="item-social-media">
                              <i class="fab fa-facebook-f"></i>
                          </li>
                      </a>
                      <a class="link-social-media" href="#">
                          <li class="item-social-media">
                              <i class="fab fa-google-plus-g"></i>
                          </li>
                      </a>
                      <a class="link-social-media" href="#">
                          <li class="item-social-media">
                              <i class="fab fa-linkedin-in"></i>
                          </li>
                      </a>
                  </ul>
              </div>
          </div>
      </div><p class="description description-second">
              ou use sua conta de e-mail:
          </p><form class="form">
              <label class="label-input" for="">
                  <i class="far fa-envelope icon-modify"></i>
                  <input type="email" placeholder="Email" />
              </label>

              <label class="label-input" for="">
                  <i class="fas fa-lock icon-modify"></i>
                  <input type="password" placeholder="Password" />
              </label>

              <a class="password" href="#">esqueceu sua senha?</a>
              <button class="btn btn-second">entre</button>
          </form></>

  );
};

export default Login;