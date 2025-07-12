import React from "react";
import "../styles/categoriesScroller.css";

const categories = [
  "Special Mama Pizza",
  "Pizzas With Meat",
  "Pizzas With Fish",
  "Vegetarian Pizzas",
  "Kapsalon Menu",
  "Turkish Pizzas",
  "Durum Wraps",
  "Turkish Bread",
  "Pita Bread",
  "Spare Ribs",
  "Dishes",
  "Mixed Dishes",
  "Mixed Grill",
  "Pastas From Oven",
  "Steaks",
  "Hamburgers",
  "Salads",
  "children Menu",
  "Soups",
  "Appetizers",
  "Drinks And Extras",
  "Beers",
];

const CategoriesScroller = ({ onCategoryClick, activeCategory }) => {
  return (
    <div className="categories-container">
      <div className="categories-scroll">
        {categories.map((category, index) => (
          <div
            key={index}
            className={`category-pill${
              activeCategory === category ? " active" : ""
            }`}
            onClick={() => onCategoryClick(category)}
            tabIndex={0}
            role="button"
            style={{ userSelect: "none" }}
          >
            {category}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoriesScroller;
