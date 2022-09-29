import React from "react";
import PropType from "prop-types";
import "../Styles/CoreValues.css";

const CoreValues = ({ id, ImageURL, Title, Paragraph, className }) => {
  return (
    <div className={className}>
      <div className="Container__Contents">
        <img id={id} src={ImageURL} alt="" />
        <h2 id='Contents__Title'>{Title}</h2>
        <p id='Contents__Paragraph'>{Paragraph}</p>
      </div>
    </div>
  );
};
CoreValues.propType = {
  id: PropType.string,
  ImageURL: PropType.string,
  Title: PropType.string,
  Paragraph: PropType.string,
  className: PropType.string,
};

export default CoreValues;
