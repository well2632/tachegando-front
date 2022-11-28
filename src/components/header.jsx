import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Logo from "./logo";

function Header() {
  const navigate = useNavigate();

  async function handleLogout() {
    localStorage.clear();
    navigate("/");
  }

  return (
    <div className="header">
      <div className="header__logo">
        <Logo />
      </div>
      <div className="header__menu">
        {/* <NavLink className="header__menu-item" to="/conta">
          Configurações
        </NavLink> */}
        <div className="header__menu-item" onClick={handleLogout}>
          Sair
        </div>
      </div>
    </div>
  );
}

export default Header;
