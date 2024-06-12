import getData from "@/components/api/useFetch";
import CenteredTextDescBgImg from "@/components/blocks/centeredTextDescBgImg";

const WeAre = async () => {

  const weAreUrl = 'http://localhost:1337/api/we-ares/?populate[Blocks][populate][0]=backDrop&populate[Blocks][populate][1]=image'

  const data = await getData(weAreUrl)

  const centeredData = data.data[0].attributes.Blocks[1]
  return (
    <div>
      <CenteredTextDescBgImg data={centeredData} />
    </div>
  );
}

export default WeAre;