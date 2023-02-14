import React from "react";
import NavbarTwo from "../components/Layouts/NavbarTwo";
import PageBanner from "../components/Common/PageBanner";
import VerenigingenContent from "../components/Verenigingen/VerenigingenContent";
import CtaAreaTwo from "../components/Common/CtaAreaTwo";
import Footer from "../components/Layouts/Footer";

const Aabout = () => {
  return (
    <>
      <NavbarTwo />

      <PageBanner pageTitle="Verenigingen" BGImage="/images/foto-2.jpg" />

      <VerenigingenContent />

      <CtaAreaTwo />

      <Footer />
    </>
  );
};

export default Aabout;
