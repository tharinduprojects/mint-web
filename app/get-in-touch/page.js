import getData from "@/components/api/useFetch";
import Hero from "@/components/blocks/hero";
import BestPlaceToWorkCaraousel from "@/components/common/bestPlaceToWorkcaraousel";
import DemoWithNewsletter from "@/components/common/demoWithNewsletter";
import TestFetchData from "@/components/testFetchData";
import { API_BASE_URL } from "@/components/utils/constants";

const GetInTouch = async () => {
  const GetInTouchUrl = API_BASE_URL + '/api/get-in-touches/1?populate[Bloks][populate]=*'
  const data = await getData(GetInTouchUrl)
  const heroData = data.data.attributes.Bloks[0]

  return (
    <div>
      {/* <TestFetchData data={data} /> */}
      <Hero data={heroData} />
      <BestPlaceToWorkCaraousel />
      <DemoWithNewsletter />
    </div>
  );
}

export default GetInTouch;