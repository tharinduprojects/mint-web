'use client'

import Image from "next/image";
import { API_BASE_URL } from "../utils/constants";

const MintHrmNumbers = ({ data: mintHrmNumbers }) => {
  return (
    <div style={{ 'background': `${mintHrmNumbers.bgColor && mintHrmNumbers.bgColor}` }} className="py-20 relative md:min-h-[560px]">
      {
        mintHrmNumbers.backDrop.data && <Image fill className="w-full h-full object-cover" src={mintHrmNumbers.backDrop.data.attributes.url} alt="" />
      }

      <div className="container relative">
        <div className="text-center pb-14 mt-9">
          <h2 className="text-3xl md:text-5xl font-semibold mb-2">{mintHrmNumbers.heading}</h2>
          <p>{mintHrmNumbers.description}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {
            mintHrmNumbers?.mintNumbers?.map((item, i) => (
              <div key={i} className="pl-11">
                <span className="text-lg font-normal text-[#6021DF]">{item.title}</span>
                <p className="text-[80px] font-semibold">{item.number}</p>
                <span className="text-base- font-light">{item.description}</span>
              </div>
            ))
          }

        </div>
      </div>
    </div>
  );
}

export default MintHrmNumbers;