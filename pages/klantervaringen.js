import React from "react";
import NavbarTwo from "../components/Layouts/NavbarTwo";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/Layouts/Footer";
import CtaAreaTwo from "../components/Common/CtaAreaTwo";
import Feedback from "../components/Common/Feedback";
import Head from "next/head";

const Klantervaringen = () => {
  return (
    <>
      <Head>
        <title>Korfbalkids - Klantervaringen</title>
        <meta
          name="description"
          content="Lees hier de ervaringen en meningen van de klanten van Korfbalkids op de diensten die wij aanbieden."
        ></meta>
      </Head>
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
