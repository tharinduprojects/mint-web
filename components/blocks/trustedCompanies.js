"use client"

import Image from "next/image";
import { API_BASE_URL } from "../utils/constants";

const TrustedCompanies = ({ data: trustedData }) => {

  const baseUrl = process.env.BASE_URL

  return (
    <div className="bg-bgLight py-20 px-3 md:px-0">
      <div className="container mx-auto">
        <h2 className="text-center text-2xl font-semibold mb-8">{trustedData.title}</h2>
        <div className="flex gap-4 justify-center flex-wrap ">
          {
            trustedData.logo.data.map((logo, i) => (
              <Image key={i} width={200} height={45} className="grayscale object-contain max-h-[45px] max-w-[100px] md:max-w-full" src={API_BASE_URL + logo.attributes.url} alt="" />
            ))
          }
        </div>
      </div>

    </div>
  );
}

export default TrustedCompanies;