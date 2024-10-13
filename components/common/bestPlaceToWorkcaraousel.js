import getData from "../api/useFetch";
import BestPlacesCaraousel from "../blocks/bestPlacesCaraousel";
import { API_BASE_URL } from "../utils/constants";

const BestPlaceToWorkCaraousel = async () => {

  const bestPlaceData = API_BASE_URL + '/api/best-place-to-work-caraousel?populate[bestPlaceCaraousel][populate][sliderItem][populate]=image,clientImage,backDrop&populate[bestPlaceCaraousel][populate]=backDrop'

  const data = await getData(bestPlaceData)
  return (
    <BestPlacesCaraousel data={data.data.attributes.bestPlaceCaraousel} />
  );
}

export default BestPlaceToWorkCaraousel;