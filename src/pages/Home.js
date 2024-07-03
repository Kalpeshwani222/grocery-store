import Categories from "features/Home/components/Categories";
import Slider from "features/Home/components/Slider";
import React from "react";

const Home = () => {
  return (
    <>
      <div className="home-page">
        <div className="slider-section">
          <Slider />
        </div>

        <div className="main-category-section layout-width">
          <Categories />
        </div>
      </div>
    </>
  );
};

export default Home;
