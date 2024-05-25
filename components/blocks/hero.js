'use client'

import Button from "../elements/button";

const Hero = ({ data: heroData }) => {

  const baseUrl = process.env.BASE_URL
  const heroImage = baseUrl + heroData.image.data.attributes.url
  const heroTitle = heroData.heading
  const heroDescription = heroData.description
  const heroButton = heroData.cta

  return (
    <div className="bg-primaryHero py-20">
      <div className="container mx-auto">
        <div className="flex">
          <div className="flex flex-col justify-center">
            <h1 className="text-5xl font-bold">{heroTitle}</h1>
            <p>{heroDescription}</p>
            <div className="flex my-4">
              <Button cta={heroButton} />
            </div>
          </div>
          <div>
            <img src={heroImage} alt="" />
          </div>
        </div>

      </div>
    </div>
  );
}

export default Hero;