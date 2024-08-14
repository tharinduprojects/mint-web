import getData from "@/components/api/useFetch";
import Hero from "@/components/blocks/hero";
import ProductItem from "@/components/blocks/productItem";
import DemoWithNewsletter from "@/components/common/demoWithNewsletter";
import TeustedLogos from "@/components/common/trustedCompaniesLayout";

const KioskEmpowerment = async () => {
  const productDashboardUrl = 'https://joyful-egg-6af1fd8511.strapiapp.com/api/products/?populate[blocks][populate][0]=backDrop,image,cta,feature,media,sectionImage'

  const data = await getData(productDashboardUrl)

  const heroData = data.data[4].attributes.blocks[0]
  const productS1 = data.data[4].attributes.blocks[1]
  const productS2 = data.data[4].attributes.blocks[2]
  const productS3 = data.data[4].attributes.blocks[3]
  const productS4 = data.data[4].attributes.blocks[4]
  const productS5 = data.data[4].attributes.blocks[5]
  const productS6 = data.data[4].attributes.blocks[6]


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