import React from "react";
import "../Styles/ProgramsCard.css";

const ProgramsCard = (props) => {
  return (
    <div className="ProgramsCard__Container">
      <div className="ProgramsCard__Image">
        <img id='CardImage' src={props.Image} alt="" />
      </div>
      <div className="ProgramsCard__Text-content">
        <h1 id="Text_head">{props.header}</h1>
        <p id="Text_paragraph">{props.paragraph}</p>
      </div>
      <div className="ProgramsCardButton">
          <button id="ProgramsCard-button">
            {props.buttonText}
            <img src={props.buttonImage} alt="" />
          </button>
      </div>
       
    </div>
  );
};

export default ProgramsCard;
