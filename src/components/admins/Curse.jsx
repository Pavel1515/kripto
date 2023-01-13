import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Curse = ({ refresh, setRefresh, token }) => {
  const { baseUrl } = useSelector((state) => state.auth);
  const [list, setList] = useState([]);
  const fetchCurse = async () => {
    const { data } = await axios.get(`${baseUrl}chek`);
    setList(data);
  };
  useEffect(() => {
    fetchCurse();
  }, [refresh]);
  const deleteCurse = async (id) => {
    try {
      const json = JSON.stringify({ idCurse: id });
      await axios.post(`${baseUrl}deletecurse`, json, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      setRefresh(!refresh);
    } catch (error) {}
  };
  if (list.length) {
    return (
      <>
        <div>
          {list.map((el) => {
            return (
              <div className="curs" key={`curse${el.id}`}>
                <p>{el.tittleOne}</p>
                <p>{el.tittleTwo}</p>
                <p>{el.curse}</p>
                <button
                  onClick={() => {
                    deleteCurse(el.id);
                  }}
                >
                  Удалить курс
                </button>
              </div>
            );
          })}
        </div>
      </>
    );
  } else {
    return <div>-----</div>;
  }
};

export default Curse;
