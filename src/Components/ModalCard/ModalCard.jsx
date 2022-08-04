import React from "react";
import "./ModalCard.scss";

const ModalCard = () => {
  return (
    <div id="modal-card">
      <div className="info">
        <div className="left">
          <h3>Schnitzel</h3>
          <div className="sm-flex">
            <div className="helper-color">$15.55</div>
            <div className="helper-box">x2</div>
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
