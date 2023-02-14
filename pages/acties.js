import React from "react";
import NavbarTwo from "../components/Layouts/NavbarTwo";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/Layouts/Footer";
import CtaAreaTwo from "../components/Common/CtaAreaTwo";

const Acties = () => {
  return (
    <>
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
