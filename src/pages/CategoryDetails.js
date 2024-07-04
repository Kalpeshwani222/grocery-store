import ProdContainer from "features/CategoryDetails/components/ProdContainer";
import Sidebar from "features/CategoryDetails/components/Sidebar";
import React from "react";

const CategoryDetails = () => {
  return (
    <>
      <div className="md:hidden fixed w-full z-50 top-16 border border-t-1 border-x-0 border-b-2 shadow-lg p-2 bg-white">
        <p className="px-5 font-semibold">All</p>
      </div>

      <div className="flex lg:mx-5">
        <Sidebar />
        <ProdContainer />
      </div>
    </>
  );
};

export default CategoryDetails;
