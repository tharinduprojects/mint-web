import getData from "@/components/api/useFetch";
import BlockTest from "./blockTest";
import ProductItem from "@/components/blocks/productItem";

const Test = async () => {

  const testData = 'https://joyful-egg-6af1fd8511.strapiapp.com/api/test-collection-with-blocks?populate[blocks][populate]=cta,media,image'

  const data = await getData(testData)

  const blokTestData = data.data[0].attributes.blocks[1]
  const productData = data.data[0].attributes.blocks[0]

  return (
    <div>
      <h1>test</h1>
      <ProductItem data={productData} />
      <BlockTest data={blokTestData} />
    </div>
  );
}

export default Test;