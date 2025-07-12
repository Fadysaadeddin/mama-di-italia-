import React, { useState, useEffect } from "react";
import Menu from "./components/Menu";
import Header from "./components/header";
import CategoriesScroller from "./components/CategoriesScroller";
import "./App.css";

function App() {
  const [showArrow, setShowArrow] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);

  useEffect(() => {
    const onScroll = () => {
      setShowArrow(window.scrollY > 200);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToHeader = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Header />
      <CategoriesScroller
        onCategoryClick={setActiveCategory}
        activeCategory={activeCategory}
      />
      <Menu activeCategory={activeCategory} />
      {showArrow && (
        <button
          className="scroll-to-top-arrow scroll-to-top-arrow-center"
          onClick={scrollToHeader}
          aria-label="Back to top"
        >
          {/* Creative up arrow symbol */}
          <span style={{ fontSize: "2.2rem" }}>⬆️</span>
        </button>
      )}
    </>
  );
}

export default App;
