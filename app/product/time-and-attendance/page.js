import getData from "@/components/api/useFetch";
import Hero from "@/components/blocks/hero";
import ImageWithAccordian from "@/components/blocks/imageWithAccordian";
import ProductItem from "@/components/blocks/productItem";
import ProductItemCentered from "@/components/blocks/productItemCentered";
import BestPlaceToWorkCaraousel from "@/components/common/bestPlaceToWorkcaraousel";
import DemoWithNewsletter from "@/components/common/demoWithNewsletter";
import TeustedLogos from "@/components/common/trustedCompaniesLayout";

const TimeAndAttendance = async () => {

  const productTimeAndAttandance = 'http://localhost:1337/api/products/?populate[blocks][populate][0]=backDrop,image,cta,feature,media,sectionImage,accordianItem'

  const data = await getData(productTimeAndAttandance)

  const heroData = data.data[5].attributes.blocks[0]
  const productS1 = data.data[5].attributes.blocks[1]
  const productS2 = data.data[5].attributes.blocks[2]
  const productS3 = data.data[5].attributes.blocks[3]

  console.log('productS2', productS2);
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