import React from "react";
import menuData from "../data/menuData";
import "../styles/menu.css"; // make sure this file exists

const Menu = () => {
  return (
    <div className="menu-container">
      {menuData.map((section) => (
        <div key={section.category} className="menu-section">
          <h2 className="category-title">{section.category}</h2>
          <div className="menu-grid">
            {section.items.map((item) => (
              <div key={item.id} className="menu-card">
                <img src={item.imageUrl} alt={item.name} className="menu-img" />
                <div className="menu-info">
                  <h3 className="menu-name">{item.name}</h3>
                  <p className="menu-description">{item.description}</p>
                  <p className="menu-price">${item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Menu;
