import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useSelector } from "react-redux";

const ChangePassword = () => {
  const { register, handleSubmit, reset } = useForm();
  const { token, baseUrl } = useSelector((state) => state.auth);
  const onSubmitCurse = async (data) => {
    try {
      const json = JSON.stringify(data);
      const res = await axios.post(`${baseUrl}password`, json, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      alert(res.data);
      reset();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="wraper_auth">
      <form className="entrance" onSubmit={handleSubmit(onSubmitCurse)}>
        <h1>Изменение пароля:</h1>
        <p>Пароль</p>
        <input
          style={{ width: "100%", padding: "10px" }}
          {...register("password", {
            required: true,
          })}
        />
        <p>Новый Пароль</p>
        <input
          style={{ width: "100%", padding: "10px" }}
          {...register("newPassword", {
            required: true,
          })}
        />
        <input className="submit" type="submit" value="Изменить" />
      </form>
    </div>
  );
};

export default ChangePassword;
