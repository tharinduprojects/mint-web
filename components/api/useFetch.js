import axios from "axios";

const getData = async () => {
  try {
    const response = await axios.get('http://localhost:1337/api/landing-pages/?populate[metaData][populate]=*&populate[Blocks][populate]=*');
    // console.log('response.data', response.data.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    // You can handle errors here according to your application's needs
    throw error;
  }
}

export default getData;
