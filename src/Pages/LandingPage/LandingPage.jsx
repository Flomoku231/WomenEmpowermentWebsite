import React from "react";
import '../../Styles/LandingPage.css';
import Footer from "../Footer";
import Intro from "./Intro";
import LpAboutPage from "./LpAboutPage";
import LpPriority from "./LpPriority";
import LpPrograms from "./LpPrograms";
import Partners from "./Partners";
import SubscribedBar from "./SubscribedBar";


const LandingPage = () => {
  return (
    <div className="LandingPage__Container">
      <Intro/>
      <LpAboutPage/>
      <LpPrograms/>
      <LpPriority/>
      <Partners/>
      <SubscribedBar/>
      <Footer/>
    </div>
  );
};

export default LandingPage;
