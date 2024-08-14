import getData from "../api/useFetch";
import BestPlacesCaraousel from "../blocks/bestPlacesCaraousel";

const BestPlaceToWorkCaraousel = async () => {

  const bestPlaceData = 'https://joyful-egg-6af1fd8511.strapiapp.com/api/best-place-to-work-caraousel?populate[bestPlaceCaraousel][populate][sliderItem][populate]=image,clientImage,backDrop&populate[bestPlaceCaraousel][populate]=backDrop'

  const data = await getData(bestPlaceData)
  return (
    <BestPlacesCaraousel data={data.data.attributes.bestPlaceCaraousel} />
  );
}

export default BestPlaceToWorkCaraousel;