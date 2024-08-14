import getData from "@/components/api/useFetch";
import Hero from "@/components/blocks/hero";
import ImageWithAccordian from "@/components/blocks/imageWithAccordian";
import ProductItem from "@/components/blocks/productItem";
import BestPlaceToWorkCaraousel from "@/components/common/bestPlaceToWorkcaraousel";
import DemoWithNewsletter from "@/components/common/demoWithNewsletter";
import TeustedLogos from "@/components/common/trustedCompaniesLayout";

const EmployeeInformation = async () => {

  const productDashboardUrl = 'https://joyful-egg-6af1fd8511.strapiapp.com/api/products/?populate[blocks][populate][0]=backDrop,image,cta,feature,media,sectionImage,accordianItem'

  const data = await getData(productDashboardUrl)

  const heroData = data.data[3].attributes.blocks[0]
  const productS1 = data.data[3].attributes.blocks[1]
  const productS2 = data.data[3].attributes.blocks[2]
  const productS3 = data.data[3].attributes.blocks[3]


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