import React, { useContext } from "react";
import { appCtx } from "../context";
import "./MyCart.scss";

const MyCart = (props) => {
  const { setModalOpen } = useContext(appCtx);
  const { numberOfItems } = useContext(appCtx);
  const { meals } = useContext(appCtx);

  return (
    <div id="my-cart" onClick={() => setModalOpen(true)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="cart-icon"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
      <div className="my-cart-text">My Cart</div>
      <span className="number">
        {meals.reduce((acc, el) => (acc += el.amount), 0)}
      </span>
    </div>
  );
};

export default MyCart;
