import React from "react";
import "../Styles/Footer.css";
import InHerPowerLogo from "../ProjectImages/Picture/InHerPowerLogo.png";
import CopyrightSymbol from "../ProjectImages/Icons/CopyRight.png";
import InstagramIcon from "../ProjectImages/Icons/Instagram.png";
import FacebookIcon from "../ProjectImages/Icons/Facebook.png";
import TwiterIcon from "../ProjectImages/Icons/Twiter.png";
import LinkdinIcon from "../ProjectImages/Icons/Linkdin.png";
import YoutubeIcon from "../ProjectImages/Icons/YouTube.png";

const Footer = () => {
  return (
    <div className="Footer__Container">
      <div className="Footer__Content">
        <div className="leftContent">
          <img id="Footer_Logo" src={InHerPowerLogo} alt="" />
          <p>
            Copyright <img id="CopyrightIcon" src={CopyrightSymbol} alt="" />
            2022 All Rights Received.
          </p>
        </div>
        <div className="middleContent">
          <h2>Our Links:</h2>
          <ul className="Links__Container">
            <li>about Us</li>
            <li>our Programs</li>
            <li>Our priority</li>
          </ul>
        </div>
        <div className="rightContent">
          <h2>Connect With Us:</h2>
          <div className="Footer__icons">
            <img src={InstagramIcon} alt="" />
            <img src={TwiterIcon} alt="" />
            <img src={FacebookIcon} alt="" />
            <img src={LinkdinIcon} alt="" />
            <img src={YoutubeIcon} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
