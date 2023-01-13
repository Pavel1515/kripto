import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { Link, redirect } from "react-router-dom";

const Regisratin = () => {
  const { baseUrl } = useSelector((state) => state.auth);
  const [messageError, setMessageError] = useState(false);
  const [messageok, setMessageok] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmitEntrance = async (data) => {
    try {
      const json = JSON.stringify(data);
      await axios.post(`${baseUrl}registration`, json, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      setMessageok(true);
      redirect("/entrance");
    } catch (error) {
      console.log(error);
      setMessageError(true);
    }
  };
  return (
    <div className="wraper_auth">
      <form className="entrance" onSubmit={handleSubmit(onSubmitEntrance)}>
        <h1>Регистрация</h1>
        <p>E-mail</p>
        <input
          {...register("user", {
            required: true,
            pattern: {
              value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
              message: "Введите правильно mail",
            },
          })}
        />
        {errors.user && (
          <span>Ошибка валидации пропишите правильно свою почту</span>
        )}
        <p>Пароль</p>
        <input type="password" {...register("password", { required: true })} />
        {errors.password && <span>Введите пароль</span>}

        <input className="submit" value="Зарегестрироваться" type="submit" />
        {messageError && <p>Ошибка Регистрации!</p>}
        {messageok && <p>Вы зарегестрированы!</p>}
        <Link to={"/entrance"}>Войти</Link>
      </form>
    </div>
  );
};

export default Regisratin;
