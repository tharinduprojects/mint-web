'use client'

import Button from "../elements/button";

const CtaSection = ({ data: ctaData }) => {
  const baseUrl = process.env.BASE_URL

  return (
    <div className="py-10 relative md:min-h-[650px] max-h-96 md:max-h-none flex items-center">
      <img className="absolute w-full h-full top-0 left-0 object-cover" src={ctaData.backgroundImage.data.attributes.url} alt="" />
      <div className="container mx-auto relative">
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl max-w-[600px] font-semibold mx-auto text-white leading-[1.4]">{ctaData.heading}</h2>
          <div className="mt-14">
            <Button cta={ctaData.buttonLink} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CtaSection;