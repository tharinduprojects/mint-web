'use client'

import { Collapse } from "antd";

const ImageWithAccordian = ({ data: accordianData }) => {

  const baseUrl = process.env.BASE_URL

  const mapAccordianData = () => {
    const items = [];

    accordianData.accordianItem.forEach((item, i) => {
      const dataItem = {
        key: i + 1,
        label: item.accordianTitle,
        children: <p>{item.accordianDescription}</p>
      };
      items.push(dataItem);
    });

    return items;
  };

  const items = mapAccordianData();

  return (
    <div className="bg-bgLight">
      <div className="container mx-auto">
        <div className="grid grid-cols-2">
          <div className="p-5">
            <img src={baseUrl + accordianData.sectionImage.data.attributes.url} alt="" />
          </div>
          <div>
            <h2>{accordianData.sectionTitle}</h2>
            <p>{accordianData.sectionDescription}</p>
            <Collapse accordion defaultActiveKey={['1']} ghost items={items} />
          </div>
        </div>

      </div>
    </div>
  );
}

export default ImageWithAccordian;