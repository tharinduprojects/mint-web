import axios from "axios";

const getData = async () => {

  try {
    const response = await axios.get('http://localhost:1337/api/landing-pages/?populate[metaData][populate]=*&populate[Blocks][populate][cta][populate]=*&populate[Blocks][populate][buttonLink][populate]=*&populate[Blocks][populate][logo][populate]=*&populate[Blocks][populate][tabItem][populate]=*&populate[Blocks][populate][sectionImage][populate]=*&populate[Blocks][populate][accordianItem][populate]=*&populate[Blocks][populate][image][populate]=*&populate[Blocks][populate][backgroundImage][populate]=*&populate[Blocks][populate][backDrop][populate]=*&populate[Blocks][populate][leftMedia][populate]=*&populate[Blocks][populate][sliderItem][populate]=*&populate[Blocks][populate][demoForm][populate]=*&populate[Blocks][populate][sectionBackdrop][populate]=*&populate[Blocks][populate][formButton][populate]=*');
    // console.log('response.data', response.data.data);


    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    // You can handle errors here according to your application's needs
    throw error;
  }
}

export default getData;
