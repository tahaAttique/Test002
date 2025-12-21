import React from "react";
import Carousel from "../components/Carousel";
import ShopBy from "../components/ShopBy";
import GenInfo, { Brands } from "../components/GenInfo";

const Home = () => {
  return (
    <div className="max-w-screen-xl xs:w-[95vw] xs:max-w-[95vw] md:w-full mx-auto ">
      <Carousel />
      <GenInfo />
      <Brands />
     <div className="md:w-full md:max-w-full xs:mx-2 sm:mx-auto">
  <div className="prose prose-2xl">
    <ShopBy title="Best Sellers" filter="bestSellers" />
  </div>
  {/* Display Top Brands products in Best Sellers - Full Width */}
  <div className="w-full mt-8">
    <Brands />
  </div>
  <div className="prose prose-2xl">
    <ShopBy title="Top Rated" filter="topRated" />
  </div>
</div>
    </div>
  );
};

export default Home;