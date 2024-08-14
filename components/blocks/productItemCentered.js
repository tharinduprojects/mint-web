import Image from "next/image";
import Button from "../elements/button";
import { API_BASE_URL } from "../utils/constants";

const ProductItemCentered = ({ data: productData }) => {

  console.log('productData', productData);

  return (
    <div className={` ${productData.isFullWidth ? `py-24 bg-[${productData.bgColor}]` : 'bg-bgLight py-5'} relative `}>
      <div className='container'>
        <div className={`text-center relative ${!productData.isFullWidth ? 'rounded-[20px] pb-14 pt-24' : ''} `} style={{ 'background': `${productData.bgColor}; flex-direction: ${productData.leftMedia ? 'row-reverse' : 'row'}` }}>
          <h2 className="text-6xl font-semibold max-w-[690px] mb-5 mx-auto" style={productData.textColor ? { 'color': `${productData.textColor}` } : {}}>{productData.heading}</h2>
          <p className="text-xl font-normal max-w-[700px] mx-auto" style={productData.textColor ? { 'color': `${productData.textColor}` } : {}}>{productData.description}</p>
          {
            productData.cta && <Button className="mt-10 inline-block" cta={productData.cta} />
          }
          {
            productData.media.data && <Image quality={100} src={productData.media.data.attributes.url} className="mt-24 relative z-10" alt="product" width={500} height={500} style={{ 'width': '100%', 'objectFit': 'contain' }} />
          }
          {
            productData.backdrop?.data && <Image quality={100} src={productData.backdrop?.data?.attributes.url} className="mt-24 " alt="product" width={500} height={500} style={{ 'width': '100%', 'objectFit': 'contain', 'position': 'absolute', 'bottom': '0' }} />
          }

        </div>
      </div>
    </div>
  );
}

export default ProductItemCentered;