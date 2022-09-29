import React from "react";
import Navbar from "../../Components/Navbar";
import "../../Styles/NewsEvents.css";
import Post2Image from "../../ProjectImages/Picture/OurProgramsimg2.png";
import ProgramPostCard from "../OurPrograms/ProgramPostCard";
import Partners from "../LandingPage/Partners";
import SubscribedBar from "../LandingPage/SubscribedBar";
import Footer from "../Footer";

const NewsEvents = () => {
  return (
    <main className="NewsEvents__Container">
      <Navbar />
      <div className="NewsEvents__Container">
        <h1 id="Intro--text">News + Events</h1>
      </div>
      <div className="NewsEvents__Categories">
        <ul className="Categories--list">
          <li>
            <button id="Categories--All">All</button>
          </li>
          <li>
            <button id="Categories--News">News</button>
          </li>
          <li>
            <button id="Categories--Events">Events</button>
          </li>
        </ul>
        <hr id="Categories--line" />
      </div>
      <div className="NewsEvents__Posts">
        <ProgramPostCard
          Imageurl={Post2Image}
          Title="Education"
          Paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempor, in donec pellentesque ut pellentesque. Ante egestas viverra id suspendisse nec praesent cras in ac. Euismod lorem turpis faucibus orci, tellus maecenas aliquet. Sollicitudin eros mauris vel aenean enim, etiam. Euismod lorem turpis faucibus orci, tellus maecenas aliquet. Sollicitudin eros mauris vel aenean enim, etiam. Euismod lorem turpis faucibus orci, 
            tellus maecenas aliquet. Sollicitudin eros mauris vel aenean enim, etiam."
        />
        <ProgramPostCard
          Imageurl={Post2Image}
          Title="Education"
          Paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempor, in donec pellentesque ut pellentesque. Ante egestas viverra id suspendisse nec praesent cras in ac. Euismod lorem turpis faucibus orci, tellus maecenas aliquet. Sollicitudin eros mauris vel aenean enim, etiam. Euismod lorem turpis faucibus orci, tellus maecenas aliquet. Sollicitudin eros mauris vel aenean enim, etiam. Euismod lorem turpis faucibus orci, 
            tellus maecenas aliquet. Sollicitudin eros mauris vel aenean enim, etiam."
        />
      </div> 
      <div className="footer">
        <Partners/>
        <SubscribedBar/>
        <Footer/>
      </div>

    </main>
  );
};

export default NewsEvents;
