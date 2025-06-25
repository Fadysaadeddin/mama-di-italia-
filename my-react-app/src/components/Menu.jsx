import React, { useState } from "react";
import menuData from "../data/menuData";
import "../styles/menu.css";

const Menu = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleCardClick = (item) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  return (
    <div className="menu-container">
      {Object.entries(menuData).map(([category, items]) => (
        <div
          key={category}
          className="menu-section"
          id={category.replace(/\s+/g, "").toLowerCase()}
        >
          <h2 className="category-title">{category}</h2>
          <div className="menu-grid">
            {items.map((item) => (
              <div
                key={item.id}
                className="menu-card"
                onClick={() => handleCardClick(item)}
                tabIndex={0}
                style={{ cursor: "pointer" }}
              >
                {/* imageUrl is optional; handle gracefully if not provided */}
                {item.url && (
                  <img src={item.url} alt={item.name} className="menu-img" />
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

      {selectedItem && (
        <div className="menu-modal-overlay" onClick={closeModal}>
          <div
            className="menu-modal"
            onClick={(e) => e.stopPropagation()}
            tabIndex={-1}
          >
            <button
              className="menu-modal-close"
              onClick={closeModal}
              aria-label="Close"
            >
              &times;
            </button>
            {selectedItem.url && (
              <img
                src={selectedItem.url}
                alt={selectedItem.name}
                className="menu-modal-img"
              />
            )}
            <h3 className="menu-modal-title">{selectedItem.name}</h3>
            <p className="menu-modal-description">{selectedItem.description}</p>
            <p className="menu-modal-price">{selectedItem.price}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;
