import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import close from "../assets/img/close.png";

const AddTransaction = ({
  inputValue,
  oneValutes,
  twoValutes,
  value,
  info,
  setadd,
  comisia,
  valute,
  adress,
}) => {
  const { token } = useSelector((state) => state.auth);
  const { baseUrl } = useSelector((state) => state.auth);
  const [active, setActiv] = useState(0);
  const addTransaktions = async () => {
    const json = JSON.stringify({
      commission: "0,5",
      address: adress,
      network: info[active],
      amountСoming: inputValue,
      amountLeaving: value,
      currencyReception: oneValutes,
      currencyExchange: twoValutes,
      itFree: true,
    });
    try {
      const res = await axios.post(`${baseUrl}add`, json, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(res);
      alert("Ожидайте поступления средств на ваш счет");
      setadd(false);
    } catch (error) {}
  };
  return (
    <div className="wraper">
      <div className="container_transaction">
        <div className="flex">
          <p className="h1">Создать транзакцию</p>
          <img
            src={close}
            style={{ cursor: "pointer" }}
            className="close"
            alt="close"
            onClick={() => {
              setadd(false);
            }}
          />
        </div>

        <p>
          Вы меняете {inputValue} {oneValutes}
        </p>
        <p>
          На {value} {twoValutes}
        </p>
        <p>Комисия {comisia} %</p>
        <p>{adress}</p>
        <h3>Сеть</h3>
        {info.length
          ? info.map((el, index) => {
              if (el.length) {
                return (
                  <div
                    key={el}
                    onClick={() => {
                      setActiv(index);
                    }}
                    className={active === index ? "network active" : "network"}
                  >
                    <div>{el}</div>
                  </div>
                );
              }
            })
          : ""}
        <div
          onClick={() => {
            addTransaktions();
          }}
          className="sumbit"
        >
          Оплатил
        </div>
      </div>
    </div>
  );
};

export default AddTransaction;
