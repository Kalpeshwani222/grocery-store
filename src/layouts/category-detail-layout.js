import React from "react";
import { Outlet } from "react-router-dom";
import SubHeader from "components/Header/SubHeader";

const CategoryDetailLayout = () => {
  return (
    <>
      <div>
        <SubHeader />
        {/* <div className="px-5 py-2 h-fit md:px-20 md:py-20"> */}
        <Outlet />
        {/* </div> */}
      </div>
    </>
  );
};

export default CategoryDetailLayout;
