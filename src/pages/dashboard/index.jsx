import React from "react";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import ContainerPerfil from "../../components/ContainerPerfil";
import CardsPerfil from "../../components/CardsPerfil";
import GraficosPerfil from "../../components/GraficosPerfil";

const Dashboard = () => {
  return (
    <>
      <div className="container__nav">
        <Navbar />
      </div>
      {/* <Sidebar /> */}
      <div className="layout">
        <ContainerPerfil />
        <CardsPerfil />
        <GraficosPerfil />
      </div>
    </>
  );
};

export default Dashboard;
