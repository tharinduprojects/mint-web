'use client'

import Image from "next/image";
import Button from "../elements/button";
import { API_BASE_URL } from "../utils/constants";
import { CheckCircleFilled } from "@ant-design/icons";

const ProductItem = ({ data: productData = {} }) => {

  const {
    isFullWidth = false,
    bgColor = '',
    leftMedia = false,
    title = '',
    description = '',
    feature = [],
    cta = {},
    media = {},
  } = productData;


  return (
    <div className={`${isFullWidth ? `pt-5 bg-[${bgColor}]` : 'bg-bgLight py-5'}`}>
      <div className='container'>
        <div
          className={`md:flex ${!isFullWidth ? 'rounded-[20px]' : ''} pt-10`}
          style={{
            background: bgColor || 'transparent',
            flexDirection: leftMedia ? 'row-reverse' : 'row',
          }}
        >
          <div className="basis-1/2 p-11">
            <h2 className="text-5xl font-semibold pb-5">{title}</h2>
            <p className="text-lg font-light">{description}</p>
            <ul className="mt-10">
              {feature?.map((item, i) => (
                <li key={item?.id || i} className="mb-6">
                  <span className="mr-3 text-green-500 font-light">
                    <CheckCircleFilled />
                  </span>
                  {item?.listItem || ''}
                </li>
              ))}
            </ul>
            {cta?.title && <Button className="mt-10 inline-block" cta={cta} />}
          </div>
          <div
            className="basis-1/2 flex"
            style={{ justifyContent: leftMedia ? 'flex-start' : 'flex-end' }}
          >
            {/* Render image only if media data exists */}
            {media?.data?.attributes?.url && (
              <Image
                src={media.data.attributes.url}
                alt="product"
                width={500}
                height={500}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
