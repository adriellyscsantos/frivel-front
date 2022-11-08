import React, { useState } from "react";
import { slide as Menu } from "react-burger-menu";

const Navbar = () => {
  const showSettings = (event) => {
    event.preventDefault();
  };

  var styles = {
    bmBurgerButton: {
      position: "fixed",
      width: "30px",
      height: "21px",
      left: "36px",
      top: "13px",
    },
    bmBurgerBars: {
      background: "#fff",
    },
    bmBurgerBarsHover: {
      background: "#a90000",
    },
    bmCrossButton: {
      height: "24px",
      width: "24px",
    },
    bmCross: {
      background: "#bdc3c7",
    },
    bmMenuWrap: {
      position: "fixed",
      height: "100%",
    },
    bmMenu: {
      background: "#00816E",
      padding: "2.5em 1.5em 0",
      fontSize: "1.15em",
    },
    bmMorphShape: {
      fill: "#373a47",
    },
    bmItemList: {
      color: "#b8b7ad",
      padding: "0.8em",
    },
    bmItem: {
      display: "inline-block",
    },
    bmOverlay: {
      background: "rgba(0, 0, 0, 0.3)",
    },
  };

  // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
  return (
    <Menu styles={styles}>
      <ul>
        <li>
          <a className="s-sidebar__nav-link" href="/dashboard">
            <p> Home </p>
          </a>
        </li>
        <li>
          <a className="s-sidebar__nav-link" href="/gastos">
            <p> Gastos </p>
          </a>
        </li>
        <li>
          <a className="s-sidebar__nav-link" href="/metas">
            <p> Metas</p>
          </a>
        </li>
        <li>
          <a className="s-sidebar__nav-link" href="/receitas">
            <p> Receitas</p>
          </a>
        </li>
      </ul>
    </Menu>
  );
};

export default Navbar;
