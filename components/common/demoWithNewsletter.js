import getData from "../api/useFetch";
import NewsletterSubscribe from "../blocks/newsletterSubscribe";
import ScheduleDemo from "../blocks/sheduleDemo";

const DemoWithNewsletter = async () => {

  const blockData = 'http://localhost:1337/api/demo-and-newsletter?populate[demo][populate][demoForm][populate]=formButton&populate[demo][populate][demoForm][populate]=formBackDrop&populate[newsLetter][populate]=formButton,sectionBackdrop'

  const data = await getData(blockData)

  return (
    <>
      <ScheduleDemo data={data.data.attributes.demo} />
      <NewsletterSubscribe data={data.data.attributes.newsLetter} />
    </>
  );
}

export default DemoWithNewsletter;