import React from "react";
import { useNavigate } from "react-router-dom";
import { Animate } from "react-simple-animate";
import "./styles.scss";

const Home = () => {
  const navigate = useNavigate();

  const handleNavigateToContactMePage = () => {
    navigate("/contact");
  };
  const handleNavigateToResume = () => {
    fetch("dhruv.res.pdf").then((response) => {
      response.blob().then((blob) => {
      
          // Creating new object of PDF file
          const fileURL =
              window.URL.createObjectURL(blob);
              
          // Setting various property values
          let alink = document.createElement("a");
          alink.href = fileURL;
          alink.download = "dhruv.res.pdf";
          alink.click();
      });
  });
  };

  // const handleNavigateToResume = () => {
  //   const pdfUrl = "dhruv.res.pdf";
  //   const link = document.createElement("a");
  //   link.href = pdfUrl;
  //   link.download = "dhruv.res.pdf"; // specify the filename
  //   document.body.appendChild(link);
  //   link.click();
  //   document.body.removeChild(link);

  // };


  return (
    <section id="home" className="home">
      <div className="home__text-wrapper">
        <h1>
          Hello, I'm Dhruv Sharma
          <br />
          Front end developer
        </h1>
      </div>
      <Animate
        play
        duration={1.5}
        delay={1}
        start={{
          transform: "translateY(550px)",
        }}
        end={{
          transform: "translatex(0px)",
        }}
      >
        <div className="home__contact-me">
          <button onClick={handleNavigateToContactMePage}>Hire Me</button>
        </div>
      </Animate>
      <Animate
        play
        duration={1.5}
        delay={1}
        start={{
          transform: "translateY(550px)",
        }}
        end={{
          transform: "translatex(0px)",
        }}
      >
        <div className="home__resume">
          <button onClick={handleNavigateToResume}>Download Resume</button>
        </div>
      </Animate>
    </section>
  );
};
export default Home;
