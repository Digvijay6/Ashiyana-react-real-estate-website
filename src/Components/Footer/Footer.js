import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <section className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        {/* left side */}
        <div className="flexColStart f-left">
          <img src="./logo.jpg" alt="" width={120} />

          <span className="secondaryText">
            Our vision is to turn bauilding into homes.
          </span>
        </div>

        {/* right side */}
        <div className="flexColStart f-right">
          <span className="primaryText">Ashiyana</span>
          <span className="secondaryText">Nainital, Uttarakhand</span>

          <div className="flexCenter f-menu">
            <span>Property</span>
            <span>Services</span>
            <span>Product</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
