import React, { useState } from "react";
import "./Header.css";
import { BiMenuAltRight } from "react-icons/bi";
import OutsideClickHandler from "react-outside-click-handler";

function Header() {
  const [menuOpened, setMenuOpened] = useState(false);

  // Function to handle smooth scrolling to sections
  const scrollToSection = (id) => {
    console.log(`Attempting to scroll to section with id: ${id}`);
    const element = document.getElementById(id);
    if (element) {
      console.log(`Element found:`, element);
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      console.error(`Element with id ${id} not found`);
    }
  };

  const getMenuStyles = (menuOpened) => {
    if (document.documentElement.clientWidth <= 800) {
      return { right: !menuOpened && "-100%" };
    }
  };

  return (
    <section className="h-wrapper">
      <div className="flexCenter paddings innerWidth h-container">
        <img src="logo.jpg" alt="logo" width={100} />

        <OutsideClickHandler
          onOutsideClick={() => {
            setMenuOpened(false);
          }}
        >
          <div className="flexCenter h-menu" style={getMenuStyles(menuOpened)}>
            <a href="#residencies" onClick={() => scrollToSection("residencies")}>
              Residencies
            </a>
            <a href="#values" onClick={() => scrollToSection("values")}>
              Our Values
            </a>
            <a href="#contact" onClick={() => scrollToSection("contact")}>
              Contact Us
            </a>
            <a href="#get-started" onClick={() => scrollToSection("get-started")}>
              Get Started
            </a>
            <button className="button" onClick={() => scrollToSection("contact")}>
              Contact
            </button>
          </div>
        </OutsideClickHandler>

        <div
          className="menu-icon"
          onClick={() => setMenuOpened((prev) => !prev)}
        >
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </section>
  );
}

export default Header;