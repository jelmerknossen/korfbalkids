import React from "react";
import NavbarTwo from "../components/Layouts/NavbarTwo";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/Layouts/Footer";
import CtaAreaTwo from "../components/Common/CtaAreaTwo";
import Feedback from "../components/Common/Feedback";

const Klantervaringen = () => {
  return (
    <>
      <NavbarTwo />

      <PageBanner
        pageTitle="Klantervaringen"
        BGImage="/images/korfbal-header.jpg"
      />

      <Feedback />

      <CtaAreaTwo />

      <Footer />
    </>
  );
};

export default Klantervaringen;
