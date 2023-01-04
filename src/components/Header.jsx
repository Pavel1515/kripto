import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/img/logo.png";
import "../style/header.scss";
import { Footer } from "./Footer";

function Header({ children }) {
  return (
    <>
      <header>
        <div className="container">
          <div className="logo_conatiner">
            <div className="logo">
              <img src={logo} alt="" />
            </div>
            <p>Обмен крипто-валюты</p>
          </div>
          <nav>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : undefined)}
              to={"/"}
            >
              Главная
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : undefined)}
              to={"/entrance"}
            >
              Вход
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : undefined)}
              to={"/about"}
            >
              О нас
            </NavLink>
          </nav>
        </div>
      </header>
      <div className="line"></div>
      <div className="main">
        <div className="content">{children} </div>
      </div>
      <div className="line"></div>
      <Footer />
    </>
  );
}

export default Header;
