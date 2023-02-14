import React from "react";
import NavbarTwo from "../components/Layouts/NavbarTwo";
import PageBanner from "../components/Common/PageBanner";
import CtaAreaTwo from "../components/Common/CtaAreaTwo";
import Footer from "../components/Layouts/Footer";
import FilmContent from "../components/Filmmateriaal/FilmContent";

const Multimedia = () => {
  return (
    <>
      <NavbarTwo />

      <PageBanner pageTitle="Media" BGImage="/images/foto-2.jpg" />

      <FilmContent />

      <CtaAreaTwo />

      <Footer />
    </>
  );
};

export default Multimedia;
