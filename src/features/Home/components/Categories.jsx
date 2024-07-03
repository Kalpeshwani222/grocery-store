import React from "react";
import { Link } from "react-router-dom";
import { useGetCategories } from "../api/get-categories";
import CategoriesSkeleton from "./Skeleton/CategoriesSkeleton";

const Categories = () => {
  const { isPending, isError, data: category, error } = useGetCategories();

  if (isPending) {
    return <CategoriesSkeleton count={20} />;
  }
  return (
    <>
      <h1 className="text-2xl font-bold mt-10">Shop by category</h1>

      <div className="main-category py-2">
        <div className="categories-div">
          <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-10 mt-1 gap-4">
            {category?.map((category) => {
              return (
                <div className="h-auto max-h-24 min-h-32 p-1 w-full flex flex-col cursor-pointer">
                  <div className="category-img-div flex justify-center h-24 rounded-xl bg-gradient-to-b from-stone-200 to-stone-50 px-2 ">
                    <img className="object-contain w-20 h-20" src={category.image} alt="img" loading="lazy" />
                  </div>

                  <div className="p-1 flex justify-center mx-auto items-center">
                    <p
                      className="text-xs text-center font-semibold"
                      style={{
                        display: "-webkit-box",
                        "-webkit-box-orient": "vertical",
                        "-webkit-line-clamp": "2",
                        overflow: "hidden",
                      }}
                    >
                      {category.title}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Categories;
