import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

const TransactionsAdmin = () => {
  const { baseUrl, token } = useSelector((state) => state.auth);
  const [inputValue, setInputValue] = useState("");
  const [listTransactions, setListTransactions] = useState([]);
  const [vision, setVision] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const updateTransactions = async (id) => {
    try {
      const json = JSON.stringify({
        status: inputValue,
        idPost: id,
      });
      await axios.post(`${baseUrl}processing`, json, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      setRefresh(!refresh);
      alert("Обработана");
    } catch (error) {}
  };
  const fetchListTransactions = async () => {
    try {
      const { data } = await axios.get(`${baseUrl}all`);
      if (data.message) {
      } else {
        setListTransactions(data.reverse());
        setVision(true);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
  
    fetchListTransactions();
  }, [vision, refresh]);
  return (
    <div>
      {vision &&
        listTransactions.map((el) => {
          return (
            <div className="trans" key={`${el.id}trans`}>
              <p>На адрес {el.address}</p>
              <p>
                Отправил {el.amountСoming} {el.currencyReception}
              </p>
              <p>
                Должен получить{el.amountLeaving}
                {el.currencyExchange}
              </p>
              <p>Сеть:{el.network}</p>
              <p className={el.notification === true ? "new" : "blue"}>
                {el.notification && "Новая"}
              </p>
              {el.notification === true ? (
                <>
                  <input
                    onChange={(e) => {
                      setInputValue(e.target.value);
                    }}
                    placeholder="Статус для клиента"
                    type="text"
                  />
                  <div
                    onClick={() => {
                      updateTransactions(el.id);
                    }}
                    className="butoon"
                  >
                    Обработать
                  </div>
                </>
              ) : (
                <p>{el.status}</p>
              )}
            </div>
          );
        })}
    </div>
  );
};

export default TransactionsAdmin;
