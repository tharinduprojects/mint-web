'use client'

import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { useEffect, useRef, useState } from "react";

const TermsAndConditionsContent = ({ content }) => {

  const tncContentRef = useRef(null);
  const [h2ContentArray, setH2ContentArray] = useState([]);
  const [scHeight, setScHeight] = useState(0);

  useEffect(() => {
    if (tncContentRef.current) {
      const h2Elements = tncContentRef.current.getElementsByTagName('h2');
      const h2Array = Array.from(h2Elements).map((h2, index) => {
        h2.id = `heading-${index + 1}`;
        return h2.textContent.toLowerCase();
      });
      setH2ContentArray(h2Array);
      console.log(h2Array);
    }
  }, []);

  useEffect(() => {
    const logScrollPercentage = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      const scrollPercentage = (scrollTop / (documentHeight - windowHeight)) * 100;

      console.log(`Scroll Percentage: ${scrollPercentage.toFixed(2)}%`);
      setScHeight(scrollPercentage.toFixed(2));
    };

    window.addEventListener('scroll', logScrollPercentage);

    return () => {
      window.removeEventListener('scroll', logScrollPercentage);
    };
  }, []);

  return (
    <div className="bg-[#EDF7FF]">
      <div className="container mx-auto terms-and-conditions ">
        <div className="py-20 px-8 flex">
          <div className="w-3/12">
            <div className="sticky top-24 pl-6">
              <div className="w-[5px] bg-[#e1e4e6] rounded-md absolute left-0 top-0 h-full"></div>
              <div className="w-[5px] bg-[#0391F3] rounded-md absolute left-0 top-0 max-h-[100%]" style={{ 'height': `${scHeight}%` }}></div>
              {
                h2ContentArray && h2ContentArray.map((item, i) => (
                  <div key={i}>
                    <h3 className="text-sm capitalize mb-7"> <a href={`#heading-${i + 1}`}>{item}</a> </h3>
                  </div>
                ))
              }
            </div>
          </div>
          <div className=" w-9/12 bg-white p-14 rounded-3xl" id="tnc-content" ref={tncContentRef}>
            <BlocksRenderer content={content} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TermsAndConditionsContent;