// FeaturedCollections.jsx
import React from 'react';
import FeaturedCard from '../../utils/index';
import img1 from '../../images/img1.png';
import img2 from '../../images/img2.png';
import avatar from '../../images/avatar2.svg';

const FeaturedCollections = () => {
  const cardData = [
    {
      image: img1,
      avatar: avatar,
      name: 'Perperzon',
      title: 'ExBoot #1',
      description: 'Description',
      bid: '$100',
      timeLeft: '1h 12m 14s',
      buttonText: 'Place Bid',
    },
    {
      image: img2,
      avatar: avatar,
      name: 'Perperzon',
      title: 'ExBoot #2',
      description: 'Description',
      bid: '$100',
      timeLeft: '1h 12m 14s',
      buttonText: 'Place Bid',
    },
  ];

  return (
    <div className="container max-w-[1200px] mx-auto px-3 gap-8 grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 items-center lg:mb-52 md:mb-26 sm:mb-16 mb-10">
      {cardData.map((card, index) => (
        <FeaturedCard key={index} {...card} />
      ))}
    </div>
  );
};

export default FeaturedCollections;
