
import Image from "next/image";
import Hero from "@/components/blocks/hero";
import TrustedCompanies from "@/components/blocks/trustedCompanies";
import ImageWithAccordian from "@/components/blocks/imageWithAccordian";
import useFetch from "@/components/api/useFetch";
import getData from "@/components/api/useFetch";
import CtaSection from "@/components/blocks/ctaSection";
import TabsWithInfo from "@/components/blocks/tabsWithInfo";
import LeftImgAndInfo from "@/components/blocks/leftImgAndInfo";
import BestPlacesCaraousel from "@/components/blocks/bestPlacesCaraousel";
import ScheduleDemo from "@/components/blocks/sheduleDemo";
import NewsletterSubscribe from "@/components/blocks/newsletterSubscribe";
import DemoWithNewsletter from "@/components/common/demoWithNewsletter";
import TeustedLogos from "@/components/common/trustedCompaniesLayout";

export default async function Home() {
  const homeUrl = 'https://joyful-egg-6af1fd8511.strapiapp.com/api/landing-pages/?populate[metaData][populate]=*&populate[Blocks][populate][cta][populate]=*&populate[Blocks][populate][buttonLink][populate]=*&populate[Blocks][populate][logo][populate]=*&populate[Blocks][populate][tabItem][populate]=*&populate[Blocks][populate][sectionImage][populate]=*&populate[Blocks][populate][accordianItem][populate]=*&populate[Blocks][populate][image][populate]=*&populate[Blocks][populate][backgroundImage][populate]=*&populate[Blocks][populate][backDrop][populate]=*&populate[Blocks][populate][leftMedia][populate]=*&populate[Blocks][populate][sliderItem][populate]=*&populate[Blocks][populate][demoForm][populate]=*&populate[Blocks][populate][sectionBackdrop][populate]=*&populate[Blocks][populate][formButton][populate]=*'

  const data = await getData(homeUrl)
  // console.log('FE data', data);

  const heroData = data.data[0].attributes.Blocks[0]
  const focusData = data.data[0].attributes.Blocks[2]
  const workCtaData = data.data[0].attributes.Blocks[3]
  const tabInfoData = data.data[0].attributes.Blocks[4]
  const workTogetherdata = data.data[0].attributes.Blocks[5]
  const transformData = data.data[0].attributes.Blocks[6]
  const bestPlaceData = data.data[0].attributes.Blocks[7]

  return (
    <main>
      <Hero data={heroData} />
      <TeustedLogos />
      <ImageWithAccordian data={focusData} />
      <CtaSection data={workCtaData} />
      <TabsWithInfo data={tabInfoData} />
      <CtaSection data={workTogetherdata} />
      <LeftImgAndInfo data={transformData} />
      <BestPlacesCaraousel data={bestPlaceData} />
      <DemoWithNewsletter />
    </main>
  );
}
