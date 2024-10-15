'use client'

import Hero from "@/components/blocks/hero";
import ContactOurSalesPopup from "./contactOurSalesPopup";
import { useState } from "react";

const GetInTouchHero = ({ data }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openContactModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Hero data={data} ctaAction={openContactModal} />
      <ContactOurSalesPopup isModalOpen={isModalOpen} handleOk={handleOk} handleCancel={handleCancel} />
    </>
  );
}

export default GetInTouchHero;
