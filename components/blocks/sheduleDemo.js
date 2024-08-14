'use client'

import { Form, Input } from "antd";
import Button from "../elements/button";
import { API_BASE_URL } from "../utils/constants";
import Image from "next/image";

const ScheduleDemo = ({ data: sheduleDemoData }) => {
  const [form] = Form.useForm();


  // console.log('sheduleDemoData', sheduleDemoData);
  return (
    <div className="py-20 bg-[#CDE9FD] px-8 overflow-hidden">
      <div className="container">
        <div className="flex flex-col md:flex-row">
          <div className="flex-1 mb-9">
            <h2 className="text-3xl md:text-5xl font-semibold leading-[1.4] max-w-[426px] mb-5">{sheduleDemoData.heading}</h2>
            <p>{sheduleDemoData.description}</p>
          </div>
          <div className="flex-[1.3] flex justify-end relative">
            <Image width={500} height={500} className="hidden md:block object-contain absolute w-full left-[90px] bottom-[-6px]" src={sheduleDemoData.demoForm[0].formBackDrop.data[0].attributes.url} alt="" />
            <div className="bg-[#073353] md:py-14 md:px-12 p-8 max-w-[520px] flex-1 rounded-xl relative">
              <h3 className="text-white text-2xl md:text-3xl font-medium mb-5">{sheduleDemoData.demoForm[0].formTitle}</h3>
              <p className="text-white text-sm md:text-base font-light mb-10">{sheduleDemoData.demoForm[0].formDescription}</p>
              <Form
                form={form}
                layout="vertical"
                autoComplete="off"
              >
                <Form.Item
                  name="email"
                  label="Work email *"
                  className="text-white"
                >
                  <Input placeholder="name@company.com" />
                </Form.Item>
              </Form>
              <div className="flex my-4">
                <Button cta={sheduleDemoData.demoForm[0].formButton[0]} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ScheduleDemo;