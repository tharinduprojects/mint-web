import getData from "../api/useFetch";
import TrustedCompanies from "../blocks/trustedCompanies";

const TeustedLogos = async () => {

  const trustedCompUrl = 'http://localhost:1337/api/trusted-common-logo?populate[trustedCompanies][populate]=*'

  const data = await getData(trustedCompUrl)

  return (
    <TrustedCompanies data={data.data.attributes.trustedCompanies} />
  );
}

export default TeustedLogos;