import React, { useContext } from "react";
import "./Modal.scss";
import ModalCard from "../ModalCard/ModalCard";
import { appCtx } from "../context";
import { mealsData } from "../../App";

const Modal = () => {
  const { setModalOpen } = useContext(appCtx);
  const { setModalConf } = useContext(appCtx);
  const { total, setTotal } = useContext(appCtx);
  const {
    cartItems,
    setCartItems,
    setNumberOfItems,
    meals,
    restart,
    setRestart,
    setMeals,
  } = useContext(appCtx);

  const order = () => {
    if (cartItems.length > 0) {
      setModalOpen(false);
      setModalConf(true);
      setCartItems([]);
      setMeals((prev) => {
        return meals.map((el) => {
          return {
            name: el.name,
            desc: el.desc,
            price: el.price,
            amount: 0,
            id: el.id,
          };
        });
      });
    }
  };

  return (
    <div id="modal">
      <div className="modal">
        {cartItems.map((el) => (
          <ModalCard data={el} />
        ))}
        <div className="total">
          <h3>Total Price</h3>
          <div className="amount">
            $
            {meals
              .reduce((acc, el) => (acc += el.amount * el.price), 0)
              .toFixed(2)}
          </div>
        </div>
        <div className="btns">
          <button onClick={() => setModalOpen(false)}>Close</button>
          <button
            className={cartItems.length > 0 ? "right active" : "right"}
            onClick={order}
          >
            Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
