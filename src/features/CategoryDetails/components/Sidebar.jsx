import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useGetSubCategories } from "../api/get-subCategories";

const Sidebar = () => {
  console.log("-----------sidebar rendered-----------------------");
  const navigate = useNavigate();
  const { categoryId } = useParams();

  const { isPending, isError, data, error } = useGetSubCategories(categoryId);

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  const handleNavigate = (e, SUBID) => {
    e.preventDefault();
    navigate(`/categories/${categoryId}/${SUBID}`);
  };
  return (
    <>
      <div className="w-2/6 sm:w-1/6 max-h-screen sticky border border-r-1 border-y-0 border-l-0 top-28 md:top-20 overflow-y-auto no-scrollbar">
        <div className="sticky top-0 overflow-y-auto">
          {data?.map((subcate) => {
            return (
              <button
                className=" bg-white p-2 flex flex-wrap  width-full md:flex-nowrap justify-center md:justify-normal items-center gap-x-2  focus:border-[#950edb] focus:border-l-4 focus:text-[#7c0ab1] focus:bg-[#f0ccff]"
                onClick={(e) => handleNavigate(e, subcate._id)}
              >
                <div className="w-16 h-16 bg-gray-100 shrink-0 rounded-xl">
                  <img src={subcate.image} alt="img" loading="lazy" />{" "}
                </div>
                <p className="font-medium">{subcate.title}}</p>
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default React.memo(Sidebar);
