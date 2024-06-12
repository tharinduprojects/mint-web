'use client'

import { Form, Input } from "antd";
import Button from "../elements/button";
import Image from "next/image";
import { API_BASE_URL } from "../utils/constants";

const Hero = ({ data: heroData }) => {
  const [form] = Form.useForm();
  const baseUrl = process.env.BASE_URL
  const heroImage = API_BASE_URL + heroData.image.data.attributes.url
  const heroTitle = heroData.heading
  const heroDescription = heroData.description
  const heroButton = heroData.cta
  const heroAuthor = heroData.author
  const heroBackDrop = API_BASE_URL + heroData.backDrop.data.attributes.url


  return (
    <div className="bg-primaryHero py-20 relative px-8 md:px-0">
      <Image fill className="absolute hidden lg:block right-0 bottom-0 opacity-50 object-contain" src={heroBackDrop} alt="" />
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2">
          <div className="flex flex-col justify-center relative">
            <div className="max-w-[500px] text-primaryHeroText">
              <h1 className="text-5xl lg:text-6xl font-bold mb-5 leading-[1.2]">{heroTitle}</h1>
              <span className="text-lg font-light italic">{heroAuthor}</span>
              <p className="text-xl font-light mt-10 mb-9">{heroDescription}</p>
              <Form
                form={form}
                layout="vertical"
                autoComplete="off"
              >
                <Form.Item
                  name="email"
                  label="Work email *"
                >
                  <Input placeholder="name@company.com" />
                </Form.Item>
              </Form>
              <div className="flex my-4">
                <Button cta={heroButton} />
              </div>
            </div>
          </div>
          <div className="flex justify-end">
            {/* <img src={heroImage} alt="" className="max-w-[650px] relative" /> */}
            <Image src={heroImage} width={300} height={300} style={{ objectFit: 'contain', width: '100%' }} className="max-w-[650px] relative" />
          </div>
        </div>

      </div>
    </div>
  );
}

export default Hero;