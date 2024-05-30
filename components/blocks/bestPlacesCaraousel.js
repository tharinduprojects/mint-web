'use client'

import { Carousel } from "antd";
import Image from "next/image";
import { API_BASE_URL } from "../utils/constants";

const BestPlacesCaraousel = ({ data: bestPlaceData }) => {

  // console.log('bestPlaceData', bestPlaceData);
  return (
    <div className="py-20 relative">
      <Image fill className="w-full h-full" src={API_BASE_URL + bestPlaceData.backDrop?.data.attributes.url} alt="" />
      <div className="container">
        <div className="mb-24 text-center">
          <h2 className="text-5xl font-semibold mb-5">{bestPlaceData?.heading}</h2>
          <p className="text-lg font-light">{bestPlaceData.description}</p>
        </div>
        <div className="my-10 best-place-caraousel rounded-[20px]">
          <Carousel effect="fade" arrows infinite={false} className="">
            {
              bestPlaceData.sliderItem?.map((item, i) => (
                <div className=" rounded-[20px] overflow-hidden" key={i}>
                  <div className="flex flex-row min-h-[410px] ">
                    <div className="basis-[40%]">
                      <img width={300} height={300} className="h-full w-full max-h-[410px] object-cover" src={API_BASE_URL + item.image?.data.attributes.url} alt="" />
                    </div>
                    <div className="basis-[60%] px-[70px] py-14  bg-white flex flex-col justify-center items-baseline">
                      <p className="text-lg font-light leading-[2.2]">{item.sliderDescription}</p>
                      <div className="mt-10 flex">
                        <Image width={60} height={60} src={API_BASE_URL + item.clientImage.data.attributes.url} alt="" />
                        <div className="ml-5">
                          <h3 className="text-lg font-medium">{item.clientName}</h3>
                          <p className="text-sm font-light text-[#B6C7D6]">{item.clientCompany}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            }

          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default BestPlacesCaraousel;