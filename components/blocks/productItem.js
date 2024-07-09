'use client'

import Image from "next/image";
import Button from "../elements/button";
import { API_BASE_URL } from "../utils/constants";
import { CheckCircleFilled } from "@ant-design/icons";

const ProductItem = ({ data: productData }) => {

  console.log('productData', productData);



  return (
    <div className={` ${productData.isFullWidth ? `pt-5 bg-[${productData.bgColor}]` : 'bg-bgLight py-5'}`}>
      <div className='container'>
        <div className={`md:flex ${!productData.isFullWidth ? 'rounded-[20px] ' : ''} pt-10`} style={{ 'background': `${productData.bgColor}; flex-direction: ${productData.leftMedia ? 'row-reverse' : 'row'}` }}>
          <div className="basis-1/2 p-11">
            <h2 className="text-5xl font-semibold pb-5">{productData.title}</h2>
            <p className="text-lg font-light">{productData.description}</p>
            <ul className="mt-10">
              {
                productData.feature?.map((item, i) => (
                  <li key={item.id} className="mb-6"><span className="mr-3 text-green-500 font-light"><CheckCircleFilled /></span>{item.listItem}</li>
                ))
              }
            </ul>
            {
              productData.cta?.title && <Button className="mt-10 inline-block" cta={productData.cta} />
            }
          </div>
          <div className="basis-1/2 flex" style={{ justifyContent: !productData.leftMedia ? 'flex-end' : '' }}>

            <Image src={API_BASE_URL + productData.media.data.attributes.url} alt="product" width={500} height={500} />
          </div>
        </div>
      </div>
    </div>

  );
}

export default ProductItem;