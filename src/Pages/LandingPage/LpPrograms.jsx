import  {React, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import ProgramsCard from "../../Components/ProgramsCard";
import WomenEmpowermentPhoto from "../../ProjectImages/Picture/EmpowermentImage1.png";
import ButtonIcon from "../../ProjectImages/Icons/LeardMoreIcon.svg";
import JobOpportunitiesPhoto from '../../ProjectImages/Picture/JobImage.png';
import ScholarshipsPhoto from '../../ProjectImages/Picture/ScholarshipImage1.png'
import "../../Styles/Programs.css";

const LpPrograms = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, [])
  return (
    
    <div className="Programs__container" >
      <div className="Programs__container-content">
        <div className="Content__text"  >
          <h1>Our Programs</h1>
          <p>
            To Empower Women, Educate Them and Gove Them the Courage to Do More
            In Whatever Positive Skills They Have.
          </p>
        </div>
        <div className="Content__Cards" data-aos="fade-left"  >
                <ProgramsCard 
                  Image={WomenEmpowermentPhoto}
                  header="Leadership Education"
                  paragraph="Women and men must enjoy equal opportunities, choices, capabilities, power and knowledge as equal citizens"
                  buttonText="Learn More"
                  buttonImage={ButtonIcon}
                />
                <ProgramsCard
                  Image={ScholarshipsPhoto}
                  header="Scholarship Opportunities"
                  paragraph="We Empower young women to apply their passion, education, skills, Networks and connections to their new careers"
                  buttonText="Learn More"
                  buttonImage={ButtonIcon}
                />
                <ProgramsCard
                  Image={JobOpportunitiesPhoto}
                  header="Job Opportunities"
                  paragraph="Empowerment help her secure internships and also job opportunities in her home country"
                  buttonText="Learn More"
                  buttonImage={ButtonIcon}
                /> 
        </div>
      </div>
    </div>
  );
};

export default LpPrograms;
