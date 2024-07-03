import React from "react";

const Category = ({ data: { image, title } }) => {
  return (
    <div className="h-auto max-h-24 min-h-32 p-1 w-full flex flex-col cursor-pointer">
      <div className="category-img-div flex justify-center h-24 rounded-xl bg-gradient-to-b from-stone-200 to-stone-50 px-2 ">
        <img className="object-contain w-20 h-20" src={image} alt="img" loading="lazy" />
      </div>

      <div className="p-1 flex justify-center mx-auto items-center">
        <p className="text-xs text-center font-semibold hide-text">{title}</p>
      </div>
    </div>
  );
};

export default Category;
