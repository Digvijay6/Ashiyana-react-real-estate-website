import React from "react";
import "./Contact.css";
import { MdCall } from "react-icons/md";
import { HiChatBubbleBottomCenter } from "react-icons/hi2";
import { BsFillChatDotsFill } from "react-icons/bs";

const Contact = ({ id }) => {
  // Function to handle phone call
  const handleCall = () => {
    window.location.href = "tel:+902112314514"; // Replace with your phone number
  };

  // Function to handle chat (e.g., open WhatsApp)
  const handleChat = () => {
    window.open("https://wa.me/902112314514", "_blank"); // Replace with your WhatsApp link
  };

  // Function to handle video call (e.g., open Zoom or Google Meet)
  const handleVideoCall = () => {
    window.open("https://meet.google.com", "_blank"); // Replace with your video call link
  };

  // Function to handle messaging (e.g., open email client)
  const handleMessage = () => {
    window.location.href = "mailto:contact@realestate.com"; // Replace with your email
  };

  return (
    <div id={id} className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">
        {/* left side */}
        <div className="flexColStart c-left">
          <span className="orangeText">Our Contacts</span>
          <span className="primaryText">Easy to contact us</span>
          <span className="secondaryText">
            We’re always ready to deliver exceptional service tailored to your
            needs. <br />
            Because we believe the right home isn’t just a place to live—it’s the
            foundation for a better life.{" "}
          </span>
          <br />
          <div className="flexColStart contactModes">
            {/* first row */}
            <div className="flexStart row">
              {/* Call */}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdCall size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Call</span>
                    <span className="secondaryText">021 123 145 14</span>
                  </div>
                </div>
                <div className="flexCenter button" onClick={handleCall}>
                  Call now
                </div>
              </div>

              {/* Chat */}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Chat on Whatsapp</span>
                    <span className="secondaryText"></span>
                  </div>
                </div>
                <div className="flexCenter button" onClick={handleChat}>
                  Chat now
                </div>
              </div>
            </div>

            {/* second row */}
            <div className="flexStart row">
              {/* Video Call */}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Video Call</span>
                    <span className="secondaryText"></span>
                  </div>
                </div>
                <div className="flexCenter button" onClick={handleVideoCall}>
                  Video Call now
                </div>
              </div>

              {/* Message */}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <HiChatBubbleBottomCenter size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Mail</span>
                    <span className="secondaryText"></span>
                  </div>
                </div>
                <div className="flexCenter button" onClick={handleMessage}>
                  Message now
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* right side */}
        <div className="flexEnd c-right">
          <div className="image-container">
            <img src="./main4.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;