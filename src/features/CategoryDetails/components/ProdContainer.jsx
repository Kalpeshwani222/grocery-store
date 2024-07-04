import React from "react";
import Product from "./Product";
import { useGetProducts } from "../api/get-products";
import { useParams } from "react-router-dom";

const ProdContainer = () => {
  console.log("-----------Products rendered-----------------------");
  const { subcategoryId } = useParams();
  const { isPending, isError, data: products, error } = useGetProducts(subcategoryId);

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <div className="right-container mt-28 md:mt-20 w-full md:w-5/6 px-2 md:px-5">
      <h1 className="hidden md:block font-semibold text-2xl mb-5">ALL</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-2 gap-y-2 md:gap-x-4 md:gap-y-4">
        {products?.map((product) => (
          <Product product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProdContainer;
