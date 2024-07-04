import React from "react";
import { Outlet } from "react-router-dom";
import SubHeader from "components/Header/SubHeader";

const CategoryDetailLayout = () => {
  return (
    <>
      <div>
        <SubHeader />
        <Outlet />
      </div>
    </>
  );
};

export default CategoryDetailLayout;
