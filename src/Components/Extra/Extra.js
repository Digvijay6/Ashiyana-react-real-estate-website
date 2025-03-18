import React, { useState } from "react";
import "./Extra.css";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";
import { motion } from "framer-motion";

function Extra() {
  const [searchQuery, setSearchQuery] = useState("");

  // Function to handle search and open Google Maps
  const handleSearch = () => {
    if (searchQuery.trim()) {
      const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
        searchQuery
      )}`;
      window.open(mapsUrl, "_blank"); // Open Google Maps in a new tab
    } else {
      alert("Please enter a location to search."); // Handle empty input
    }
  };

  return (
    <section className="extra-wrapper">
      <div className="paddings innerWidth flexCenter extra-container">
        <div className="flexColStart extra-left">
          <div className="extra-title">
            <div className="blueCircle"></div>
            <motion.h1
              initial={{ y: "2rem", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 4,
                type: "ease-in",
              }}
            >
              Discover <br /> Your Dream <br /> Home
            </motion.h1>
          </div>
          <div className="flexColStart extra-des">
            <span className="secondaryText">
              Find the perfect property that matches your lifestyle.
            </span>
            <span className="secondaryText">
              Let us guide you to your ideal home effortlessly.
            </span>
          </div>
          <div className="flexCenter search-bar">
            <HiLocationMarker color="var(--blue)" size={25} />
            <input
              type="text"
              placeholder="Enter a location..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSearch()} // Allow Enter key to trigger search
            />
            <button className="button" onClick={handleSearch}>
              Search
            </button>
          </div>

          <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span>
                <CountUp start={8500} end={9000} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText">Premium Properties</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp start={50} end={90} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText">Happy Clients</span>
            </div>
            <div className="flexColCenter stat">
              <span>
                <CountUp start={10} end={25} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText">Award Winning</span>
            </div>
          </div>
        </div>

        <div className="flexCenter extra-right">
          <motion.div
            initial={{ x: "7rem", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 4,
              type: "ease-in",
            }}
            className="image-container"
          >
            <img src="./main.jpg" alt="main image" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Extra;