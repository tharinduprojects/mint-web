'use client'

import Button from "../elements/button";

const CtaSection = ({ data: ctaData }) => {
  const baseUrl = process.env.BASE_URL

  return (
    <div className="py-10 relative min-h-[650px] flex items-center">
      <img className="absolute w-full h-full top-0 left-0 object-cover" src={baseUrl + ctaData.backgroundImage.data.attributes.url} alt="" />
      <div className="container mx-auto relative">
        <div className="text-center">
          <h2 className="text-5xl max-w-[600px] font-bold mx-auto text-white">{ctaData.heading}</h2>
          <div className="mt-14">
            <Button cta={ctaData.buttonLink} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CtaSection;