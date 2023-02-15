import React from "react";
import NavbarTwo from "../components/Layouts/NavbarTwo";
import PageBanner from "../components/Common/PageBanner";
import CtaAreaTwo from "../components/Common/CtaAreaTwo";
import Footer from "../components/Layouts/Footer";
import FilmContent from "../components/Filmmateriaal/FilmContent";
import Head from "next/head";

const Multimedia = () => {
  return (
    <>
      <Head>
        <title>Korfbalkids - Media</title>
        <meta
          name="description"
          content="Foto's van de clinics en trainingen die Korfbalkids verzorgt voor onze klanten."
        ></meta>
      </Head>
      <NavbarTwo />

      <PageBanner pageTitle="Media" BGImage="/images/foto-2.jpg" />

      <FilmContent />

      <CtaAreaTwo />

      <Footer />
    </>
  );
};

export default Multimedia;
