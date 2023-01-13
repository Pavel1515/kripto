import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Select } from "../components/Select";
import Big from "big.js";
import AddTransaction from "../components/AddTransaction";
import { setOneValute, setTwoValute } from "../redux/slices/valuteSlices";
import { fetchCurse } from "../redux/slices/cursSlice";
import { setOpenOne, setOpenTwo } from "../redux/slices/modalSlice";
const Home = () => {
  const dispatch = useDispatch();
  const { authentication, baseUrl } = useSelector((state) => state.auth);
  const { oneValutes, twoValutes } = useSelector((state) => state.valutes);
  const { curs } = useSelector((state) => state.cusr);
  const { openOne, openTwo } = useSelector((state) => state.modal);
  const [adress, setAdress] = useState();
  const [comisia, setComisia] = useState(0.5);
  const [add, setadd] = useState(false);
  const [info, setInfo] = useState(["сеть 1"]);
  const [inputValue, setInput] = useState(0.0);
  const [value, setValue] = useState(0);
  const [valute, setValute] = useState([]);

  const [oneImage, setOneImage] = useState(
    "https://tokens.pancakeswap.finance/images/symbol/usdt.png"
  );
  const [twoImage, setTwoImage] = useState(
    "https://tokens.pancakeswap.finance/images/symbol/usdt.png"
  );

  const fetchValute = async () => {
    const { data } = await axios.get(`${baseUrl}chekvalute`);
    setValute(data);
    const one = await data.find((el) => {
      return oneValutes === el.tittle;
    });
    setAdress(one.adress);
  };

  useEffect(() => {
    cout();
    fetchValute();
    dispatch(fetchCurse({ oneValutes, twoValutes, baseUrl }));
    setComisia(1);
  }, [openOne, openTwo, oneValutes, twoValutes, inputValue, curs]);

  const cout = async () => {
    if (inputValue === " ") {
      setValue(0);
    }
    if (Number(inputValue) === 0) {
      setValue(0);
    }
    if (Number(inputValue) > 0) {
      let procent = new Big(inputValue).times(0.005).toString();
      let newInput = new Big(inputValue).minus(procent).toString();
      let summ = new Big(newInput).times(curs).toString();
      setValue(summ);
    }
  };

  return (
    <div className="container">
      <main>
        <div className="form-obmen">
          <h2>Обмен</h2>
          <h3>Мгновенный обмен токенов</h3>
          <div className="state">
            <img className="state_coin" src={oneImage} alt="loto" />
            <p>{oneValutes}</p>
            <svg
              onClick={() => {
                dispatch(setOpenOne(true));
              }}
              viewBox="0 0 24 24"
              color="text"
              width="20px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8.11997 9.29006L12 13.1701L15.88 9.29006C16.27 8.90006 16.9 8.90006 17.29 9.29006C17.68 9.68006 17.68 10.3101 17.29 10.7001L12.7 15.2901C12.31 15.6801 11.68 15.6801 11.29 15.2901L6.69997 10.7001C6.30997 10.3101 6.30997 9.68006 6.69997 9.29006C7.08997 8.91006 7.72997 8.90006 8.11997 9.29006Z"></path>
            </svg>
          </div>
          <input
            onChange={(e) => {
              setInput(e.target.value);
            }}
            pattern="/^(-?\d+)(\.\d+)?$/"
            type="number"
            placeholder="0.0"
          />
          {openOne && (
            <Select
              image={setOneImage}
              select={setOneValute}
              list={valute}
              close={setOpenOne}
              setInfo={setInfo}
              info={info}
              setInput={setInput}
              cout={cout}
            />
          )}

          <div className="state mt-60">
            <img className="state_coin" src={twoImage} alt="loto" />
            <p>{twoValutes}</p>
            <svg
              onClick={() => {
                dispatch(setOpenTwo(true));
              }}
              viewBox="0 0 24 24"
              color="text"
              width="20px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8.11997 9.29006L12 13.1701L15.88 9.29006C16.27 8.90006 16.9 8.90006 17.29 9.29006C17.68 9.68006 17.68 10.3101 17.29 10.7001L12.7 15.2901C12.31 15.6801 11.68 15.6801 11.29 15.2901L6.69997 10.7001C6.30997 10.3101 6.30997 9.68006 6.69997 9.29006C7.08997 8.91006 7.72997 8.90006 8.11997 9.29006Z"></path>
            </svg>
          </div>
          {openTwo && (
            <Select
              image={setTwoImage}
              select={setTwoValute}
              list={valute}
              close={setOpenTwo}
              setInput={setInput}
            />
          )}
          <p className="input">{value}</p>
          <div
            onClick={() => {
              if (authentication) {
                setadd(true);
              } else {
                alert("Войдите в свою учетную запись");
              }
            }}
            className="sumbit mt-60"
          >
            Обменять
          </div>
          {add && (
            <AddTransaction
              comisia={comisia}
              setadd={setadd}
              value={value}
              oneValutes={oneValutes}
              twoValutes={twoValutes}
              inputValue={inputValue}
              info={info}
              valute={valute}
              adress={adress}
            />
          )}
        </div>
      </main>
    </div>
  );
};

export default Home;
