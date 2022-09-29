import React from "react";
import ProgramPostCard from "./ProgramPostCard";
import "../../Styles/ProgramPost.css";
import Post1Image from "../../ProjectImages/Picture/AboutInfoImg1.png";
import Post2Image from "../../ProjectImages/Picture/OurProgramsimg2.png";
import ProgramPostCard2 from "./ProgramPostCard2";
import Post1Video from "../../ProjectImages/Picture/OurProgramsimg3.png";
import Button from "../../Components/Button";
import SubscribedBar from "../LandingPage/SubscribedBar";
import Partners from "../LandingPage/Partners";
import Footer from "../Footer";

const ProgramPost = () => {
  return (
    <main className="ProgramPost">
      <div className="ProgramPost__FirstCards">
        <ProgramPostCard
          Imageurl={Post1Image}
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
      <div className="ProgramPost__SecondCards">
        <ProgramPostCard2
          ImageUrl={Post1Video}
          Header="Jobs Opportunity"
          Paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet auctor fringilla elementum mauris. Convallis ac, sed at malesuada etiam quam eget ut. Etiam facilisis pharetra, mi, quis est et elit ac.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet auctor fringilla elementum mauris. Convallis ac, sed at malesuada 
        etiam quam eget ut. Etiam facilisis pharetra, mi, quis est et elit ac.   "
        />

        <ProgramPostCard2
          ImageUrl={Post1Video}
          Header="Jobs Opportunity"
          Paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet auctor fringilla elementum mauris. Convallis ac, sed at malesuada etiam quam eget ut. Etiam facilisis pharetra, mi, quis est et elit ac.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet auctor fringilla elementum mauris. Convallis ac, sed at malesuada 
        etiam quam eget ut. Etiam facilisis pharetra, mi, quis est et elit ac.   "
        />
      </div>
      <div className="ProgramPost__joinUs">
        <h2>“Help us provide powerful support to funds fueling social change for all genders, worldwide.”</h2>
          <Button
          className="JoinUs-button"
          name="Join Us"
          />
      </div>
      <Partners/>
      <SubscribedBar/>
      <Footer/>
    </main>
  );
};

export default ProgramPost;
