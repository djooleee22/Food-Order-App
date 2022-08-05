import React from "react";
import "./ModalCard.scss";

const ModalCard = (props) => {
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
          <button>-</button>
          <button>+</button>
        </div>
      </div>
    </div>
  );
};

export default ModalCard;
