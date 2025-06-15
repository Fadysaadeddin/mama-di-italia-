import React from "react";
import "../styles/header.css";

const Header = () => {
  return (
    <header className="restaurant-header">
      <div className="header-content">
        <h1 className="restaurant-name">Mama di Italia</h1>
        <p className="restaurant-tagline">
          Authentic Italian flavors served with love 🍝
        </p>
      </div>
    </header>
  );
};

export default Header;
