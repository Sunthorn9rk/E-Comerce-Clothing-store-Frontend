import Image from "next/image";
import React from "react";
import HeroBanner from "./components/HeroBanner";
import BrandBanner from "./components/BrandBanner";
import ProductCard from "./components/ProductCard";

export default function Home() {
  return (
    <main className="bg-white">
      <HeroBanner />
      <BrandBanner />
      <h1 className="flex justify-center text-4xl font-black p-2">
        TOP SELLING
      </h1>
      {/* products grid start */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-16">
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
    </main>
  );
}
