import getData from "@/components/api/useFetch";
import Hero from "@/components/blocks/hero";
import ProductItem from "@/components/blocks/productItem";
import BestPlaceToWorkCaraousel from "@/components/common/bestPlaceToWorkcaraousel";
import DemoWithNewsletter from "@/components/common/demoWithNewsletter";
import TeustedLogos from "@/components/common/trustedCompaniesLayout";
import { API_BASE_URL } from "@/components/utils/constants";

const ProductPayroll = async () => {


  const payrollData = API_BASE_URL + '/api/products/16?populate[blocks][populate][0]=backDrop,image,cta,feature,media,sectionImage,accordianItem,backdrop'


  const data = await getData(payrollData)

  const heroData = data.data.attributes.blocks[0]
  const productS1 = data.data.attributes.blocks[1]
  const productS2 = data.data.attributes.blocks[2]
  const productS3 = data.data.attributes.blocks[3]
  const productS4 = data.data.attributes.blocks[4]

  return (
    <div>
      <Hero data={heroData} />
      <TeustedLogos />
      <ProductItem data={productS1} />
      <ProductItem data={productS2} />
      <ProductItem data={productS3} />
      <ProductItem data={productS4} />
      <BestPlaceToWorkCaraousel />
      <DemoWithNewsletter />
    </div>
  );
}

export default ProductPayroll;