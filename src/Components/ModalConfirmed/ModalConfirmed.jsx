import React, { useContext } from "react";
import { appCtx } from "../context";
import "./ModalConfirmed.scss";

const ModalConfirmed = () => {
  const { setModalConf } = useContext(appCtx);
  return (
    <div id="modal-confirmed">
      <div className="modal-confirmed">
        Your order is being prepared!🎉🍕🍔🍟🌭🥓🥨🥗🧀
        <button onClick={() => setModalConf(false)}>x</button>
      </div>
    </div>
  );
};

export default ModalConfirmed;
