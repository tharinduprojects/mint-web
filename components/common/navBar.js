'use client';

import Link from "next/link";
import Button from "../elements/button";
import { useState, useEffect } from "react";
import { Collapse } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { API_BASE_URL, API_MEDIA_URL } from "../utils/constants";
import getData from "../api/useFetch";
import getNavItems from "../api/navItems";

const NavBar = () => {

  const [isHovered, setIsHovered] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);
  const [navItems, setnavItems] = useState([]);
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    const fetchNavItems = async () => {
      const data = await getNavItems()

      console.log('dadadadada Nav get data firm NavBar.js', data);
      
      setnavItems(data.data?.attributes?.nav)
    }
    fetchNavItems()
  }, [isMenuVisible]);

  const { Panel } = Collapse;

  let timeoutId;

  const cta = {
    link: '/get-in-touch',
    title: 'Get in touch',
    size: 'sm',
  };

  const handleMouseEnter = () => {
    clearTimeout(timeoutId);
    setIsHovered(true);
    setIsMenuVisible(true);
  };

  const handleMouseLeave = () => {
    timeoutId = setTimeout(() => {
      setIsHovered(false);
    }, 500);
  };

  const handleLinkClick = () => {
    setIsHovered(false);
    setIsMenuVisible(false);
    setIsMobileMenuVisible(false); // Hide the mobile menu when a link is clicked
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuVisible((prev) => !prev);
  };

  useEffect(() => {
    if (!isHovered) {
      setIsMenuVisible(false);
    }
  }, [isHovered]);

  const items = [
    {
      key: '1',
      label: 'Features',
      children: <div>
        <Link className="block py-2 text-lg text-white" href='/product/dashboard' onClick={handleLinkClick}> HR Dashboard</Link>
        <Link className="block py-2 text-lg text-white" href='/product/absense-and-leave' onClick={handleLinkClick}> Absence & Leave</Link>
        <Link className="block py-2 text-lg text-white" href='/product/time-and-attendance' onClick={handleLinkClick}> Time & Attendance</Link>
        <Link className="block py-2 text-lg text-white" href='/product/employee-information' onClick={handleLinkClick}> Employee Information</Link>
        <Link className="block py-2 text-lg text-white" href='/product/payroll' onClick={handleLinkClick}> Payroll</Link>
        <Link className="block py-2 text-lg text-white" href='/product/recruitment' onClick={handleLinkClick}> Recruitment</Link>
        <Link className="block py-2 text-lg text-white" href='/product/kanbanboard' onClick={handleLinkClick}> Kanban Board</Link>
        <Link className="block py-2 text-lg text-white" href='/product/kiosk-empowerment' onClick={handleLinkClick}> Kiosk</Link>
      </div>,
    }
  ];

  return (
    <>
      <div className="bg-mintDark py-4 px-8">
        <div className="container mx-auto">
          <div className="flex justify-between">
            <div className="flex items-center gap-12">
              <Link href="/" className="text-white">
                <img
                  src={'https://deserving-kindness-f717134482.media.strapiapp.com/Logo_63c267b672.svg'}
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
                    <Link href="/why-mint">Why Mint</Link>
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
              <Button className="hidden md:block" cta={cta} />
              <span className="md:hidden text-white p-2" id="menu-btn" onClick={toggleMobileMenu}>
                <MenuOutlined />
              </span>
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
            {
              navItems && navItems.map((item) => (
                <Link key={item.id} href={item.link} onClick={handleLinkClick} className="bg-white p-4 cursor-pointer hover:bg-slate-100">
                  <div className="flex items-center space-x-3">
                    <img
                      src={item.icon.data?.attributes?.url}
                      alt="icon"
                    />
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                  </div>
                  <p className="text-gray-600 mt-2">
                    {item.description}
                  </p>
                </Link>
              ))
            }
          </div>
        </div>
      )}
      {/* mobile menu */}
      <div className={`md:hidden bg-[#07243a] text-white p-8 ${isMobileMenuVisible ? 'block' : 'hidden'}`} id="mobile-menu">
        <div>
          <Link className="block py-2 text-lg" href='/we-are' onClick={handleLinkClick}>We Are</Link>
          <Link className="block py-2 text-lg" href='/' onClick={handleLinkClick}>Why Mint</Link>
          <Link className="block py-2 text-lg" href='/' onClick={handleLinkClick}>Careers</Link>
          <div className="pt-3"></div>
          <Collapse items={items} defaultActiveKey={['1']} />
          <Button className="w-full block mt-6 text-center" cta={cta} />

        </div>
      </div>
    </>
  );
};

export default NavBar;
