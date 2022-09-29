import React from "react";
import DetailsImage1 from "../ProjectImages/Picture/AboutInfoImg2.png";
import DetailsImage2 from "../ProjectImages/Picture/AboutInfoImg3.png";
import Navbar from "../Components/Navbar";
import Value1Image from "../ProjectImages/Icons/AboutInfoIcon1.png";
import Value2Image from "../ProjectImages/Icons/AboutInfoIcon2.png";
import Value3Image from "../ProjectImages/Icons/AboutInfoIcon3.png";
import Value4Image from "../ProjectImages/Icons/AboutInfoIcon4.png";
import Value5Image from "../ProjectImages/Icons/AboutInfoIcon5.png";
import CoreValues from "../Components/CoreValues";
import SubscribedBar from "./LandingPage/SubscribedBar";
import Partners from "./LandingPage/Partners";
import Footer from "./Footer";

const AboutPage = () => {
  return (
    <main className="About__Container">
      <Navbar />
      <div className="About__Container-intro">
        <div className="Container__intro-text">
          <h1 id="intro__Head">About Us</h1>
          <h2 id="Intro__body">
            Learn about our Organization and range of Works in the fight for
            Gender Equality and Justice
          </h2>
        </div>
      </div>
      <div className="About__Values">
        <div className="Values__mission">
          <h1 id="Mission_Head">Our Mission</h1>
          <p id="Mission_Paragraph">
            To Empower The Mose Vulnerable Children, Youth and Women in Rwanda
            for Their Academic and Socio-Economic Development Through Enhancing
            Access To Quality Education and Health; Social and Economic
            Empowerment And Advocacy interventions.
          </p>
        </div>
        <div className="Values__vision">
          <h1 id="Vision_Head">Our Vision</h1>
          <p id="Vision_Paragraph">
            {" "}
            Empowering Youth And Women with Knowledge And Skills To impact Their
            Lives And Communities.
          </p>
        </div>
      </div>
      <div className="AboutUs__Details">
        <h3 id="Details_bold">
          {" "}
          <span id="Details__Head">InHerPower </span> Provides A Collaborative
          Environment For Gender Justice Leaders And Advocates with a variety of
          tools to
        </h3>
        <p id="Details_paragraph">
          Help them suceed-from research and education To stratiegic-lead
          initiatives and events, providing them scholarship, to advocacy and
          unifying a collective, amplified voice. Learn More about what we do in
          our four key areas of work, and how we apply feminist practices for
          movement Building.
        </p>
      </div>
      <div className="Details__Images">
        <img id="DetailsIMage1" src={DetailsImage1} alt="" />
        <img id="DetailsIMage2" src={DetailsImage2} alt="" />
      </div>
      <div className="CoreValues">
        <div className="CoreValues__row1">
          <CoreValues
            className='Card-container1'
            id="value1"
            ImageURL={Value1Image}
            Title="Capacity Building"
            Paragraph="INHERPOWER’s capacity building work includes fostering opportunities for shared learning and professional development, leading the creation of collaborative funds and resources, providing 
                        technical assistance and guides for funding practice, and live and virtual learning events."
          />
          <CoreValues
            className='Card-container2'
            id="value2"
            ImageURL={Value2Image}
            Title="Teamwork"
            Paragraph="We treasure synergy brought by teamwork. We seek to expand our collaboration across sectors 
                        as a means of increasing efficiency and effectiveness of our work and services."
          />
        </div>
        <div className="CoreValues__row2">
          <CoreValues
            className='Card-container3'
            id="value3"
            ImageURL={Value3Image}
            Title="Strategy Development"
            Paragraph="INHERPOWER works in partnership and other funding partners to lead initiatives, develop programs, and organize collective action on key issues to strategically improve 
                        the efficacy of philanthropic work in the sphere of gender equity and justice."
          />
          <CoreValues
            id="value4"
            className='Card-container4'
            ImageURL={Value4Image}
            Title="Influence + Applification"
            Paragraph="The strength of WFN’s membership alliance creates a network of amplification and influence that is supported 
                        through coordinated advocacy opportunities, a platform for community communications and press, and leadership spotlights and directories."
          />
        </div>
        <div className="CoreValues__row3">
          <CoreValues
            className='Card-container5'
            id="value5"
            ImageURL={Value5Image}
            Title="Equality"
            Paragraph="INHERPOWER believes in equality 
                        we attach value to every human being and we recognise the importance of honouring and respecting every individual."
          />
        </div>
      </div>
      <Partners/>
      <SubscribedBar/>
      <Footer/>
    </main>
  );
};

export default AboutPage;
