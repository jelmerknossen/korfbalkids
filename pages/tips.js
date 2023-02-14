import React from "react";
import NavbarTwo from "../components/Layouts/NavbarTwo";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/Layouts/Footer";
import CtaAreaTwo from "../components/Common/CtaAreaTwo";
import TipContent from "../components/Tips/TipContent";

const Tips = () => {
  return (
    <>
      <NavbarTwo />

      <PageBanner pageTitle="Tips" BGImage="/images/korfbal-header.jpg" />

      <TipContent />

      <CtaAreaTwo />

      <Footer />
    </>
  );
};

export default Tips;
