import React from "react";
import "./GetStarted.css";

const GetStarted = ({ id }) => {
  // Function to handle the "Get Started" button click
  const handleGetStarted = () => {
    window.location.href = "mailto:hello@gmail.com"; // Replace with your email
  };

  return (
    <section id={id} className="g-wrapper">
      <div className="paddings innerWidth g-container">
        <div className="flexColCenter inner-container">
          <span className="primaryText">Get Started to find your perfect abode</span>
          <span className="secondaryText">
            Subscribe and find attractive quotes from time to time
            <br />
            You dream it, we provide it!
          </span>

          <button className="button" onClick={handleGetStarted}>
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;