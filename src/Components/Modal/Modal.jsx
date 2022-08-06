import React, { useContext } from "react";
import "./Modal.scss";
import ModalCard from "../ModalCard/ModalCard";
import { appCtx } from "../context";

const Modal = () => {
  const { setModalOpen } = useContext(appCtx);
  const { setModalConf } = useContext(appCtx);
  const { total, setTotal } = useContext(appCtx);
  const { cartItems, setCartItems, setNumberOfItems } = useContext(appCtx);

  const order = () => {
    if (cartItems.length > 0) {
      setModalOpen(false);
      setModalConf(true);
      setCartItems([]);
      setTotal(0);
      setNumberOfItems(0);
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
          <div className="amount">${total.toFixed(2)}</div>
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
