import { API_BASE_URL } from "../utils/constants";
import getData from "./useFetch";

const getNavItems = async () => {
  const url = API_BASE_URL + '/api/navigation-menu?populate[nav][populate]=*'
  const data = await getData(url)
  return data;
  console.log('nav data', data);

}

export default getNavItems;