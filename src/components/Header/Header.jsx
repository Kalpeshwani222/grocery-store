import React from "react";
import { FaCartPlus, FaRegUserCircle } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import logo from "assets/logo.svg";
import MobileHeader from "./MobileHeader";
const Header = () => {
  return (
    <header className="">
      <nav className="hidden bg-[#40046c] md:fixed w-full z-50 md:flex justify-around items-center py-1 text-white ">
        <div className="w-32 cursor-pointer">
          <img src={logo} alt="logo" />
        </div>

        <div className={`relative md:w-2/5 flex items-center justify-center px-5 py-2`}>
          <span className="absolute left-7 ">
            <IoMdSearch className="text-2xl text-gray-900" />
          </span>
          <a className="bg-white cursor-text text-gray-700 w-full py-3 px-10 rounded-lg border-none focus:outline-none" href="/search">
            Search for products...
          </a>
        </div>

        <ul className="hidden md:flex text-lg gap-x-10">
          <li className="flex gap-x-2 items-center">
            <FaCartPlus className="text-2xl" />
            <p>View Cart</p>
          </li>
          <li className="flex gap-x-2 items-center">
            <FaRegUserCircle className="text-2xl" />
            <p>Account</p>
          </li>
        </ul>
      </nav>

      <MobileHeader />
    </header>
  );
};

export default Header;
