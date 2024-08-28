'use client';

import { API_BASE_URL } from "../utils/constants";

const HeroWeAre = ({ data: heroWeAreData }) => {
  return (
    <div className="px-0">
      <img className="w-full md:h-full h-[55vh] object-cover" src={heroWeAreData.bgImage.data.attributes.url} alt="" />
      <div className="absolute top-[15%] md:top-[50%] left-[50%] translate-x-[-50%] lg:translate-y-[-184%] 2xl:translate-y-[-150%] text-center">
        <h3 className="text-lg md:text-2xl lg:text-3xl lg:font-medium">{heroWeAreData.titleSmall}</h3>
        <h1 className="text-4xl  md:text-5xl lg:text-7xl font-semibold">{heroWeAreData.heading}</h1>
      </div>
    </div>
  );
}

export default HeroWeAre;