import getData from "@/components/api/useFetch";
import Hero from "@/components/blocks/hero";
import ImageWithAccordian from "@/components/blocks/imageWithAccordian";
import ProductItem from "@/components/blocks/productItem";
import ProductItemCentered from "@/components/blocks/productItemCentered";
import BestPlaceToWorkCaraousel from "@/components/common/bestPlaceToWorkcaraousel";
import TeustedLogos from "@/components/common/trustedCompaniesLayout";

const Recruitment = async () => {

  const recruitmentData = 'http://localhost:1337/api/products/?populate[blocks][populate][0]=backDrop,image,cta,feature,media,sectionImage,accordianItem,backdrop'

  const data = await getData(recruitmentData)

  const heroData = data.data[6].attributes.blocks[0]
  const productS1 = data.data[6].attributes.blocks[1]
  const productS2 = data.data[6].attributes.blocks[2]
  const productS3 = data.data[6].attributes.blocks[3]
  const productS4 = data.data[6].attributes.blocks[4]
  const productS5 = data.data[6].attributes.blocks[5]


  return (
    <div>
      <Hero data={heroData} />
      <TeustedLogos />
      <ProductItemCentered data={productS1} />
      <ProductItem data={productS2} />
      <ProductItem data={productS3} />
      <ProductItem data={productS4} />
      <ImageWithAccordian data={productS5} />
      <BestPlaceToWorkCaraousel />
    </div>
  );
}

export default Recruitment;