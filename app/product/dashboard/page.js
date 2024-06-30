import getData from "@/components/api/useFetch";
import Hero from "@/components/blocks/hero";
import ProductItem from "@/components/blocks/productItem";
import TeustedLogos from "@/components/common/trustedCompaniesLayout";

const ProductDashboard = async () => {

  const productDashboardUrl = 'http://localhost:1337/api/products/?populate[blocks][populate][0]=backDrop,image,cta'

  const data = await getData(productDashboardUrl)

  const heroData = data.data[0].attributes.blocks[0]


  return (
    <div>
      <Hero data={heroData} />
      <TeustedLogos />
      <ProductItem />
    </div>
  );
}

export default ProductDashboard;