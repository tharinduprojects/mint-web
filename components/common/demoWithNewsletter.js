import getData from "../api/useFetch";
import NewsletterSubscribe from "../blocks/newsletterSubscribe";
import ScheduleDemo from "../blocks/sheduleDemo";
import { API_BASE_URL } from "../utils/constants";

const DemoWithNewsletter = async () => {

  const blockData = API_BASE_URL + '/api/demo-and-newsletter?populate[demo][populate][demoForm][populate]=formButton&populate[demo][populate][demoForm][populate]=formBackDrop&populate[newsLetter][populate]=formButton,sectionBackdrop'

  const data = await getData(blockData)

  return (
    <>
      <ScheduleDemo data={data.data.attributes.demo} />
      <NewsletterSubscribe data={data.data.attributes.newsLetter} />
    </>
  );
}

export default DemoWithNewsletter;