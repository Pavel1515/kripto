import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { Footer } from "./Footer";
import { deleteToken, setToken } from "../redux/slices/authSlices";
import logo from "../assets/img/logo.png";
import menu from "../assets/img/menu.png";
import "../style/style.scss";

function Header({ children }) {
  const [activeClass, setActiveClass] = useState(false);
  const { authentication } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const сheckingAuth = () => {
    const token = localStorage.getItem("token");
    if (token) {
      dispatch(setToken(token));
    }
  };
  useEffect(() => {
    сheckingAuth();
  }, [authentication]);


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
          <nav className={activeClass ? "active_menu" : ""}>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : undefined)}
              to={"/"}
              onClick={() => {
                setActiveClass(false);
              }}
            >
              Главная
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : undefined)}
              to={"/entrance"}
              onClick={() => {
                setActiveClass(false);
              }}
            >
              {authentication ? "кабинет" : "Вход"}
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : undefined)}
              onClick={() => {
                setActiveClass(false);
              }}
              to={"/about"}
            >
              О нас
            </NavLink>
            {authentication ? (
              <a
                style={{ cursor: "pointer" }}
                onClick={() => {
                  setActiveClass(false);
                  dispatch(deleteToken());
                }}
              >
                Выйти
              </a>
            ) : (
              ""
            )}
          </nav>
          <img
            onClick={() => {
              setActiveClass(true);
            }}
            className="mobil"
            src={menu}
            alt=""
          />
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
