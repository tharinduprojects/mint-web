'use client'

import { Collapse, theme } from "antd";

const ImageWithAccordian = ({ data: accordianData }) => {

  const baseUrl = process.env.BASE_URL
  const { token } = theme.useToken();
  const panelStyle = {
    marginBottom: 24,
    background: '#fff',
    borderRadius: '4px',
    border: 'none',
  };

  const mapAccordianData = () => {
    const items = [];

    accordianData.accordianItem.forEach((item, i) => {
      const dataItem = {
        key: i + 1,
        label: <p className="font-medium text-lg">{item.accordianTitle}</p>,
        children: <p className="font-light">{item.accordianDescription}</p>,
        style: panelStyle
      };
      items.push(dataItem);
    });

    return items;
  };

  const items = mapAccordianData();

  return (
    <div className="bg-bgLight pt-8 pb-24">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 gap-x-">
          <div>
            <img src={baseUrl + accordianData.sectionImage.data.attributes.url} alt="" />
          </div>
          <div className="max-w-[580px]">
            <h2 className="text-5xl font-semibold mb-5">{accordianData.sectionTitle}</h2>
            <p className="text-lg max-w-[400px] font-light">{accordianData.sectionDescription}</p>
            <div className="mt-10">
              <Collapse bordered={false} accordion defaultActiveKey={['1']} items={items} />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default ImageWithAccordian;