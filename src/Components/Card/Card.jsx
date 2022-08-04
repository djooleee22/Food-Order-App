import React, { useContext } from "react";
import { appCtx } from "../context";
import "./Card.scss";

const Card = (props) => {
  const { setNumberOfItems } = useContext(appCtx);
  const { setCart } = useContext(appCtx);
  let amount = 0;

  // const addHandler = () => {
  //   setNumberOfItems((prev) => ++prev);
  //   setCart((prev) => {
  //     if (prev.length > 0) {
  //       const index = prev.findIndex((el) => el.name === props.meal.name);
  //       prev[index] = {
  //         name: prev[index].name,
  //         price: prev[index].price,
  //         amount: ++amount,
  //       };
  //       return [prev[index], ...prev];
  //     } else {
  //       return [
  //         { name: props.meal.name, price: props.meal.price, amount: ++amount },
  //       ];
  //     }
  //   });
  // };

  return (
    <div id="card">
      <div className="meal-info">
        <h3>{props.meal.name}</h3>
        <p>
          <i>{props.meal.desc}</i>
        </p>
        <div>${props.meal.price.toPrecision(4)}</div>
      </div>
      <div className="order-info">
        <span className="margin-right">Amount</span>
        <span className="amount">0</span>
        <button onClick={addHandler}>Add</button>
      </div>
    </div>
  );
};

export default Card;
