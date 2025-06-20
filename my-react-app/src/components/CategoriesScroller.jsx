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

const scrollToCategory = (category) => {
  const sectionId = category.replace(/\s+/g, "").toLowerCase();
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

const CategoriesScroller = () => {
  return (
    <div className="categories-container">
      <div className="categories-scroll">
        {categories.map((category, index) => (
          <div
            key={index}
            className="category-pill"
            onClick={() => scrollToCategory(category)}
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
