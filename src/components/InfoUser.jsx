import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteToken } from "../redux/slices/authSlices";
import { setUserData, setUserList } from "../redux/slices/userSlices";

export const InfoUser = () => {
  const { token, baseUrl } = useSelector((state) => state.auth);
  const {  userList } = useSelector((state) => state.user);
  const [vision, setVision] = useState(false);
  const dispatch = useDispatch();

  const fetchUser = async () => {
    try {
      const { data } = await axios.get(`${baseUrl}user`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (data) {
        dispatch(setUserData(data.userData));
        dispatch(setUserList(Array(...data.userList)));
        setVision(true);
      } else {
        dispatch(deleteToken());
      }
    } catch (error) {
      dispatch(deleteToken());
      console.log(error);
    }
  };
  useEffect(() => {
    fetchUser();
  }, []);
  return (
    <div className="info_user">
      <h1>Список транзакций:</h1>
      <div className="all-transactions">
        {vision
          ? userList.map((el) => {
              return (
                <div className="item-transactions" key={el.id}>
                  <p>номер Транзакции:{el.id}</p>
                  <p>
                    {el.amountСoming}  
                    
                    {el.currencyExchange}
                  </p>
                  <p>на</p>
                  <p>
                    {el.amountLeaving}

                    {el.currencyReception}
                  </p>
                  <p>{el.notification && "Не обработана"}</p>
                  <p>{el.status}</p>
                </div>
              );
            })
          : "Транзакций нету"}
      </div>
    </div>
  );
};
