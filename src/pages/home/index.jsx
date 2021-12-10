import React from "react";
import Header from "../../components/Header";
import Cards from "../../components/Cards";
import Footer from "../../components/Footer";

function Home() {
  return (
    <>
      <Header />
      <div className="box-titulos">
        <h2 className="home-titulo"> Sobre Nós</h2>
        <p className="home-subtitulo">
          Conte com a Frivel para organizar sua vida financeira
        </p>
      </div>

      <div className="box-cards">
        <Cards
          titulo="Visão"
          descricao="Ser a platarforma de gerenciamento de finanças pessoais mais acessível do mundo."
        />
        <Cards
          titulo="Missão"
          descricao="Auxiliar o usuário a ter controle dos gastos financeiros."
        />
        <Cards
          titulo="Valores"
          descricao="Acessibilidade, qualidade, segurança e informação."
        />
      </div>

      <Footer />
    </>
  );
}

export default Home;
