
import Image from "next/image";
import Hero from "@/components/blocks/hero";
import TrustedCompanies from "@/components/blocks/trustedCompanies";
import ImageWithAccordian from "@/components/blocks/imageWithAccordian";
import useFetch from "@/components/api/useFetch";
import getData from "@/components/api/useFetch";
import CtaSection from "@/components/blocks/ctaSection";
import TabsWithInfo from "@/components/blocks/tabsWithInfo";

export default async function Home() {
  const data = await getData()
  console.log('FE data', data);

  const heroData = data.data[0].attributes.Blocks[0]
  const trustedData = data.data[0].attributes.Blocks[1]
  const focusData = data.data[0].attributes.Blocks[2]
  const workCtaData = data.data[0].attributes.Blocks[3]
  const tabInfoData = data.data[0].attributes.Blocks[4]
  return (
    <main>
      <Hero data={heroData} />
      <TrustedCompanies data={trustedData} />
      <ImageWithAccordian data={focusData} />
      <CtaSection data={workCtaData} />
      <TabsWithInfo data={tabInfoData} />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </main>
  );
}
