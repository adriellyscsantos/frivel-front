import React from "react";
import "./styles.css";
import { MdAttachMoney } from "react-icons/md";
import { BsGraphDown } from "react-icons/bs";
import { BsGraphUp } from "react-icons/bs";

const CardsPerfil = () => {
  return (
    <div>
      <section className="cards__perfil">
        <div className="card__perfil">
          <div className="card__perfil-box">
            <MdAttachMoney size={30} color="green" />
          </div>

          <div>
            <p>Saldo do mes atual</p>
            <h2>R$ 1.200,00</h2>
          </div>
        </div>
        <div className="card__perfil">
          <div className="card__perfil-box">
            <BsGraphDown size={30} color="red" />
          </div>

          <div>
            <p>Perca Mensal</p>
            <h2>R$ 500,00</h2>
          </div>
        </div>
        <div className="card__perfil">
          <div className="card__perfil-box">
            <BsGraphUp size={30} color="green" />
          </div>

          <div>
            <p>ganho Mensal</p>
            <h2>3.14%</h2>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CardsPerfil;
