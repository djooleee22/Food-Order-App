import React, { useContext } from "react";
import { appCtx } from "../context";
import "./ModalCard.scss";

const ModalCard = (props) => {
  const { cartItems, setCartItems, setTotal, setNumberOfItems, setAmount } =
    useContext(appCtx);
  const plus = () => {
    setCartItems((prev) => {
      return cartItems.map((el) => {
        if (el.id === props.data.id) {
          return {
            name: el.name,
            price: el.price,
            amount: ++el.amount,
            id: el.id,
          };
        } else return el;
      });
    });
    setTotal((prev) => (prev += props.data.price));
    setNumberOfItems((prev) => ++prev);
    // setAmount((prev) => ++prev);
  };

  const minus = () => {
    setCartItems((prev) => {
      if (props.data.amount > 1) {
        return cartItems.map((el) => {
          if (el.id === props.data.id) {
            return {
              name: el.name,
              price: el.price,
              amount: --el.amount,
              id: el.id,
            };
          } else return el;
        });
      } else {
        const updatedPrev = prev.filter((el) => el.id !== props.data.id);
        return updatedPrev;
      }
    });
    setTotal((prev) => (prev -= props.data.price));
    setNumberOfItems((prev) => --prev);
  };

  return (
    <div id="modal-card">
      <div className="info">
        <div className="left">
          <h3>{props.data.name}</h3>
          <div className="sm-flex">
            <div className="helper-color">${props.data.price}</div>
            <div className="helper-box">x{props.data.amount}</div>
          </div>
        </div>
        <div className="right">
          <button onClick={minus}>-</button>
          <button onClick={plus}>+</button>
        </div>
      </div>
    </div>
  );
};

export default ModalCard;
