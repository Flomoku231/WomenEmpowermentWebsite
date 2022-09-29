import React from "react";
import Aos from "aos";
import { Link } from "react-router-dom";
import "aos/dist/aos.css";
import ProgramsCard from "../../Components/ProgramsCard";
import { useEffect } from "react";
import WomenEmpowermentPhoto from "../../ProjectImages/Picture/EmpowermentImage1.png";
import ButtonIcon from "../../ProjectImages/Icons/LeardMoreIcon.svg";
import JobOpportunitiesPhoto from "../../ProjectImages/Picture/JobImage.png";
import ScholarshipsPhoto from "../../ProjectImages/Picture/ScholarshipImage1.png";
import "../../Styles/Programs.css";

const LpPrograms = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="Programs__container">
      <div className="Programs__container-content">
        <div className="Content__text">
          <h1>Our Programs</h1>
          <div data-aos="fade-up"></div>{" "}
          <p>
            To Empower Women, Educate Them and Gove Them the Courage to Do More
            In Whatever Positive Skills They Have.
          </p>
        </div>
        <div className="Content__Cards-Container">
          <div className="Content__Cards">
            <Link id='ProgramsRoute' to="/Education">
              {" "}
              <ProgramsCard
                Image={WomenEmpowermentPhoto}
                header="Leadership Education"
                paragraph="Women and men must enjoy equal opportunities, choices, capabilities, power and knowledge as equal citizens"
                buttonText="Learn More"
                buttonImage={ButtonIcon}
              />
            </Link>
            <Link id='ProgramsRoute' to="/JobDetails">
            <ProgramsCard
              Image={ScholarshipsPhoto}
              header="Scholarship Opportunities"
              paragraph="We Empower young women to apply their passion, education, skills, Networks and connections to their new careers"
              buttonText="Learn More"
              buttonImage={ButtonIcon}
            /></Link>
            <Link id='ProgramsRoute' to="/JobDetails">
            <ProgramsCard
              Image={JobOpportunitiesPhoto}
              header="Job Opportunities"
              paragraph="Empowerment help her secure internships and also job opportunities in her home country"
              buttonText="Learn More"
              buttonImage={ButtonIcon}
            />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LpPrograms;
