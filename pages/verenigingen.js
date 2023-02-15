import React from "react";
import NavbarTwo from "../components/Layouts/NavbarTwo";
import PageBanner from "../components/Common/PageBanner";
import VerenigingenContent from "../components/Verenigingen/VerenigingenContent";
import CtaAreaTwo from "../components/Common/CtaAreaTwo";
import Footer from "../components/Layouts/Footer";
import Head from "next/head";

const Aabout = () => {
  return (
    <>
      <Head>
        <title>Korfbalkids - Verenigingen</title>
        <meta
          name="description"
          content="Welkom op de pagina voor verenigingen. Korfbal Kids heeft veel ervaring in het begeleiden van korfbalverenigingen."
        ></meta>
      </Head>
      <NavbarTwo />

      <PageBanner pageTitle="Verenigingen" BGImage="/images/foto-2.jpg" />

      <VerenigingenContent />

      <CtaAreaTwo />

      <Footer />
    </>
  );
};

export default Aabout;
