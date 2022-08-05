import React, { useContext, useState } from "react";
import { appCtx } from "../context";
import "./Card.scss";

const Card = (props) => {
  const { setCartItems } = useContext(appCtx);
  const { setTotal } = useContext(appCtx);
  const { setNumberOfItems } = useContext(appCtx);
  const [amount, setAmount] = useState(0);
  const addMeal = () => {
    setAmount((prev) => ++prev);
    setCartItems((prev) => {
      let id;
      for (let i = 0; i < prev.length; i++) {
        if (prev[i].id === props.meal.id) {
          id = prev[i].id;
        }
      }
      if (id) {
        return prev.map((el, i) => {
          if (el.id === id) {
            return {
              name: el.name,
              price: el.price,
              amount: ++el.amount,
              id: el.id,
            };
          } else {
            return el;
          }
        });
      } else {
        return [
          {
            name: props.meal.name,
            price: props.meal.price,
            amount: amount + 1,
            id: props.meal.id,
          },
          ...prev,
        ];
      }
    });
    setTotal((prev) => (prev += props.meal.price));
    setNumberOfItems((prev) => ++prev);
  };

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
        <span className="amount">{amount}</span>
        <button onClick={addMeal}>Add</button>
      </div>
    </div>
  );
};

export default Card;
