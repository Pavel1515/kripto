import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const FormCurse = ({ refresh, setRefresh, baseUrl, token }) => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmitCurse = async (data) => {
    try {
      const json = JSON.stringify(data);
      const res = await axios.post(`${baseUrl}addcurse`, json, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      reset();
      setRefresh(!refresh);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form  className="form-valute" onSubmit={handleSubmit(onSubmitCurse)}>
      <p>Имя валюты 1</p>
      <input
        {...register("tittleOne", {
          required: true,
        })}
      />
      <p>Имя валюты 2</p>
      <input
        {...register("tittleTwo", {
          required: true,
        })}
      />
      <p>Курс вместо запитаи используйте точку</p>
      <input
        {...register("curse", {
          required: true,
        })}
      />
      <input className="butom_sumbit" type="submit" value="Сохранить" />
    </form>
  );
};

export default FormCurse;
