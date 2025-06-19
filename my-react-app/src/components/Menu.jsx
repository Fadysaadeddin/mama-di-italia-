import React from "react";
import menuData from "../data/menuData";
import "../styles/menu.css";

const Menu = () => {
  return (
    <div className="menu-container">
      {Object.entries(menuData).map(([category, items]) => (
        <div key={category} className="menu-section">
          <h2 className="category-title">{category}</h2>
          <div className="menu-grid">
            {items.map((item) => (
              <div key={item.id} className="menu-card">
                {/* imageUrl is optional; handle gracefully if not provided */}
                {item.imageUrl && (
                  <img src={item.imageUrl} alt={item.name} className="menu-img" />
                )}
                <div className="menu-info">
                  <h3 className="menu-name">{item.name}</h3>
                  <p className="menu-description">{item.description}</p>
                  <p className="menu-price">{item.price}</p>
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

