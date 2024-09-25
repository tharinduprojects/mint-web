import getData from "@/components/api/useFetch";
import Hero from "@/components/blocks/hero";
import ProductItem from "@/components/blocks/productItem";
import DemoWithNewsletter from "@/components/common/demoWithNewsletter";
import TeustedLogos from "@/components/common/trustedCompaniesLayout";
import { API_BASE_URL } from "@/components/utils/constants";

const KioskEmpowerment = async () => {

  const kisoskEmpowermentData = API_BASE_URL + '/api/products/36?populate[blocks][populate][0]=backDrop,image,cta,feature,media,sectionImage,accordianItem,backdrop'


  const data = await getData(kisoskEmpowermentData)

  const heroData = data.data.attributes.blocks[0]
  const productS1 = data.data.attributes.blocks[1]
  const productS2 = data.data.attributes.blocks[2]
  const productS3 = data.data.attributes.blocks[3]
  const productS4 = data.data.attributes.blocks[4]
  const productS5 = data.data.attributes.blocks[5]
  const productS6 = data.data.attributes.blocks[6]


  return (
    <>
      <Hero data={heroData} />
      <TeustedLogos />
      <ProductItem data={productS1} />
      <ProductItem data={productS2} />
      <ProductItem data={productS3} />
      <ProductItem data={productS4} />
      <ProductItem data={productS5} />
      <ProductItem data={productS6} />
      <div className="bg-bgLight py-5"></div>
      <DemoWithNewsletter />
    </>
  );
}

export default KioskEmpowerment;