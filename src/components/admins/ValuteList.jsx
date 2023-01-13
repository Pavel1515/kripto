import React, { useState, useEffect } from "react";
import axios from "axios";

const ValuteList = ({ baseUrl, token, setRefresh, refresh }) => {
  const [valute, setValute] = useState([]);
  const delleteValute = async (id) => {
    const json = JSON.stringify({ id: id });
    await axios.post(`${baseUrl}deletevalute`, json, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    setRefresh(!refresh);
  };
  const fetchValute = async () => {
    const { data } = await axios.get(`${baseUrl}chekvalute`);
    setValute(data);
  };
  useEffect(() => {
    fetchValute();
  }, [refresh]);

  return (
    <>
      {valute.length
        ? valute.map((item) => {
            return (
              <div className="admin_valute"  key={item.image}>
                <p>{item.id}</p>
                <img
                  style={{ width: "50px", height: "50px" }}
                  src={item.image}
                  alt=""
                />
                <p>{item.tittle}</p>
                <p>{item.networkOne}</p>
                <p>{item.networkTwo}</p>
                <p>{item.networkThree}</p>
                <p>{item.networkTwo}</p>
                <button
                  onClick={() => {
                    delleteValute(item.id);
                  }}
                >
                  Удалить
                </button>
              </div>
            );
          })
        : "-------"}
    </>
  );
};

export default ValuteList;
