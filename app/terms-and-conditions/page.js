import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import TermsAndConditionsContent from "./pageContent";

async function getData() {
  const response = await fetch('http://localhost:1337/api/terms-and-conditions');
  const data = await response.json();
  return data;
}

const TermsAndConditions = async () => {
  const { data } = await getData();
  const content = data[0].attributes.contentRichBlocks;
  return (
    <TermsAndConditionsContent content={content} />

  );
}

export default TermsAndConditions;