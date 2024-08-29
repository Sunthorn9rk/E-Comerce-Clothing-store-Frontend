import React from "react";

function Category() {
  return (
    <div className="w-full bg-white ">
      <div className="bg-[#F0F0F0] max-w-[1280px] mx-auto p-20 rounded-3xl">
        <h1 className="text-center text-5xl font-black mb-16">
          BROWSE BY DRESS STYLE
        </h1>
        <div className="grid grid-cols-3 grid-row-2 gap-4">
          <a
            href="#"
            className="flex items-center justify-center w-full h-80 relative "
          >
            <img
              src="/category1.png"
              className=" object-cover w-full h-full rounded-2xl"
            />
            <div className="text-black/[90] text-4xl font-semibold   bg-white absolute top-[40px] left-8">
              Casual
            </div>
          </a>
          <a
            href="#"
            className="col-span-2 flex items-center justify-center  w-full h-80 relative"
          >
            <img
              src="/category2.png"
              className=" object-cover w-full h-full rounded-2xl"
            />
            <div className="text-black/[90] text-4xl font-semibold   bg-white absolute top-[40px] left-8">
              Formal
            </div>
          </a>
          <a
            href="#"
            className="col-span-2 row-start-2 flex items-center justify-center  w-full h-80 relative"
          >
            <img
              src="/category3.png"
              className=" object-cover w-full h-full rounded-2xl"
            />
            <div className="text-black/[90] text-4xl font-semibold   bg-white absolute top-[40px] left-8">
              Party
            </div>
          </a>
          <a
            href="#"
            className="col-start-3 row-start-2 flex items-center justify-center  w-full h-80 relative"
          >
            <img
              src="/category4.png"
              className=" object-cover w-full h-full rounded-2xl"
            />
            <div className="text-black/[90] text-4xl font-semibold   bg-white absolute top-[40px] left-8">
              Gym
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Category;
