import React from "react";
import {FaStar} from "react-icons/fa";
import {getDiscountPricePercentage} from "../../../utils/helper";

function ProductCard() {
  return (
    <div className="w-full">
      <div className="flex">
        {/* start of item1 */}
        <div class="w-full bg-white p-2">
          <a href="#" className="">
            <img
              className="rounded-2xl"
              src="/image1.png"
              width={500}
              alt="product-image1"
            />
          </a>
          <div class="p-4">
            <a href="#">
              <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                VERTICAL STRIPED SHIRT
              </h5>
            </a>
            <div class="flex items-center my-1">
              <div class="flex items-center space-x-1 rtl:space-x-reverse">
                <FaStar className="text-yellow-300" />
                <FaStar className="text-yellow-300" />
                <FaStar className="text-yellow-300" />
                <FaStar className="text-yellow-300" />
                <FaStar className="text-yellow-300" />
                {/* <FaStar className="text-gray-200" /> */}
              </div>
              <span class=" ms-3">5/5</span>
            </div>
            <div class="flex items-center gap-2">
              <span class="text-2xl font-bold text-gray-900 ">$212</span>
              <span class="text-2xl font-bold line-through text-black/40 ">
                $232
              </span>
              <p className="text-sm font-medium text-red-500  p-1 rounded-full bg-gray-100">
                -{getDiscountPricePercentage(232, 212)}%
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
