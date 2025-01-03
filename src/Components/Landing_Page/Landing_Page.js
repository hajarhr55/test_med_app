import React from "react"; // Importing the necessary modules from React library
import { Link } from "react-router-dom"; // Importing the Link component from react-router-dom library
import "./LandingPage.css"; // Importing the CSS styles for the Landing_Page component

// Defining the Function component Landing_Page
const Landing_Page = () => {
  return (
    <section className="hero-section">
      {/* Main container for hero section */}
      <div>
        <div data-aos="fade-up" className="flex-hero">
          {/* Main heading */}
          <h1>
            Your Health
            <br />
            <span className="text-gradient">Our Responsibility</span>
          </h1>
          {/* Blob animations */}
          <div className="blob-cont">
            <div className="blue blob"></div>
          </div>
          <div className="blob-cont">
            <div className="blue1 blob"></div>
          </div>
          {/* Subheading */}
          <h4>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque at quae ducimus. Suscipit omnis quibusdam non cum rem voluptatem!
          </h4>
          {/* Get Started button */}
          <a href="#services">
            <button className="button">Get Started</button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Landing_Page; // Exporting the Landing_Page component to be used in other parts of the application
