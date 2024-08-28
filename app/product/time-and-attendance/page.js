import getData from "@/components/api/useFetch";
import Hero from "@/components/blocks/hero";
import ImageWithAccordian from "@/components/blocks/imageWithAccordian";
import ProductItem from "@/components/blocks/productItem";
import ProductItemCentered from "@/components/blocks/productItemCentered";
import BestPlaceToWorkCaraousel from "@/components/common/bestPlaceToWorkcaraousel";
import DemoWithNewsletter from "@/components/common/demoWithNewsletter";
import TeustedLogos from "@/components/common/trustedCompaniesLayout";
import { API_BASE_URL } from "@/components/utils/constants";

const TimeAndAttendance = async () => {


  const productTimeAndAttandance = API_BASE_URL + '/api/products/15?populate[blocks][populate][0]=backDrop,image,cta,feature,media,sectionImage,accordianItem,backdrop'

  const data = await getData(productTimeAndAttandance)

  const heroData = data.data.attributes.blocks[0]
  const productS1 = data.data.attributes.blocks[1]
  const productS2 = data.data.attributes.blocks[2]
  const productS3 = data.data.attributes.blocks[3]

  return (
    <div>
      <Hero data={heroData} />
      <TeustedLogos />
      <ProductItemCentered data={productS1} />
      <div className="py-14 bg-bgLight"></div>
      <ImageWithAccordian data={productS2} />
      <ProductItem data={productS3} />
      <div className="py-9 bg-bgLight"></div>
      <BestPlaceToWorkCaraousel />
      <DemoWithNewsletter />
    </div>
  );
}

export default TimeAndAttendance;