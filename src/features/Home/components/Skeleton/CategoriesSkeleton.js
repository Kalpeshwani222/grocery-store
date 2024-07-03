import React from "react";

const CategoriesSkeleton = ({ count }) => {
  return (
    <>
      <h1 className="text-2xl font-bold mt-10">Shop by category</h1>

      <div className="main-category py-2">
        <div className="categories-div">
          <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-10 mt-1 gap-4">
            {Array(count)
              .fill(0)
              .map((_, index) => (
                <div key={index} className="h-auto max-h-24 min-h-32 p-1 w-full flex flex-col cursor-pointer animate-pulse">
                  <div className="category-img-div flex justify-center h-24 rounded-xl bg-gray-300">
                    <div className="object-contain w-20 h-20 bg-gray-400" />
                  </div>

                  <div className="p-1 flex justify-center mx-auto items-center">
                    <div className="w-20 h-4 bg-gray-300 rounded" />
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoriesSkeleton;
