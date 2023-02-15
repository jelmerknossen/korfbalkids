import React from "react";
import NavbarTwo from "../components/Layouts/NavbarTwo";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/Layouts/Footer";
import CtaAreaTwo from "../components/Common/CtaAreaTwo";
import Head from "next/head";

const Acties = () => {
  return (
    <>
      <Head>
        <title>Korfbalkids - Acties</title>
        <meta
          name="description"
          content="Alle speciale acties op de diensten van Korfbalkids, hou deze pagina in de gaten voor de actietarieven."
        ></meta>
      </Head>
      <NavbarTwo />

      <PageBanner pageTitle="Acties" BGImage="/images/korfbal-header.jpg" />

      <div className="container pt-100 pb-70">
        <div className="row justify-content-center">
          <div className="col-lg-12 col-md-12">
            <p>Er lopen momenteel geen acties</p>
          </div>
        </div>
      </div>

      <CtaAreaTwo />

      <Footer />
    </>
  );
};

export default Acties;
