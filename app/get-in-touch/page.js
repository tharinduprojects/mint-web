import getData from "@/components/api/useFetch";
import Hero from "@/components/blocks/hero";
import WeLikeToHere from "@/components/blocks/weLoveToHere";
import BestPlaceToWorkCaraousel from "@/components/common/bestPlaceToWorkcaraousel";
import DemoWithNewsletter from "@/components/common/demoWithNewsletter";
import TestFetchData from "@/components/testFetchData";
import { API_BASE_URL } from "@/components/utils/constants";
import ContactOurSalesPopup from "./contactOurSalesPopup";
import TetsImport from "./testImport";
import GetInTouchHero from "./getInTouchHero";

const GetInTouch = async () => {
  const GetInTouchUrl = API_BASE_URL + '/api/get-in-touches/2?populate[Bloks][populate][backDrop]=true&populate[Bloks][populate][cta]=true&populate[Bloks][populate][image][fields][0]=name&populate[Bloks][populate][image][fields][1]=url&populate[Bloks][populate][image][fields][2]=alternativeText&populate[Bloks][populate][contactRow][populate][item][populate][icon][fields][0]=name&populate[Bloks][populate][contactRow][populate][item][populate][icon][fields][1]=url&populate[Bloks][populate][contactRow][populate][item][populate][icon][fields][2]=alternativeText&populate[Bloks][populate][contactRow][populate][item][populate][socialItem][populate][iconImage]=true'
  const data = await getData(GetInTouchUrl)
  const heroData = data.data.attributes.Bloks[0]
  const weLikeToHereData = data.data.attributes.Bloks[1]




  return (
    <div>
      <GetInTouchHero data={heroData} />
      <WeLikeToHere data={weLikeToHereData} />
      <BestPlaceToWorkCaraousel />
      <DemoWithNewsletter />
    </div>
  );
}

export default GetInTouch;