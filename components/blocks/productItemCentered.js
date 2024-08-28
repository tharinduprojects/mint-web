
import Image from "next/image";
import Button from "../elements/button";
import { API_BASE_URL } from "../utils/constants";

const ProductItemCentered = ({ data: productData = {} }) => {

  const {
    isFullWidth = false,
    bgColor = 'transparent',
    leftMedia = false,
    textColor = '',
    heading = '',
    description = '',
    cta = null,
    media = {},
    backdrop = {}
  } = productData;


  return (
    <div className={` ${isFullWidth ? `py-24 bg-[${bgColor}]` : 'bg-bgLight py-5'} relative `}>
      <div className='container'>
        <div className={`text-center relative ${!isFullWidth ? 'rounded-[20px] pb-14 pt-24' : ''} `}
          style={{ background: bgColor, flexDirection: leftMedia ? 'row-reverse' : 'row' }}>
          <h2 className="text-3xl md:text-6xl font-semibold max-w-[690px] mb-5 mx-auto"
            style={textColor ? { color: textColor } : {}}>
            {heading}
          </h2>
          <p className="text-lg md:text-xl font-normal max-w-[700px] mx-auto"
            style={textColor ? { color: textColor } : {}}>
            {description}
          </p>
          {cta && <Button className="mt-10 inline-block" cta={cta} />}
          {media?.data && (
            <Image
              quality={100}
              src={media.data.attributes.url}
              className="mt-24 relative z-10"
              alt="product"
              width={500}
              height={500}
              style={{ width: '100%', objectFit: 'contain' }}
            />
          )}
          {backdrop?.data && (
            <Image
              quality={100}
              src={backdrop.data.attributes.url}
              className="mt-24"
              alt="product"
              width={500}
              height={500}
              style={{ width: '100%', objectFit: 'contain', position: 'absolute', bottom: '0' }}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductItemCentered;
