import React, { useState } from "react";
import { Link } from "react-router-dom";
import OurLogo from "../ProjectImages/Picture/InHerPowerLogo.png";
import "../Styles/Navbar.css";
import MenuBar from "../ProjectImages/Icons/Menubar.svg";
import Button from "./Button";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const MenuPopup = () => {
    setIsVisible(!isVisible);
  };
  return (
    <div className="Navbar__Container">
      <div className="Navbar__Logo">
        <Link to="/">
          {" "}
          <img id="NavLogo" src={OurLogo} alt="" />
        </Link>
      </div>
      <div className="Navbar__Menu">
        <ul className="Navbar__List-container">
          <button className="MenuBar__button" onClick={MenuPopup}>
            <img src={MenuBar} alt="" />
          </button>
          <Link id="HomeLink" to="/">
            {" "}
            <li>Home</li>
          </Link>
          <Link id="AboutLink" to="/AboutPage">
            <li>About Us</li>
          </Link>
          <Link id="OurProgramsLink" to="/OurPrograms">
            <li>Our Programs</li>
          </Link>
          <Link id="NavNews" to="/News&Events">
            <li>News & Events</li>{" "}
          </Link>
          <Button name="Join Us" className="Navbar__button" type="button" />
        </ul>
      </div>
      <div className={`MenuPopup ${isVisible ? "IsVisible" : ""}`}>
        <ul className="Popup__List-container">
          <Link id="Popup-Home" to="/">
            {" "}
            <li>Home</li>
          </Link>
          <Link id="PopupAbout" to="/AboutPage">
            <li>About Us</li>
          </Link>
          <Link id="PopupProgram" to="/OurPrograms">
            <li>Our Programs</li>
          </Link>
          <Link id="PopupPriority" to="/News&Events">
            <li>News & Events</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
