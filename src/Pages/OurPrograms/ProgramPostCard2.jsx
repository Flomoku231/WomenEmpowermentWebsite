import React from "react";
import "../../Styles/ProgramsPostCard.css";
import PropType from "prop-types";

const ProgramPostCard2 = ({ ImageUrl, Header, Paragraph }) => {
  return (
    <main className="ProgramPostCard2__Container">
      <div className="ProgramPostCard2__Content">
        <div className="ProgramPostCard2__image">
          <img id="image" src={ImageUrl} alt="" />
        </div>
        <div className="ProgramPostCard2__Text">
          <h1 id="Text__Head">{Header}</h1>
          <p id="Text__Paragraph">{Paragraph}</p>
        </div>
      </div>
    </main>
  );
};
ProgramPostCard2.propType = {
  ImageUrl: PropType.string,
  Header: PropType.string,
  Paragraph: PropType.string,
};

export default ProgramPostCard2;
