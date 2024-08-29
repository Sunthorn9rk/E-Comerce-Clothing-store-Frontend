import React from "react";
import {FaStar} from "react-icons/fa";
import {getDiscountPricePercentage} from "../../../utils/helper";

function ProductCard() {
  return (
    <div className="w-full p-10">
      {/* <h1 className="flex justify-center text-4xl font-black p-2">
        TOP SELLING
      </h1> */}
      <div className="flex">
        {/* start of item1 */}
        <div class="w-full max-w-sm bg-white p-4">
          <a href="#" className="flex items-center justify-center">
            <img
              className="rounded-2xl"
              src="/image1.png"
              alt="product-image1"
            />
          </a>
          <div class="p-4 px-10">
            <a href="#">
              <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                VERTICAL STRIPED SHIRT
              </h5>
            </a>
            <div class="flex items-center mt-2.5 mb-5">
              <div class="flex items-center space-x-1 rtl:space-x-reverse">
                <FaStar className="text-yellow-300" />
                <FaStar className="text-yellow-300" />
                <FaStar className="text-yellow-300" />
                <FaStar className="text-yellow-300" />
                <FaStar className="text-yellow-300" />
                {/* <FaStar className="text-gray-200" /> */}
              </div>
              <span class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
                5/5
              </span>
            </div>
            <div class="flex items-center justify-between gap-2">
              <span class="text-xl font-bold text-gray-900 dark:text-white">
                $212
              </span>
              <span class="text-xl font-bold line-through text-black/40 dark:text-white">
                $232
              </span>
              <p className="ml-auto text-base font-medium text-green-500">
                {getDiscountPricePercentage(232, 212)}% off
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
