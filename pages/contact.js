import React from "react";
import NavbarTwo from "../components/Layouts/NavbarTwo";
import PageBanner from "../components/Common/PageBanner";
import ContactInfo from "../components/Contact/ContactInfo";
import ContactForm from "../components/Contact/ContactForm";
import Newsletter from "../components/Common/Newsletter";
import Footer from "../components/Layouts/Footer";

const Contact = () => {
  return (
    <>
      <NavbarTwo />

      <PageBanner pageTitle="Contact" BGImage="/images/korfbal-header.jpg" />

      <ContactInfo />

      <ContactForm />

      <Footer />
    </>
  );
};

export default Contact;
