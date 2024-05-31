
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

export default async function Home() {
  const data = await getData()
  // console.log('FE data', data);

  const heroData = data.data[0].attributes.Blocks[0]
  const trustedData = data.data[0].attributes.Blocks[1]
  const focusData = data.data[0].attributes.Blocks[2]
  const workCtaData = data.data[0].attributes.Blocks[3]
  const tabInfoData = data.data[0].attributes.Blocks[4]
  const workTogetherdata = data.data[0].attributes.Blocks[5]
  const transformData = data.data[0].attributes.Blocks[6]
  const bestPlaceData = data.data[0].attributes.Blocks[7]
  const sheduleDemoData = data.data[0].attributes.Blocks[8]
  const newsLetterData = data.data[0].attributes.Blocks[9]

  return (
    <main>
      <Hero data={heroData} />
      <TrustedCompanies data={trustedData} />
      <ImageWithAccordian data={focusData} />
      <CtaSection data={workCtaData} />
      <TabsWithInfo data={tabInfoData} />
      <CtaSection data={workTogetherdata} />
      <LeftImgAndInfo data={transformData} />
      <BestPlacesCaraousel data={bestPlaceData} />
      <ScheduleDemo data={sheduleDemoData} />
      <NewsletterSubscribe data={newsLetterData} />
    </main>
  );
}
