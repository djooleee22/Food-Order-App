import React from "react";
import "./MainSection.scss";
import Card from "../Card/Card";

const MainSection = (props) => {
  return (
    <div id="main-section">
      {props.data.map((el) => (
        <Card meal={el} key={el.id} />
      ))}
    </div>
  );
};

export default MainSection;
