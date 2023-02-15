import React from "react";
import NavbarTwo from "../components/Layouts/NavbarTwo";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/Layouts/Footer";
import CtaAreaTwo from "../components/Common/CtaAreaTwo";
import Head from "next/head";

const Partners = () => {
  return (
    <>
      <Head>
        <title>Korfbalkids - Partners</title>
      </Head>
      <NavbarTwo />

      <PageBanner pageTitle="Partners" BGImage="/images/korfbal-header.jpg" />

      <div className="container pt-100 pb-70">
        <div className="row justify-content-center">
          <div className="col-lg-12 col-md-12">
            <p>Partners</p>
          </div>
        </div>
      </div>

      <CtaAreaTwo />

      <Footer />
    </>
  );
};

export default Partners;
