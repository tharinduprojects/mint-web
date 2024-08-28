'use client';

import Link from "next/link";
import Button from "../elements/button";
import { useState, useEffect } from "react";

const NavBar = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  let timeoutId;

  const cta = {
    link: '/demo',
    title: 'Get in touch',
    size: 'sm',
  };

  const handleMouseEnter = () => {
    clearTimeout(timeoutId); // Clear any existing timeout
    setIsHovered(true);
    setIsMenuVisible(true);
  };

  const handleMouseLeave = () => {
    timeoutId = setTimeout(() => {
      setIsHovered(false);
    }, 500); // Delay the fade-out effect
  };

  const handleLinkClick = () => {
    setIsHovered(false);
    setIsMenuVisible(false);
  };

  useEffect(() => {
    if (!isHovered) {
      setIsMenuVisible(false);
    }
  }, [isHovered]);

  return (
    <>
      <div className="bg-mintDark py-4 px-8">
        <div className="container mx-auto">
          <div className="flex justify-between">
            <div className="flex items-center gap-12">
              <Link href="/" className="text-white">
                <img
                  src="https://joyful-egg-6af1fd8511.media.strapiapp.com/Logo_63c267b672.svg"
                  alt=""
                />
              </Link>
              <div className="text-white hidden md:block">
                <ul className="text-sm flex gap-8">
                  <li
                    id="features-li"
                    className="pt-1 hover:text-blue-300"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <Link href="#">Features </Link>
                  </li>
                  <li className="pt-1 hover:text-blue-300">
                    <Link href="/we-are">We Are</Link>
                  </li>
                  <li className="pt-1 hover:text-blue-300">
                    <Link href="#">Why Mint</Link>
                  </li>
                  <li className="pt-1 hover:text-blue-300">
                    <Link href="#">Careers</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex gap-x-6 items-center">
              <Link className="text-white" href="#">
                EN
              </Link>
              <Button cta={cta} />
            </div>
          </div>
        </div>
      </div>
      {isMenuVisible && (
        <div
          id="features-menu"
          className={`p-5 absolute top-[76px] z-10 w-full shadow-lg bg-white transition-opacity duration-300 ${isHovered ? 'opacity-100 visible' : 'opacity-0 invisible'
            }`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <h3 className="pl-10">Features</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
            <Link href='/product/dashboard' onClick={handleLinkClick} className="bg-white p-4 cursor-pointer hover:bg-slate-100">
              <div className="flex items-center space-x-3">
                <img
                  src="https://joyful-egg-6af1fd8511.media.strapiapp.com/Icons_99ab10aa35.png"
                  alt=""
                />
                <h3 className="text-lg font-semibold">HR Dashboard</h3>
              </div>
              <p className="text-gray-600 mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis
                enim interdum.
              </p>
            </Link>

            <Link href='/product/absense-and-leave' onClick={handleLinkClick} className="bg-white p-4 cursor-pointer hover:bg-slate-100">
              <div className="flex items-center space-x-3">
                <img
                  src="https://joyful-egg-6af1fd8511.media.strapiapp.com/2_9e9a4f63bf.png"
                  alt=""
                />
                <h3 className="text-lg font-semibold">Absence & Leave</h3>
              </div>
              <p className="text-gray-600 mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis
                enim interdum.
              </p>
            </Link>

            <Link href='/product/time-and-attendance' onClick={handleLinkClick} className="bg-white p-4 cursor-pointer hover:bg-slate-100">
              <div className="flex items-center space-x-3">
                <img
                  src="https://joyful-egg-6af1fd8511.media.strapiapp.com/Icons_1_5b33d44877.png"
                  alt=""
                />
                <h3 className="text-lg font-semibold">Time & Attendance</h3>
              </div>
              <p className="text-gray-600 mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis
                enim interdum.
              </p>
            </Link>

            <Link href='/product/employee-information' onClick={handleLinkClick} className="bg-white p-4 cursor-pointer hover:bg-slate-100">
              <div className="flex items-center space-x-3">
                <img
                  src="https://joyful-egg-6af1fd8511.media.strapiapp.com/2_1_0c4161e592.png"
                  alt=""
                />
                <h3 className="text-lg font-semibold">Employee Information</h3>
              </div>
              <p className="text-gray-600 mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis
                enim interdum.
              </p>
            </Link>

            <Link href='/product/payroll' onClick={handleLinkClick} className="bg-white p-4 cursor-pointer hover:bg-slate-100">
              <div className="flex items-center space-x-3">
                <img
                  src="https://joyful-egg-6af1fd8511.media.strapiapp.com/2_2_64444d9ebe.png"
                  alt=""
                />
                <h3 className="text-lg font-semibold">Payroll</h3>
              </div>
              <p className="text-gray-600 mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis
                enim interdum.
              </p>
            </Link>

            <Link href='/product/recruitment' onClick={handleLinkClick} className="bg-white p-4 cursor-pointer hover:bg-slate-100">
              <div className="flex items-center space-x-3">
                <img
                  src="https://joyful-egg-6af1fd8511.media.strapiapp.com/2_3_5697ec7687.png"
                  alt=""
                />
                <h3 className="text-lg font-semibold">Recruitment</h3>
              </div>
              <p className="text-gray-600 mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis
                enim interdum.
              </p>
            </Link>

            <Link href='/products/kanbanboard' onClick={handleLinkClick} className="bg-white p-4 cursor-pointer hover:bg-slate-100">
              <div className="flex items-center space-x-3">
                <img
                  src="https://joyful-egg-6af1fd8511.media.strapiapp.com/Icons_2_ff60299e51.png"
                  alt=""
                />
                <h3 className="text-lg font-semibold">Kanban Board</h3>
              </div>
              <p className="text-gray-600 mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis
                enim interdum.
              </p>
            </Link>

            <Link href='/product/kiosk-empowerment' onClick={handleLinkClick} className="bg-white p-4 cursor-pointer hover:bg-slate-100">
              <div className="flex items-center space-x-3">
                <img
                  src="https://joyful-egg-6af1fd8511.media.strapiapp.com/2_4_9cf484521d.png"
                  alt=""
                />
                <h3 className="text-lg font-semibold">Kiosk</h3>
              </div>
              <p className="text-gray-600 mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis
                enim interdum.
              </p>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default NavBar;
