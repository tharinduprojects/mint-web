import getData from "@/components/api/useFetch";
import Hero from "@/components/blocks/hero";
import ProductItem from "@/components/blocks/productItem";
import BestPlaceToWorkCaraousel from "@/components/common/bestPlaceToWorkcaraousel";
import DemoWithNewsletter from "@/components/common/demoWithNewsletter";
import TeustedLogos from "@/components/common/trustedCompaniesLayout";

const ProductPayroll = async () => {

  const ProductPayroll = 'https://joyful-egg-6af1fd8511.strapiapp.com/api/products/?populate[blocks][populate][0]=backDrop,image,cta,feature,media'

  const data = await getData(ProductPayroll)

  const heroData = data.data[2].attributes.blocks[0]
  const productS1 = data.data[2].attributes.blocks[1]
  const productS2 = data.data[2].attributes.blocks[2]
  const productS3 = data.data[2].attributes.blocks[3]
  const productS4 = data.data[2].attributes.blocks[4]

  return (
    <div>
      <Hero data={heroData} />
      <TeustedLogos />
      <ProductItem data={productS1} />
      {/* <ProductItem data={productS2} />
      <ProductItem data={productS3} />
      <ProductItem data={productS4} /> */}
      <BestPlaceToWorkCaraousel />
      <DemoWithNewsletter />
    </div>
  );
}

export default ProductPayroll;