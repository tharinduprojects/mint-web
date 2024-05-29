'use client'

const LeftImgAndInfo = ({ data: sectionData }) => {

  // console.log('section data', sectionData);
  const baseUrl = process.env.BASE_URL || 'http://localhost:1337'

  return (
    <div style={{ 'background': `${sectionData.bgColor}` }} className="py-9">
      <div className="container">
        <div className="grid grid-cols-2 items-center">
          <div>
            <img src={baseUrl + sectionData.leftMedia.data.attributes.url} alt="" />
          </div>
          <div className="py-4">
            <h2 className="text-5xl font-semibold mb-8 max-w-[500px] leading-[1.2]">{sectionData.heading}</h2>
            <p className="max-w-[580px] text-lg leading-[1.5] font-light">{sectionData.descripion}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftImgAndInfo;