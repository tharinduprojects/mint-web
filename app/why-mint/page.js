import getData from "@/components/api/useFetch";
import CtaSection from "@/components/blocks/ctaSection";
import Hero from "@/components/blocks/hero";
import ProductItem from "@/components/blocks/productItem";
import DemoWithNewsletter from "@/components/common/demoWithNewsletter";
import TeustedLogos from "@/components/common/trustedCompaniesLayout";
import TestFetchData from "@/components/testFetchData";
import { API_BASE_URL } from "@/components/utils/constants";

const WhyMint = async () => {

  const productDashboardUrl = API_BASE_URL + '/api/why-mints/1?populate[blocks][populate]=backgroundImage,buttonLink,image,backDrop,cta'
  const data = await getData(productDashboardUrl)
  const heroData = data.data.attributes.blocks[0]
  const workCtaData = data.data.attributes.blocks[1]
  
  return (
    <div>
      <Hero data={heroData} />
      <CtaSection data={workCtaData} />
      <DemoWithNewsletter />
    </div>
  );
}

export default WhyMint;