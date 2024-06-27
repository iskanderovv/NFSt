import React from "react";
import { Card, trendingItems } from "../../utils/index";

const TrendingArt = () => {
  return (
    <div className="container max-w-[1200px] mx-auto px-3 gap-2 items-center lg:mb-52 md:mb-26 sm:mb-16 mb-10">
      <h2 className="font-bold leading-[-0.3%] text-[40px] mb-12 ">Trending Art 🔥</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {trendingItems.map((item, index) => (
          <Card
            key={index}
            image={item.image}
            title={item.title}
            avatar={item.avatar}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default TrendingArt;
