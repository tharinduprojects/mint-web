import getData from "./useFetch";
import axios from "axios";

const getNavItems = async () => {
  const url = process.env.NEXT_PUBLIC_BASE_URL + "/api/navigation-menu?populate[nav][populate]=*";
  const data = await axios.get(url);
  return data.data;
};

export default getNavItems;
