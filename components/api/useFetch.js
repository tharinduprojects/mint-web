import axios from "axios";

const getData = async (url) => {

  try {
    const response = await axios.get(url);
    console.log('response', response);
    
    return response.data;
  } catch (error) {
    console.log('Path showwww', url);
    
    console.error('Error fetching data:', error);
    throw error;
  }
}

export default getData;
