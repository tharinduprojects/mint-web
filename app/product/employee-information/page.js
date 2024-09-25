import getData from "@/components/api/useFetch";
import Hero from "@/components/blocks/hero";
import ImageWithAccordian from "@/components/blocks/imageWithAccordian";
import ProductItem from "@/components/blocks/productItem";
import BestPlaceToWorkCaraousel from "@/components/common/bestPlaceToWorkcaraousel";
import DemoWithNewsletter from "@/components/common/demoWithNewsletter";
import TeustedLogos from "@/components/common/trustedCompaniesLayout";
import { API_BASE_URL } from "@/components/utils/constants";

const EmployeeInformation = async () => {


  const productEmployeeInfo = API_BASE_URL + '/api/products/31?populate[blocks][populate][0]=backDrop,image,cta,feature,media,sectionImage,accordianItem,backdrop'


  const data = await getData(productEmployeeInfo)

  const heroData = data.data.attributes.blocks[0]
  const productS1 = data.data.attributes.blocks[1]
  const productS2 = data.data.attributes.blocks[2]
  const productS3 = data.data.attributes.blocks[3]


  return (
    <>
      <Hero data={heroData} />
      <TeustedLogos />
      <ProductItem data={productS1} />
      <ImageWithAccordian data={productS2} />
      <ProductItem data={productS3} />
      <div className="bg-bgLight py-5"></div>
      <BestPlaceToWorkCaraousel />
      <DemoWithNewsletter />
    </>
  );
}

export default EmployeeInformation;