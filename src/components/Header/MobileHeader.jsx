import React from "react";
import { IoMdSearch } from "react-icons/io";
import logo from "assets/logo.svg";
import useIsScroll from "hooks/useIsScroll";

const MobileHeader = () => {
  const isScrolled = useIsScroll();

  return (
    <nav className={`z-50 md:hidden w-full bg-[#40046c] text-white transition-all duration-700 ease-in-out ${isScrolled ? "fixed" : ""}`}>
      <div className={`flex justify-between items-center px-5 py-3 transition-all duration-700 ease-in-out ${isScrolled ? "hidden opacity-0" : "opacity-100"}`}>
        <div className="w-24">
          <img src={logo} alt="logo" />
        </div>
      </div>
      <div className={`relative w-full flex items-center justify-center px-5 py-2 transition-all duration-700 ease-in-out `}>
        <span className="absolute left-7 ">
          <IoMdSearch className="text-xl text-gray-900" />
        </span>
        <a className="bg-white text-gray-700 w-full py-3 px-8 rounded-lg border-none focus:outline-none" href="/search">
          Search for products...
        </a>
      </div>
    </nav>
  );
};

export default MobileHeader;
