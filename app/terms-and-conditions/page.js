import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import TermsAndConditionsContent from "./pageContent";
import TermsConditionsHero from "./termsConditionsHero";
import { API_BASE_URL } from "@/components/utils/constants";

async function getData() {
  const response = await fetch(`${API_BASE_URL}/api/terms-and-conditions?populate[heroImage][populate]=*`);
  const data = await response.json();
  return data;
}

const TermsAndConditions = async () => {
  const { data } = await getData();
  const content = data[0].attributes.contentRichBlocks;
  return (
    <>
      <TermsConditionsHero data={data} />
      <TermsAndConditionsContent content={content} />
    </>
  );
}

export default TermsAndConditions;