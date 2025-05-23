import getData from "../api/useFetch";
import { API_BASE_URL } from "../utils/constants";
import FooterLayot from "./footerLayout";

const Footer = async () => {

  const footerUrl = API_BASE_URL + '/api/footer/?populate[mintFooter][populate][0]=footerLogo&populate[mintFooter][populate][1]=footerDescription&populate[mintFooter][populate][2]=footerMenuCol.menuItem&populate[mintFooter][populate][3]=socialMedia.iconImage'

  const data = await getData(footerUrl)

  return (
    <FooterLayot data={footerUrl} />
  );
}

export default Footer;