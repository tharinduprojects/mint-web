'use client'

import Image from "next/image";
import { API_BASE_URL } from "../utils/constants";

const FooterLayot = ({ data: footerData }) => {

  return (
    <div className="py-16 px-8 md:px-0 bg-[#DCF0FF]">
      <div className="container">
        <div className="md:flex">
          <div className="basis-1/2 mb-16">
            <Image width={172} height={35} className=" object-contain" src={API_BASE_URL + footerData.data.attributes.mintFooter.footerLogo.data.attributes.url} alt="" />
            <p className="text-sm font-normal mt-5">{footerData.data.attributes.mintFooter.footerDescription}</p>
          </div>
          <div className="basis-1/2">
            <div className="flex gap-10 md:justify-end ">

              {
                footerData.data.attributes.mintFooter.footerMenuCol.map((item, i) => (
                  <div key={i} className="">
                    <h5 className="mb-10 text-base font-medium">{item.menuTitle}</h5>
                    <ul>
                      {
                        item.menuItem.map((item, i) => (
                          <li key={i} className="text-sm font-normal mb-4">{item.title}</li>
                        ))
                      }
                    </ul>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
        <div className="mt-24 md flex justify-between">
          <span className="text-xs font-light">{footerData.data.attributes.copyrightText}</span>
          <div className="flex">
            <ul className="list-none flex gap-3">
              {
                footerData.data.attributes.mintFooter.socialMedia.map((item, i) => (
                  <li><Image width={20} height={20} src={API_BASE_URL + item.iconImage.data.attributes.url} alt="" /> </li>
                ))
              }
            </ul>
          </div>
        </div>
      </div>

    </div>);
}

export default FooterLayot;