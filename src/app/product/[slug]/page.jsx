"use client";
import ProductDetailsCarousel from "@/components/ProductDetailsCarousel";
import React, {useEffect, useState} from "react";
import {getDiscountPricePercentage} from "../../../../utils/helper";

import {IoMdHeartEmpty} from "react-icons/io";
import Wrapper from "@/components/Wrapper";
import {FaStar} from "react-icons/fa";
import AboutProduct from "@/components/AboutProduct";

function page() {
  const [product, setProduct] = useState([]);
  const [products, setProducts] = useState([]);
  const p = product?.data?.[0]?.attributes;
  const [selectedSize, setSelectedsize] = useState();
  const [showError, setShowError] = useState(false);
  // const dispatch = useDispatch();

  const renderDescription = (description) => {
    return description?.map((item, index) => {
      if (item.type === "paragraph") {
        return (
          <p key={index}>
            {item.children.map((child, childIndex) => {
              if (child.type === "text") {
                if (child.bold) {
                  return <strong key={childIndex}>{child.text}</strong>;
                }
                return child.text;
              }
              return null;
            })}
          </p>
        );
      }
      return null;
    });
  };

  // function amount item button
  // สร้าง state เพื่อเก็บค่าจำนวนสินค้า
  const [quantity, setQuantity] = useState(1);

  // ฟังก์ชันเพิ่มจำนวน
  const increaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  // ฟังก์ชันลดจำนวน
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  return (
    <div className="w-full md:py-20">
      <Wrapper>
        <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">
          {/* left column start */}
          <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
            <ProductDetailsCarousel images="/image1.png" />
          </div>
          {/* left column end */}

          {/* right column start */}
          <div className="flex-[1] py-3">
            {/* PRODUCT TITLE */}
            <div className="text-[34px] font-semibold mb-2 leading-tight">
              Shirt
            </div>

            {/* PRODUCT SUBTITLE */}
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

            {/* PRODUCT PRICE */}
            <div className="flex items-center text-black/[0.5]">
              <p className="mr-2 text-lg font-semibold">$500</p>
              {700 && (
                <>
                  <p className="text-base font-medium line-through">${700}</p>
                  <p className="ml-auto text-base font-medium text-green-500">
                    {getDiscountPricePercentage(700, 500)}% off
                  </p>
                </>
              )}
            </div>

            <div className="text-md font-medium text-black/[0.5] my-2">
              This Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Officiis
            </div>

            <hr />

            {/* PRODUCT SIZE RANGE START */}
            <div className="mb-10 my-2">
              {/* Colors START */}
              <div className="my-4">
                <div className="mt-6">
                  <div className="text-md font-medium">Select Colors</div>
                </div>
                <div className="flex gap-4 my-2">
                  <div className="bg-red-500 rounded-full w-10 h-10 cursor-pointer"></div>
                  <div className="bg-green-500 rounded-full w-10 h-10 cursor-pointer"></div>
                  <div className="bg-blue-500 rounded-full w-10 h-10 cursor-pointer"></div>
                </div>
              </div>
              {/* Colors END */}

              <hr />
              {/* Size START */}
              <div className="my-4">
                <div className="mt-6">
                  <div className="text-md font-medium">Select Size</div>
                </div>
                <div className="flex gap-4 my-2">
                  <div className="bg-gray-200 rounded-full w-auto h-auto cursor-pointer py-4 px-6">
                    Small
                  </div>
                  <div className="bg-gray-200 rounded-full w-auto h-auto cursor-pointer py-4 px-6">
                    Medium
                  </div>
                  <div className="bg-gray-200 rounded-full w-auto h-auto cursor-pointer py-4 px-6">
                    Large
                  </div>
                  <div className="bg-gray-200 rounded-full w-auto h-auto cursor-pointer py-4 px-6">
                    X-Large
                  </div>
                </div>
              </div>
              {/* Size END */}

              {/* SHOW ERROR START */}
              {showError && (
                <div className="text-red-600 mt-1">
                  Size selection is required
                </div>
              )}
              {/* SHOW ERROR END */}
            </div>
            {/* PRODUCT SIZE RANGE END */}
            {/* START BUTTON AMOUNT PRODUCT */}
            {/* ////////////////////////// */}
            <div className="flex gap-4">
              <div className="w-1/3 py-4 rounded-full bg-gray-200 text-lg font-medium transition-transform active:scale-95 mb-3 flex justify-between gap-8 px-6">
                <button className="w-full text-3xl" onClick={decreaseQuantity}>
                  -
                </button>
                <input
                  className="bg-gray-200 w-6 text-center"
                  type="text"
                  value={quantity}
                  readOnly
                />
                <button className="w-full text-3xl" onClick={increaseQuantity}>
                  +
                </button>
              </div>

              {/* END BUTTON AMOUNT PRODUCT */}

              {/* ADD TO CART BUTTON START */}
              <button
                className="w-2/3 py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75"
                onClick={() => {
                  if (!selectedSize) {
                    setShowError(true);
                    document.getElementById("sizesGrid").scrollIntoView({
                      block: "center",
                      behavior: "smooth",
                    });
                  } else {
                    dispatch(
                      addToCart({
                        ...product?.data?.[0],
                        selectedSize,
                        oneQuantityPrice: p.price,
                      })
                    );
                    notify();
                  }
                }}
              >
                Add to Cart
              </button>
              {/* ADD TO CART BUTTON END */}
            </div>
          </div>
          {/* right column end */}
        </div>
        {/* DETAIL PRODUCT START */}
        <AboutProduct />
        {/* DETAIL PRODUCT END */}
      </Wrapper>
    </div>
  );
}

export default page;
