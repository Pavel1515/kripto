import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const FormValute = ({ refresh, setRefresh, baseUrl, token }) => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmitValute = async (data) => {
    try {
      const json = JSON.stringify(data);
      const res = await axios.post(`${baseUrl}addvalute`, json, {
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
    <>
      <form className="form-valute" onSubmit={handleSubmit(onSubmitValute)}>
        <p>Имя валюты</p>
        <input
          {...register("tittle", {
            required: true,
          })}
        />
        <p>Сылка на фото валюты</p>
        <input {...register("image", { required: true })} />
        <p>Сеть 1</p>
        <input {...register("networkOne")} />
        <p>Сеть 2</p>
        <input {...register("networkTwo")} />
        <p>Сеть 3</p>
        <input {...register("networkThree")} />
        <p>Сеть 4</p>
        <input {...register("networkFour")} />
        <p>Адрес</p>
        <input {...register("adress", { required: true })} />
        <input className="butom_sumbit" value="Добавить валюту" type="submit" />
      </form>
    </>
  );
};

export default FormValute;
