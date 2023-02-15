import React from "react";
import NavbarTwo from "../components/Layouts/NavbarTwo";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/Layouts/Footer";
import CtaAreaTwo from "../components/Common/CtaAreaTwo";
import TipContent from "../components/Tips/TipContent";
import Head from "next/head";

const Tips = () => {
  return (
    <>
      <Head>
        <title>Korfbalkids - Tips</title>
        <meta
          name="description"
          content="Lees hier de tips van Korfbalkids voor het werven van leden voor jouw sportclub."
        ></meta>
      </Head>
      <NavbarTwo />

      <PageBanner pageTitle="Tips" BGImage="/images/korfbal-header.jpg" />

      <TipContent />

      <CtaAreaTwo />

      <Footer />
    </>
  );
};

export default Tips;
