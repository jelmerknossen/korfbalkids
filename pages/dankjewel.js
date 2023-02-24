import React from "react";
import NavbarTwo from "../components/Layouts/NavbarTwo";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/Layouts/Footer";
import DankjewelContent from "../components/Dankjewel/DankjewelContent";

const Error = () => {
  return (
    <>
      <NavbarTwo />

      <PageBanner
        pageTitle="Bedankt voor je bericht!"
        BGImage="/images/ballen.jpeg"
      />

      <DankjewelContent />

      <Footer />
    </>
  );
};

export default Error;
