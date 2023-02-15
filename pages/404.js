import React from "react";
import NavbarTwo from "../components/Layouts/NavbarTwo";
import PageBanner from "../components/Common/PageBanner";
import ErrorContent from "../components/Error/ErrorContent";
import Footer from "../components/Layouts/Footer";

const Error = () => {
  return (
    <>
      <NavbarTwo />

      <PageBanner pageTitle="404 Error" BGImage="/images/ballen.jpeg" />

      <ErrorContent />

      <Footer />
    </>
  );
};

export default Error;
