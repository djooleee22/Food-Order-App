import React, { useContext, useState } from "react";
import { appCtx } from "../context";
import "./Card.scss";

const Card = (props) => {
  const { setCartItems, cartItems } = useContext(appCtx);
  const { meals, setMeals } = useContext(appCtx);

  const addMeal = () => {
    let id1;
    let id2;
    meals.forEach((el) => {
      if (el.id === props.meal.id) id1 = el.id;
    });
    if (id1) {
      setMeals((prev) => {
        return meals.map((el) => {
          if (el.id === id1) {
            return {
              name: el.name,
              desc: el.desc,
              price: el.price,
              amount: ++el.amount,
              id: el.id,
            };
          } else return el;
        });
      });
    }
    cartItems.forEach((el) => {
      if (el.id === props.meal.id) id2 = el.id;
    });
    if (id2) {
      setCartItems((prev) => {
        return cartItems.map((el) => {
          if (el.id === id2) {
            return {
              name: el.name,
              desc: el.desc,
              price: el.price,
              amount: ++el.amount,
              id: el.id,
            };
          } else return el;
        });
      });
    } else {
      setCartItems((prev) => {
        return [props.meal, ...prev];
      });
    }
  };

  return (
    <div id="card">
      <div className="meal-info">
        <h3>{props.meal.name}</h3>
        <p>
          <i>{props.meal.desc}</i>
        </p>
        <div>${props.meal.price?.toFixed(2)}</div>
      </div>
      <div className="order-info">
        <span className="margin-right">Amount</span>
        <span className="amount">{props.meal.amount}</span>
        <button onClick={addMeal}>Add</button>
      </div>
    </div>
  );
};

export default Card;
