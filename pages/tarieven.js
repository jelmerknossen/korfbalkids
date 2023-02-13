import React from "react";
import NavbarTwo from "../components/Layouts/NavbarTwo";
import PageBanner from "../components/Common/PageBanner";
import CtaAreaTwo from "../components/Common/CtaAreaTwo";
import Footer from "../components/Layouts/Footer";
import TarievenContent from "../components/Tarieven/TarievenContent";

const Tarieven = () => {
  return (
    <>
      <NavbarTwo />

      <PageBanner pageTitle="Tarieven" BGImage="/images/e-roda.jpg" />

      <TarievenContent />

      <CtaAreaTwo />

      <Footer />
    </>
  );
};

export default Tarieven;
