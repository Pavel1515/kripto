import React from "react";
import { useDispatch } from "react-redux";
import close from "../../assets/img/close.png";

export const Select = (props) => {
  const dispatch = useDispatch();

  return (
    <>
      <div className="wraper">
        <div className="window">
          <div className="cap">
            <p>Выбрать токен</p>
            <img
              onClick={() => dispatch(props.close(false))}
              src={close}
              alt="close"
              style={{ cursor: "pointer" }}
            />
          </div>

          {props.list.map((el) => {
            return (
              <div
                style={{ cursor: "pointer" }}
                onClick={() => {
                  dispatch(props.select(el.tittle));
                  dispatch(props.close(false));
                  props.image(el.image);
                  if (props.setInfo) {
                    props.setInfo([
                      el.networkOne,
                      el.networkTwo,
                      el.networkThree,
                      el.networkFour,
                    ]);
                  }
                }}
                key={el.id}
                className="item_cap"
              >
                <img src={el.image} alt="" />
                <p>{el.tittle}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
