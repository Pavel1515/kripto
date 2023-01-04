import axios from "axios";
import React, { useState } from "react";
import { listCryptoCurrency } from "../data.js";
import close from "../assets/img/close.png";
import unfold from "../assets/img/unfold.png";
import "../style/select.scss";

export const Select = () => {
  const [inputValue, setInputValue] = useState(0);

  const [itemOne, setItemOne] = useState(0);
  const [cursTwo, setCursTwo] = useState(0);
  const [itemTwo, setItemTwo] = useState(1);
  const [visibalModalOne, setVisibalModalOne] = useState("none");
  const [visibalModalTwo, setVisibalModalTwo] = useState("none");
  const openModalOne = () => {
    setVisibalModalOne("flex");
  };
  const openModalTwo = () => {
    setVisibalModalTwo("flex");
  };
  const closeModalOne = () => {
    setVisibalModalOne("none");
  };
  const closeModalTwo = () => {
    setVisibalModalTwo("none");
  };
  const convertorFeatch = async () => {
    const { data } = await axios.get(
      `https://min-api.cryptocompare.com/data/pricemulti?fsyms=${listCryptoCurrency[itemOne].name}&tsyms=${listCryptoCurrency[itemTwo].name}`
    );
    let curs = Number(
      Array(data)[0][listCryptoCurrency[itemOne].name][
        listCryptoCurrency[itemTwo].name
      ]
    );
    setCursTwo(curs * Number(inputValue));
  };
  return (
    <>
      <div className="form">
        <div>
          <div className="item_one_unfold">
            <img src={listCryptoCurrency[itemOne].image} alt="item" />
            <p> {listCryptoCurrency[itemOne].name}</p>
            <img
              className="unfold"
              src={unfold}
              alt="unfold"
              onClick={() => openModalOne()}
            />
          </div>
          <input
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
            type="text"
            placeholder="0.0"
          />
          <div className="item_one_unfold">
            <img src={listCryptoCurrency[itemTwo].image} alt="item" />
            <p> {listCryptoCurrency[itemTwo].name}</p>
            <img
              className="unfold"
              src={unfold}
              alt="unfold"
              onClick={() => openModalTwo()}
            />
          </div>
          <p className="info">{cursTwo}</p>
          <div style={{ display: visibalModalOne }} className="modal-wraper">
            <div className="modal">
              <div className="close">
                <img
                  onClick={() => {
                    closeModalOne();
                  }}
                  src={close}
                  alt="close"
                />
              </div>
              {listCryptoCurrency.map((el, index) => {
                return (
                  <div
                    onClick={() => {
                      setItemOne(index);
                      closeModalOne();
                    }}
                    className="item"
                    key={el.image}
                  >
                    <img src={el.image} alt="" />
                    <p>{el.name}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div style={{ display: visibalModalTwo }} className="modal-wraper">
            <div className="modal">
              <div className="close">
                <img
                  onClick={() => {
                    closeModalTwo();
                  }}
                  src={close}
                  alt="close"
                />
              </div>
              {listCryptoCurrency.map((el, index) => {
                return (
                  <div
                    onClick={() => {
                      setItemTwo(index);
                      closeModalTwo();
                    }}
                    className="item"
                    key={el.image}
                  >
                    <img src={el.image} alt="" />
                    <p>{el.name}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <p className="commission">
            от 500 USDT 1% <br /> от 1000 USDT 0.5% <br />
            от 5000 USDT 0.3%
            <br /> от 10000 USDT 0.25%
          </p>
          <div
            onClick={() => {
              convertorFeatch();
            }}
            className="button"
          >
            Обменять
          </div>
          <p>{}</p>
        </div>
      </div>
    </>
  );
};
