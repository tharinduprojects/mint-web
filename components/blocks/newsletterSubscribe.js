'use client'

import { Form, Input } from "antd";
import Image from "next/image";
import { API_BASE_URL } from "../utils/constants";
import Button from "../elements/button";

const NewsletterSubscribe = ({ data: newsletterData }) => {
  const [form] = Form.useForm();

  return (
    <div className="py-[135px] relative px-8">
      <Image fill className="w-full h-full absolute top-0 left-0 object-cover" src={newsletterData.sectionBackdrop.data.attributes.url} alt="" />
      <div className="container text-center relative text-white">
        <h2 className="text-3xl md:text-5xl font-semibold mb-5">{newsletterData.heading}</h2>
        <p className="max-w-[675px] mx-auto text-base md:text-lg mb-16 font-light">{newsletterData.description}</p>
        <div className="flex items-center justify-center gap-[10px] inline-form">
          <Form
            form={form}
            layout="vertical"
            autoComplete="off"
          >
            <Form.Item
              name="email"
              className="text-white"
            >
              <Input placeholder="name@company.com" className="w-[250px]" />
            </Form.Item>
          </Form>
          <Button cta={newsletterData.formButton} />
        </div>
      </div>
    </div>
  );
}

export default NewsletterSubscribe;