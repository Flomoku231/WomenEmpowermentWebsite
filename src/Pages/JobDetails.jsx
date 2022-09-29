import React from "react";
import "../Styles/JobDetails.css";
import CommentSection from "../Components/CommentSection";
import JobDetailImage from "../ProjectImages/Picture/Event3.png";
import Navbar from "../Components/Navbar";
import Footer from "./Footer";
import SubscribedBar from "./LandingPage/SubscribedBar";

const JobDetails = () => {
  return (
    <main className="JobDetails__Container">
      <Navbar />
      <div className="JobDetails__Content">
        <h1 id="JobDetailsHeader">Jobs Opportunity</h1>
        <p id="JobDetailsParagraph">Updated on novermber 28,2022 By INHERPOWER</p>
        <span>
          <img id="JobImageId" src={JobDetailImage} alt="" />
          <h2 id="JobDetailsHeader">Watch one of the most tips of what the interview is done.</h2>
        </span>
        <p id="JobDetailsParagraph">
          Ultricies tincidunt eu nibh quis bibendum purus in. Lacus arcu rhoncus
          lectus cursus arcu duis. Laoreet morbi varius facilisis eget viverra
          pulvinar integer. At aliquam risus ornare porttitor libero tellus
          quisque. Magna interdum velit velit, ac amet, malesuada nam accumsan
          sed. Augue sem ut congue urna etiam sit gravida pellentesque et. Magna
          facilisi sagittis vulputate sit cursus vel laoreet hac. Pretium sit
          convallis nunc risus enim pulvinar. Arcu, sagittis massa quis sed
          ullamcorper fames arcu mi sollicitudin. Interdum nisl auctor a, amet
          feugiat imperdiet dui purus risus. Nec vivamus lobortis semper est
          quis at condimentum risus. Diam turpis arcu in ipsum, pellentesque sit
          in. In enim proin id eu amet tortor ac sagittis lacus. Phasellus
          neque, mattis felis non nec et. Urna, ac bibendum pharetra, porta odio
          amet ultrices at cras. Quam ultricies ipsum etiam vestibulum, tortor,
          facilisis nam. Suspendisse in elit tristique amet suspendisse risus.
          Id leo faucibus senectus viverra et egestas venenatis, dui. Laoreet
          est ultrices euismod aliquam diam consectetur nullam quam hac. Nec
          purus iaculis tortor amet, at neque. Nisi, donec maecenas augue odio
          lacinia id scelerisque nibh proin. Amet vulputate viverra suspendisse
          lacinia semper orci sapien. Urna, ultricies massa accumsan est id
          ultricies. Pellentesque sed faucibus eget pretium sem curabitur tellus
          nisi faucibus. Et at vitae consectetur gravida convallis. Tellus id
          consectetur diam convallis magna feugiat. Pharetra felis mauris magna
          auctor. Eget aliquet malesuada nec mauris tortor, ornare dictum ac
          mauris. Sed ornare mi diam aliquam eu mi, dignissim tortor. Lectus nam
          dignissim fringilla dignissim risus tincidunt tincidunt etiam feugiat.
          At tortor consequat duis eget montes, neque. Sed eu nunc odio risus,
          ultrices. Volutpat amet, fames vel maecenas nisi, aliquam. Ornare
          facilisi nunc quisque velit vitae ullamcorper nunc Ultricies tincidunt
          eu nibh quis bibendum purus in. Lacus arcu rhoncus lectus cursus arcu
          duis. Laoreet morbi varius facilisis eget viverra pulvinar integer. At
          aliquam risus ornare porttitor libero tellus quisque. Magna interdum
          velit velit, ac amet, malesuada nam accumsan sed. Augue sem ut congue
          urna etiam sit gravida pellentesque et. Ultricies tincidunt eu nibh
          quis bibendum purus in. Lacus arcu rhoncus lectus cursus arcu duis.
          Laoreet morbi varius facilisis eget viverra pulvinar integer. At
          aliquam risus ornare porttitor libero tellus quisque. Magna interdum
          velit velit, ac amet, malesuada nam accumsan sed. Augue sem ut congue
          urna etiam sit gravida pellentesque et.
        </p>
      </div>
      <CommentSection />
      <span className='Second--text'>
      <p id="JobDetailsParagraph">
        Ultricies tincidunt eu nibh quis bibendum purus in. Lacus arcu rhoncus
        lectus cursus arcu duis. Laoreet morbi varius facilisis eget viverra
        pulvinar integer. At aliquam risus ornare porttitor libero tellus
        quisque. Magna interdum velit velit, ac amet, malesuada nam accumsan
        sed. Augue sem ut congue urna etiam sit gravida pellentesque et. Magna
        facilisi sagittis vulputate sit cursus vel laoreet hac. Pretium sit
        convallis nunc risus enim pulvinar. Arcu, sagittis massa quis sed
        ullamcorper fames arcu mi sollicitudin. Interdum nisl auctor a, amet
        feugiat imperdiet dui purus risus. Nec vivamus lobortis semper est quis
        at condimentum risus. Diam turpis arcu in ipsum, pellentesque sit in. In
        enim proin id eu amet tortor ac sagittis lacus. Phasellus neque, mattis
        felis non nec et. Urna, ac bibendum pharetra, porta odio amet ultrices
        at cras. Quam ultricies ipsum etiam vestibulum, tortor, facilisis nam.
        Suspendisse in elit tristique amet suspendisse risus. Id leo faucibus
        senectus viverra et egestas venenatis, dui. Laoreet est ultrices euismod
        aliquam diam consectetur nullam quam hac. Nec purus iaculis tortor amet,
        at neque. Nisi, donec maecenas augue odio lacinia id scelerisque nibh
        proin. Amet vulputate viverra suspendisse lacinia semper orci sapien.
        Urna, ultricies massa accumsan est id ultricies. Pellentesque sed
        faucibus eget pretium sem curabitur tellus nisi faucibus. Et at vitae
        consectetur gravida convallis. Tellus id consectetur diam convallis
        magna feugiat. Pharetra felis mauris magna auctor. Eget aliquet
        malesuada nec mauris tortor, ornare dictum ac mauris. Sed ornare mi diam
        aliquam eu mi, dignissim tortor. Lectus nam dignissim fringilla
        dignissim risus tincidunt tincidunt etiam feugiat. At tortor consequat
        duis eget montes, neque. Sed eu nunc odio risus, ultrices. Volutpat
        amet, fames vel maecenas nisi, aliquam. Ornare facilisi nunc quisque
        velit vitae ullamcorper nunc.
      </p>
      </span>
      <SubscribedBar />
      <Footer />
    </main>
  );
};

export default JobDetails;
