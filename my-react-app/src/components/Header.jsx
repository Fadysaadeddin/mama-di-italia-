import React from "react";
import "../styles/header.css";
import logo from "../assets/logo1.png"; // Adjust the path/extension if needed

const Header = () => {
  return (
    <header className="restaurant-header">
      <div className="header-flex">
        <img src={logo} alt="Mama di Italia Logo" className="restaurant-logo" />
        <div className="header-main-content">
         
          <div className="header-content">
            <h1 className="restaurant-name">Mama di Italia</h1>
            <p className="restaurant-tagline">
              Authentic Italian flavors, family warmth, and a touch of elegance.
            </p>
            <p className="restaurant-subtagline">
              <span role="img" aria-label="chef">
                👩‍🍳
              </span>{" "}
              Benvenuti! Enjoy our hand-crafted pizzas, pastas, and more.
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
