import React from "react";
import NavbarTwo from "../components/Layouts/NavbarTwo";
import PageBanner from "../components/Common/PageBanner";
import AboutContent from "../components/About/AboutContent";
import CtaAreaTwo from "../components/Common/CtaAreaTwo";
import Footer from "../components/Layouts/Footer";
import Head from "next/head";

const Aabout = () => {
  return (
    <>
      <Head>
        <title>Korfbalkids - Over KorfbalKids</title>
        <meta
          name="description"
          content="Mijn naam is Jelmer Knossen. Ik heb Korfbal Kids opgericht, omdat ik het belangrijk vind dat iedereen plezier in de korfbalsport heeft."
        ></meta>
      </Head>
      <NavbarTwo />

      <PageBanner pageTitle="Over KorfbalKids" BGImage="/images/foto-2.jpg" />

      <AboutContent />

      <CtaAreaTwo />

      <Footer />
    </>
  );
};

export default Aabout;
