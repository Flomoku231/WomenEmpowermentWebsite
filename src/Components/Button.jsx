import React from "react";
import "../Styles/Button.css";

const Button = (props) => {
  return (
    <div id={props.id} className={`Button__container ${props.className}`}>
      <button id="button" type={props.type}>
        {props.name}
      </button>
    </div>
  );
};

export default Button;
