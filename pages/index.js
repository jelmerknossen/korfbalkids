import React from "react";
import NavbarTwo from "../components/Layouts/NavbarTwo";
import MainBanner from "../components/HomePages/MarketingAgency/MainBanner";
import Services from "../components/HomePages/MarketingAgency/Services";
import CtaAreaTwo from "../components/Common/CtaAreaTwo";
import LatestNews from "../components/Common/LatestNews";
import Footer from "../components/Layouts/Footer";
import Head from "next/head";

const KorfbalKids = () => {
  return (
    <>
      <Head>
        <title>Korfbalkids - Home</title>
        <meta
          name="description"
          content="Korfbal Kids geeft de leukste korfbal clinics op scholen en leidt jeugdtrainers en docenten op om een kwalitatief goede training te kunnen geven."
        />
      </Head>

      <NavbarTwo />

      <MainBanner />

      <Services />

      <div className="ptb-100">
        <LatestNews />
      </div>

      <CtaAreaTwo />

      <Footer />
    </>
  );
};

export default KorfbalKids;
