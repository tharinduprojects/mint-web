'use client'

import { Form, Input } from "antd";
import Button from "../elements/button";

const Hero = ({ data: heroData }) => {
  const [form] = Form.useForm();
  const baseUrl = process.env.BASE_URL
  const heroImage = baseUrl + heroData.image.data.attributes.url
  const heroTitle = heroData.heading
  const heroDescription = heroData.description
  const heroButton = heroData.cta
  const heroAuthor = heroData.author
  const heroBackDrop = baseUrl + heroData.backDrop.data.attributes.url

  return (
    <div className="bg-primaryHero py-20 relative">
      <img className="absolute right-0 bottom-0 opacity-50" src={heroBackDrop} alt="" />
      <div className="container mx-auto">
        <div className="grid grid-cols-2">
          <div className="flex flex-col justify-center">
            <div className="max-w-[500px] text-primaryHeroText">
              <h1 className="text-6xl font-bold mb-5 leading-[1.2]">{heroTitle}</h1>
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
            <img src={heroImage} alt="" className="max-w-[650px] relative" />
          </div>
        </div>

      </div>
    </div>
  );
}

export default Hero;