import React from "react";
import { Card, exploreItems } from "../../utils/index";
import img1 from '../../images/Rectangle 275-1.png';
const Explore = () => {
  return (
    <div className="py-[133px] container max-w-[1200px] mx-auto px-3 ">
      <h3 className="font-bold text-[40px] tracking-[-0.3%] mb-[50px]">Explore</h3>
      <div className="gap-4 grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 items-center lg:mb-52 md:mb-26 sm:mb-16 mb-10">
        {exploreItems.map((item, index) => (
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

export default Explore;
