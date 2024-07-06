import getData from "@/components/api/useFetch";
import Hero from "@/components/blocks/hero";
import ProductItem from "@/components/blocks/productItem";
import DemoWithNewsletter from "@/components/common/demoWithNewsletter";
import TeustedLogos from "@/components/common/trustedCompaniesLayout";

const ProductDashboard = async () => {

  const productDashboardUrl = 'http://localhost:1337/api/products/?populate[blocks][populate][0]=backDrop,image,cta,feature,media'

  const data = await getData(productDashboardUrl)

  const heroData = data.data[0].attributes.blocks[0]
  const productS1 = data.data[0].attributes.blocks[1]
  const productS2 = data.data[0].attributes.blocks[2]
  const productS3 = data.data[0].attributes.blocks[3]


  return (
    <div>
      <Hero data={heroData} />
      <TeustedLogos />
      <ProductItem data={productS1} />
      <ProductItem data={productS2} />
      <ProductItem data={productS3} />
      <div className="py-10 bg-bgLight"></div>
      <DemoWithNewsletter />
    </div>
  );
}

export default ProductDashboard;