import axios from "axios";

const getData = async (url) => {

  try {
    const response = await axios.get(url);
    // console.log('response.data', response.data.data);


    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    // You can handle errors here according to your application's needs
    throw error;
  }
}

export default getData;
