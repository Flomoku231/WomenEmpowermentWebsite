import React from "react";
import PropTypes from "prop-types";
import '../../Styles/ProgramsPostCard.css'

const ProgramPostCard = ({ Imageurl, Title, Paragraph }) => {
  return (
    <main className="ProgramPostCard__Container">
      <div className="ProgramPostCard__Content">
        <img id="PostImage" src={Imageurl} alt="" />
        <h2 id='ProgramPostCard__Title'>{Title}</h2>
        <p id='ProgramPostCard__Paragraph'>{Paragraph}<span id='ProgramPostCard__Learnmore'> Learn More</span></p>
      </div>
    </main>
  );
};
ProgramPostCard.propTypes = {
  Imageurl: PropTypes.string,
  Title: PropTypes.string,
  Paragraph: PropTypes.string,
};
export default ProgramPostCard;
