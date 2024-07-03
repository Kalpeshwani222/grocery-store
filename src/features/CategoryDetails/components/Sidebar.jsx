import React from "react";

const Sidebar = () => {
  return (
    <>
      <div className="w-2/6 sm:w-1/6 max-h-screen sticky border border-r-1 border-y-0 border-l-0 top-28 md:top-20 overflow-y-auto no-scrollbar">
        <div className="sticky top-0 overflow-y-auto">
          {Array.from({ length: 20 }).map((_, i) => (
            <div key={i} className=" bg-white p-2 flex flex-wrap md:flex-nowrap justify-center md:justify-normal items-center gap-x-2  focus:bg-indigo-300">
              <div className="w-16 h-16 bg-gray-100 animate-pulse shrink-0 rounded-xl"> </div>
              <p className="font-medium">Item {i + 1}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
