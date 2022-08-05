import React, { useContext } from "react";
import "./Modal.scss";
import ModalCard from "../ModalCard/ModalCard";
import { appCtx } from "../context";

const Modal = () => {
  const { setModalOpen } = useContext(appCtx);
  const { setModalConf } = useContext(appCtx);
  const { total } = useContext(appCtx);
  const { cartItems } = useContext(appCtx);

  return (
    <div id="modal">
      <div className="modal">
        {cartItems.map((el) => (
          <ModalCard data={el} />
        ))}
        <div className="total">
          <h3>Total Amount</h3>
          <div className="amount">${total.toPrecision(4)}</div>
        </div>
        <div className="btns">
          <button onClick={() => setModalOpen(false)}>Close</button>
          <button
            className="right"
            onClick={() => {
              setModalOpen(false);
              setModalConf(true);
            }}
          >
            Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
