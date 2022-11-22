import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "./logo";

function header() {
  return (
    <div className="header">
      <div className="header__logo">
        <Logo />
      </div>
      <div className="header__menu">
        <NavLink className="header__menu-item" to="/produtos">
          Produtos
        </NavLink>
        <NavLink className="header__menu-item" to="/conta">
          Conta
        </NavLink>
      </div>
    </div>
  );
}

export default header;
