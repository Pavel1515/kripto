import React from "react";
import { Select } from "../components/Select";
import "../style/home.scss";
const Home = () => {
  return (
    <>
      <main>
        <h1>Обмен криптовалют</h1>
        <p>Торгуйте токенами в одно мгновение</p>
        <Select/>
      </main>
    </>
  );
};

export default Home;
