'use client'

import { Tabs } from "antd";
import Button from "../elements/button";
import { CheckCircleFilled } from "@ant-design/icons";
import { useEffect } from "react";


const TabsWithInfo = ({ data: tabInfoData }) => {

  // const baseUrl = process.env.BASE_URL || 'http://localhost:1337'

  const mapTabData = () => {
    const items = [];

    tabInfoData.tabItem.forEach((element, i) => {
      const dataItem = {
        key: i + 1,
        label: <span className="flex gap-3 items-center"><img src={element.tabIcon.data.attributes.url} alt="" /> {element.contentHeading}</span>,
        children:
          <div className="grid md:grid-cols-2 pt-20">
            <div className="mb-8">
              <h3 className="text-3xl md:text-5xl font-bold mb-5">{element.contentHeading}</h3>
              <p className="text-lg font-light max-w-[520px] mb-10">{element.contentDescription}</p>
              <ul>
                {element.tabListFeatures.map((item, i) => (
                  <li key={i} className="mb-6"><span className="mr-3 text-green-500 font-light"><CheckCircleFilled /></span>{item.listItem}</li>
                ))}
              </ul>
              <div className="mt-14">
                <Button cta={element.tabCta} />
              </div>
            </div>
            <div className="md:min-h-[620px]">
              <img className="md:absolute right-0 " src={element.tabMediaImage.data.attributes.url} alt="" />
            </div>
          </div>
      }
      items.push(dataItem);
    });
    return items;
  }

  const items = mapTabData()


  return (
    <div className="container mx-auto pt-12 px-8 custom-tab">
      <Tabs defaultActiveKey="1" items={items} />

    </div>
  );
}

export default TabsWithInfo;