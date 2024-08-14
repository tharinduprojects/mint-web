import getData from "../api/useFetch";
import TrustedCompanies from "../blocks/trustedCompanies";

const TeustedLogos = async () => {

  const trustedCompUrl = 'https://joyful-egg-6af1fd8511.strapiapp.com/api/trusted-common-logo?populate[trustedCompanies][populate]=*'

  const data = await getData(trustedCompUrl)

  return (
    <TrustedCompanies data={data.data.attributes.trustedCompanies} />
  );
}

export default TeustedLogos;