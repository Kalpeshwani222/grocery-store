import React from "react";
import { GoSearch } from "react-icons/go";
import { GoArrowLeft } from "react-icons/go";
import Header from "./Header";

const SubHeader = () => {
  return (
    <header>
      <div className="md:hidden shadow-md z-50 bg-white fixed top-0 w-screen mx-auto border border-b-2">
        <nav className="relative flex justify-between items-center px-3 py-5">
          <a href="/">
            <GoArrowLeft className="text-2xl" />
          </a>
          <div className="absolute left-14">
            <div className="text-xl font-bold">Fresh Vegetables</div>
            <div>
              <p className="text-xs">35 Items</p>
            </div>
          </div>
          <span className="">
            <GoSearch className="text-xl" />
          </span>
        </nav>
      </div>
      {/* for larger screens */}
      <nav className="hidden md:block">
        <Header deliveryTime={"Delivery in 9 mins"} location={"Pimprala, Jalgaon, Maharashtra"} />
      </nav>
    </header>
  );
};

export default SubHeader;
