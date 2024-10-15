import getData from "../api/useFetch";
import TrustedCompanies from "../blocks/trustedCompanies";
import { API_BASE_URL } from "../utils/constants";

const TeustedLogos = async () => {

  const trustedCompUrl = API_BASE_URL + '/api/trusted-common-logo?populate[trustedCompanies][populate]=*'

  const data = await getData(trustedCompUrl)

  return (
    <TrustedCompanies data={data.data.attributes.trustedCompanies} />
  );
}

export default TeustedLogos;