import React from "react";
import "../styles/categoriesScroller.css";

const categories = [
  "Special Mama Pizza",
  "Pizza with Meat",
  "Pizza with Fish",
  "Pizza Vegetarian",
  "Kapsalon",
  "Turkish Pizzas",
  "Durum Wrap",
  "Turkish Brood",
  "Pita Brood",
  "Spare-Ribs",
  "Dishes",
  "Mixed Dishes",
  "Mixed Grill",
  "Pastas from the Oven",
  "Steak",
  "Hamburgers",
  "Salads",
  "Children's Menu",
  "Soups",
  "Appetizer",
  "Drinks and Extras",
  "Beer",
  "Magnum Pints 440ml"
];

const CategoriesScroller = () => {
  return (
    <div className="categories-container">
      <div className="categories-scroll">
        {categories.map((category, index) => (
          <div key={index} className="category-pill">
            {category}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoriesScroller;
