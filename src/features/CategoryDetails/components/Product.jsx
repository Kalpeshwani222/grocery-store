import React from "react";

const Product = ({ product: { _id, image, discountPercentage, title, price, discountedPrice } }) => {
  return (
    <div key={_id} className="">
      <div className="relative">
        <img src={image} alt="product-img" className="border w-full h-full rounded-xl object-cover hover:scale-105 hover:duration-300" />
        <div className="flex items-start h-11 w-9 absolute top-0 left-0">
          <img className="rounded-tl-xl w-full" src="https://cdn.zeptonow.com/web-static-assets-prod/artifacts/10.18.4/images/offer-tag.svg" alt="discount" />
          <p className="absolute top-[2px] left-[10px] text-center font-semibold text-[10px] text-white">
            {discountPercentage} <br></br>off
          </p>
        </div>
      </div>

      <p className="text-base font-semibold">{title}</p>
      <p className="text-sm mb-5">1</p>
      <p className="text-gray-600 line-through">{discountedPrice}</p>
      <div className="font-semibold mb-1 flex gap-x-2 items-baseline justify-between">
        <p className="text-lg font-bold">{price}</p>
        <button className="border border-[#ff3269] font-medium text-[#ff3269] py-1 px-4 rounded-md focus:outline-none">ADD</button>
      </div>
    </div>
  );
};

export default Product;
