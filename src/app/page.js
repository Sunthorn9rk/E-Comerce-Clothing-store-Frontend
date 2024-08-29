import Image from "next/image";
import React from "react";
import HeroBanner from "./components/HeroBanner";
import BrandBanner from "./components/BrandBanner";
import ProductCard from "./components/ProductCard";
import Category from "./components/Category";

export default function Home() {
  return (
    <main className="bg-white">
      <HeroBanner />
      <BrandBanner />
      <h1 className="flex justify-center text-5xl font-black pt-20">
        NEW ARRIVALS
      </h1>
      {/* products grid start */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 pt-10 max-w-[1280px] mx-auto p-20 lg:p-0">
        {/* {data?.map((data) => (
          <ProductCard key={data.id} data={data} />
        ))} */}

        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
      {/* products grid end */}
      <h1 className="flex justify-center text-5xl font-black pt-20">
        TOP SELLING
      </h1>
      {/* products grid start */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 pt-10 max-w-[1280px] mx-auto p-20 lg:p-0 border-2 border-red-500">
        {/* {data?.map((data) => (
          <ProductCard key={data.id} data={data} />
        ))} */}
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
      {/* products grid end */}
      <Category />
    </main>
  );
}
