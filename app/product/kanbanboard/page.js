import getData from "@/components/api/useFetch";
import Hero from "@/components/blocks/hero";
import ProductItem from "@/components/blocks/productItem";
import ProductItemCentered from "@/components/blocks/productItemCentered";
import BestPlaceToWorkCaraousel from "@/components/common/bestPlaceToWorkcaraousel";
import DemoWithNewsletter from "@/components/common/demoWithNewsletter";
import TeustedLogos from "@/components/common/trustedCompaniesLayout";

const Kanbanboard = async () => {

  const recruitmentData = 'http://localhost:1337/api/products/?populate[blocks][populate][0]=backDrop,image,cta,feature,media,sectionImage,accordianItem,backdrop'

  const data = await getData(recruitmentData)

  const heroData = data.data[7].attributes.blocks[0]
  const productS1 = data.data[7].attributes.blocks[1]
  const productS2 = data.data[7].attributes.blocks[2]


  return (
    <div>
      <Hero data={heroData} />
      <TeustedLogos />
      <ProductItemCentered data={productS1} />
      <ProductItem data={productS2} />
      <div className="py-9 bg-bgLight"></div>
      <BestPlaceToWorkCaraousel />
      <DemoWithNewsletter />
    </div>
  );
}

export default Kanbanboard;