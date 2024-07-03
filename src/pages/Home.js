import React from "react";
import Sliders from "components/slider/Slider";
import Categories from "features/Home/components/Categories";

const Home = () => {
  return (
    <>
      <div className="home-page">
        <div className="slider-section">
          <Sliders />
        </div>

        <div className="main-category-section layout-width">
          <Categories />
        </div>
      </div>
    </>
  );
};

export default Home;
