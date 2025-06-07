'use client'

import { API_BASE_URL } from "@/components/utils/constants";
import Image from "next/image";

const TermsConditionsHero = ({ data }) => {

  const heroBg = data[0].attributes.heroBgColor
  return (
    <div className={`bg-[${heroBg}]`}>
      <div className="container">
        <div className="flex">
          <h1 className="text-white min-h-56 flex-1 flex items-center text-5xl font-bold">{data[0].attributes.heroTitle}</h1>
          <Image src={`${data[0].attributes.heroImage.data.attributes.url} `} width={300} height={300} style={{ objectFit: 'contain', width: '100% !important' }} className="relative flex-1" />

        </div>

      </div>
    </div>
  );
}

export default TermsConditionsHero;