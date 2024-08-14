import getData from "../api/useFetch";
import FooterLayot from "./footerLayout";

const Footer = async () => {

  const footerUrl = 'https://joyful-egg-6af1fd8511.strapiapp.com/api/footer/?populate[mintFooter][populate][0]=footerLogo&populate[mintFooter][populate][1]=footerDescription&populate[mintFooter][populate][2]=footerMenuCol.menuItem&populate[mintFooter][populate][3]=socialMedia.iconImage'

  const data = await getData(footerUrl)

  return (
    <FooterLayot data={data} />
  );
}

export default Footer;