import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { setToken } from "../redux/slices/authSlices";
import { Link } from "react-router-dom";

const Authentication = () => {
  const { baseUrl } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [messageError, setMessageError] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmitEntrance = async (data) => {
    const json = JSON.stringify(data);
    const res = await axios.post(`${baseUrl}login`, json, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const token = res.data.token;
    if (token) {
      dispatch(setToken(token));
    } else {
      setMessageError(true);
    }
  };

  return (
    <div className="wraper_auth">
      <form className="entrance" onSubmit={handleSubmit(onSubmitEntrance)}>
        <h1>Вход</h1>
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

        <input className="submit" value="Войти" type="submit" />
        {messageError && <p>Ошибка Аунтефикации</p>}
        <Link to={"/registration"}>Зарегестрироваться</Link>
      </form>
    </div>
  );
};

export default Authentication;
