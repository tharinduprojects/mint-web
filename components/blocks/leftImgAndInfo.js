'use client'

const LeftImgAndInfo = ({ data: sectionData }) => {

  return (
    <div style={{ 'background': `${sectionData.bgColor}` }} className="py-9 px-8 md:px-0">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center">
          <div>
            <img src={sectionData.leftMedia.data.attributes.url} alt="" />
          </div>
          <div className="py-4">
            <h2 className="text-3xl md:text-5xl font-semibold mb-8 max-w-[500px] leading-[1.2]">{sectionData.heading}</h2>
            <p className="max-w-[580px] text-lg leading-[1.5] font-light">{sectionData.descripion}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftImgAndInfo;