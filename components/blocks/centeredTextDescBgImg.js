'use client'

import Image from "next/image";
import { API_BASE_URL } from "../utils/constants";

const CenteredTextDescBgImg = ({ data: centeredData }) => {
  console.log('centeredData', centeredData);
  return (
    <div className="px-8 py-10 relative min-h-[560px] flex flex-col justify-center items-center" style={{ 'background': `${centeredData.bgColor}` }}>
      <Image fill className="w-full h-full object-cover" src={centeredData.backDrop?.data.attributes.url} alt="" />
      <div className="container text-center relative">
        <h2 className="text-5xl font-semibold mb-12">{centeredData.title}</h2>
        <p className="text-[32px] max-w-[1000px] mx-auto text-center">{centeredData.description}</p>
      </div>
    </div>
  );
}

export default CenteredTextDescBgImg;