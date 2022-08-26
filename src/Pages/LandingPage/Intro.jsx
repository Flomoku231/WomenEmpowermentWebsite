import React from "react";
import "../../Styles/Intro.css";
import IntroPhoto from '../../ProjectImages/Picture/IntroImage.png';
import Navbar from "../../Components/Navbar";
import Button from "../../Components/Button";

const Intro = () => {
  return (
    <div className="Intro__Container">
      <Navbar />
      <div className="Intro__Content">
        <div className="Intro__Content-text">
          <div className="Header-text">
            <span id="header1">Empowering</span>
            <span id='header2'>Women and Girls' Right By Engaging</span>
            <span id='header3'>Gender Equality</span>
          </div>
          <p id='Intro__paragraph'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi unde
            aperiam doloribus illum excepturi tempore, adipisci architecto.
            Praesentium quam, odio iusto maxime enim possimus consectetur, est
            sequi et illo quae!
          </p>
          <Button name="Learn More" type="button" className="Intro__Button" />
        </div>
        <div className="Intro__Content-Image">
            <img id="Intro_Image" src={IntroPhoto} alt=""/>
        </div>
      </div>
    </div>
  );
};

export default Intro;
