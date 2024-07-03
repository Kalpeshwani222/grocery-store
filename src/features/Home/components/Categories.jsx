import React from "react";
import { Link } from "react-router-dom";
import { useGetCategories } from "../api/get-categories";
import CategoriesSkeleton from "./CategoriesSkeleton";
import Category from "./Category";

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
            {category?.map((category) => (
              <Category data={category} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Categories;
