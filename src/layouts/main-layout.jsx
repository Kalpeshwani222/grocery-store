import React from "react";
import { Outlet } from "react-router-dom";
import Header from "components/Header/Header";

const MainLayout = () => {
  return (
    <>
      <div>
        <Header />
        <div className="px-5 py-2 h-fit md:px-20 md:py-20">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default MainLayout;
