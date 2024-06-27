// src/components/index.js
import React from "react";
import img1 from "../images/img1.png";
import img2 from "../images/img2.png";
import img3 from "../images/img3.png";
import img4 from "../images/img4.png";
import avatar1 from "../images/avatar1.svg";
import avatar2 from "../images/avatar2.svg";

export const trendingItems = [
  { image: img1, title: "ExBoot #2", avatar: avatar1, price: "$100" },
  { image: img2, title: "ExBoot #1", avatar: avatar2, price: "$150" },
  { image: img3, title: "Future of Polygon X", avatar: avatar2, price: "$200" },
  { image: img4, title: "Blue Wave #2", avatar: avatar1, price: "$250" },
];

export const exploreItems = Array.from({ length: 12 }, (_, index) => ({
  image: img1,
  title: `Art ${index + 1}`,
  avatar: avatar1,
  price: `$${(index + 1) * 50}`,
}));

export const Card = ({ image, title, avatar, price }) => {
  return (
    <div className="bg-[#1F1F1F] rounded-lg cursor-pointer shadow-lg p-4">
      <img
        src={image}
        alt={title}
        className="rounded-lg w-full h-[277px] object-cover"
      />
      <h2 className="mt-4 text-lg font-semibold">{title}</h2>
      <div className="mt-2 flex items-center justify-between">
        <img src={avatar} alt="Avatar" className="w-8 h-8 rounded-full" />
        <span className="text-xl font-bold">{price}</span>
      </div>
    </div>
  );
};

const FeaturedCard = ({
  image,
  avatar,
  name,
  title,
  description,
  bid,
  timeLeft,
  buttonText,
}) => {
  return (
    <div className="flex md:flex-col sm:flex-col lg:flex-row items-center  bg-[#1F1F1F] rounded-lg p-4 shadow-lg">
      <img
        src={image}
        alt="Featured"
        className="w-full md:w-1/2 object-cover rounded-lg"
      />
      <div className="flex flex-col justify-between p-4 w-full">
        <div className="flex items-center space-x-4">
          <img src={avatar} alt="Avatar" className="w-12 h-12 rounded-full" />
          <span className="text-lg font-semibold">{name}</span>
        </div>
        <div className="mt-2 text-xl font-bold">{title}</div>
        <div className="mt-1 text-gray-600">{description}</div>
        <div className="mt-2 text-[#F4F4F4 ">
          We would like to present you The Exboot 3D - Watching you~
        </div>
        <div className="mt-2 flex justify-between items-center text-gray-800">
          <div>
            <div className="text-[#6B6B6B] ">Current Bid:</div>
              <span className="font-semibold text-[#FFFFFF]"> {bid}</span>
          </div>
          <div>
            <div className="text-[#6B6B6B] ">Time Left:</div>
            <span className="text-[#FFFFFF] "> {timeLeft}</span>
          </div>
        </div>
        <button className="bg-gradient-to-r from-[#FF56BB] via-[6.99%]  to-[#FF8F77] via-[119.86%] mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default FeaturedCard;
