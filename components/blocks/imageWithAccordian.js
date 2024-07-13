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

  console.log('items', accordianData.mediaCss);

  // const imgStyles = accordianData.mediaCss

  // Convert imgStyles from string to object if necessary
  const parseCssString = (cssString) => {
    if (!cssString) return {};
    return cssString.split(',').reduce((acc, style) => {
      const [key, value] = style.split(':');
      if (key && value) {
        acc[key.trim()] = value.trim();
      }
      return acc;
    }, {});
  };

  const imgStyles = parseCssString(accordianData.mediaCss);

  return (
    <div className={`bg-bgLight pt-8  px-8 ${accordianData.isFullWidth ? 'pb-24' : 'pb-8'}`} style={{ 'background': `${!accordianData.isFullWidth ? 'transparent' : accordianData.bgColor}` }}>
      <div className={` mx-auto ${!accordianData.isFullWidth ? 'container rounded-[20px] py-14' : ''}`} style={{ 'background': `${accordianData.isFullWidth ? 'transparent' : accordianData.bgColor}` }}>
        <div className={`md:flex  gap-x-20 `} style={{ 'flexDirection': accordianData.isRightMedia ? 'row-reverse' : 'row' }}>
          <div className="basis-1/2 relative">
            <img className=" hidden md:block" style={imgStyles} src={baseUrl + accordianData.sectionImage.data.attributes.url} alt="" />
            <img src={baseUrl + accordianData.backDrop?.data?.attributes.url} alt="" className="absolute" />
          </div>
          <div className="max-w-[580px]" style={accordianData.isRightMedia ? { paddingLeft: '50px' } : { paddingRight: '50px' }}>
            <h2 className="text-3xl md:text-5xl  font-semibold mb-5 leading-[1.2]" style={{ 'color': `${accordianData.textColor && accordianData.textColor}` }}>{accordianData.sectionTitle}</h2>
            <p className="text-lg max-w-[400px] font-light" style={{ 'color': `${accordianData.textColor && accordianData.textColor}` }}>{accordianData.sectionDescription}</p>
            <img className="block md:hidden my-5" src={baseUrl + accordianData.sectionImage.data.attributes.url} alt="" />
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