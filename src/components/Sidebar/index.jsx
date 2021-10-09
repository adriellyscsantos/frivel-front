import React from "react";
import "./styles.css";
import { AiOutlineEye } from "react-icons/ai";
import { FaHandHoldingUsd } from "react-icons/fa";
import { FiTarget } from "react-icons/fi";
import { FaMoneyBillAlt } from "react-icons/fa";
import { CgClipboard } from "react-icons/cg";

const Sidebar = () => {
  return (
    <div className="s-layout">
      <div className="s-layout__sidebar">
        <nav className="s-sidebar__nav">
          <ul>
            <li>
              <div className="s-sidebar__nav-link title__sidebar"> FRIVEL </div>
            </li>
            <li>
              <a className="s-sidebar__nav-link" href="/dashboard">
                <div className="box__icons">
                  <AiOutlineEye size={30} color="00816E" />
                </div>

                <p> Home </p>
              </a>
            </li>
            <li>
              <a className="s-sidebar__nav-link" href="/gastos">
                <div className="box__icons">
                  <FaHandHoldingUsd size={30} color="00816E" />
                </div>
                <p> Gastos </p>
              </a>
            </li>
            <li>
              <a className="s-sidebar__nav-link" href="/metas">
                <div className="box__icons">
                  <FiTarget size={30} color="00816E" />
                </div>
                <p> Metas</p>
              </a>
            </li>
            <li>
              <a className="s-sidebar__nav-link" href="/receitas">
                <div className="box__icons">
                  <FaMoneyBillAlt size={30} color="00816E" />
                </div>
                <p> Receitas</p>
              </a>
            </li>
            <li>
              <a className="s-sidebar__nav-link" href="#0">
                <div className="box__icons">
                  <CgClipboard size={30} color="00816E" />
                </div>
                <p> Relatório</p>
              </a>
            </li>
            <li>
              <div className="s-sidebar__nav-logout">
                <a className="s-sidebar__nav-link" href="/">
                  <p>sair </p>{" "}
                </a>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
