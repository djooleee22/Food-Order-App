import React from "react";
import "./Header.scss";
import MyCart from "../MyCart/MyCart";

const Header = (props) => {
  return (
    <header id="header">
      <h1>Bring Me!</h1>
      <MyCart />
    </header>
  );
};

export default Header;
