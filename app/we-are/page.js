import getData from "@/components/api/useFetch";
import CenteredTextDescBgImg from "@/components/blocks/centeredTextDescBgImg";
import HeroWeAre from "@/components/blocks/heroWeAre";
import MintHrmNumbers from "@/components/blocks/mintNumbers";
import OurKeyClients from "@/components/blocks/ourKeyClients";
import DemoWithNewsletter from "@/components/common/demoWithNewsletter";

const WeAre = async () => {

  const weAreUrl = 'https://joyful-egg-6af1fd8511.strapiapp.com/api/we-ares/?populate[Blocks][populate][0]=backDrop&populate[Blocks][populate][1]=bgImage&populate[Blocks][populate][2]=logos&populate[Blocks][populate][3]=mintNumbers'

  const data = await getData(weAreUrl)

  const heroWeAreData = data.data[0].attributes.Blocks[1]
  const centeredData = data.data[0].attributes.Blocks[2]
  const keyClientData = data.data[0].attributes.Blocks[3]
  const ourResellersData = data.data[0].attributes.Blocks[4]
  const ourPartnerData = data.data[0].attributes.Blocks[5]
  const ourAchivementsData = data.data[0].attributes.Blocks[6]
  const mintHrmNumbersData = data.data[0].attributes.Blocks[8]

  return (
    <div>
      <HeroWeAre data={heroWeAreData} />
      {/* <CenteredTextDescBgImg data={centeredData} /> */}
      <MintHrmNumbers data={mintHrmNumbersData} />
      <OurKeyClients data={keyClientData} />
      <OurKeyClients data={ourResellersData} />
      <OurKeyClients data={ourPartnerData} />
      <OurKeyClients data={ourAchivementsData} />
      {/* <DemoWithNewsletter /> */}
    </div>
  );
}

export default WeAre;