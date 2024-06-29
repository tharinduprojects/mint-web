'use client'

import Image from "next/image";
import { API_BASE_URL } from "../utils/constants";
import { useState } from "react";

const OurKeyClients = ({ data: keyClientData }) => {

  const gridClass = keyClientData.grid > 1 ? `grid grid-cols-${keyClientData.grid} gap-3` : 'flex flex-wrap gap-3 justify-center';
  const imgClass = keyClientData.grid > 1 ? 'w-full' : '';

  return (
    <div className="px-8 py-20" style={{ 'background': `${keyClientData.bgColor}` }}>
      <div className="container">
        <h2 className="text-3xl md:text-5xl font-semibold mb-5 text-center">{keyClientData.heading}</h2>
        <p className="text-lg font-light text-center grid-col max-w-[645px] mx-auto">{keyClientData.description}</p>
        <div className={`py-10 mt-20 ${gridClass}`}>
          {
            keyClientData.logos.data?.map((item, i) => (
              <img key={i} className={imgClass} src={API_BASE_URL + item.attributes.url} alt="" />
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default OurKeyClients;