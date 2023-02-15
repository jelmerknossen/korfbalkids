import React from "react";
import NavbarTwo from "../components/Layouts/NavbarTwo";
import PageBanner from "../components/Common/PageBanner";
import ContactInfo from "../components/Contact/ContactInfo";
import ContactForm from "../components/Contact/ContactForm";
import Footer from "../components/Layouts/Footer";
import Head from "next/head";

const Contact = () => {
  return (
    <>
      <Head>
        <title>Korfbalkids - Contact</title>
        <meta
          name="description"
          content="Indien u meer wilt weten over de diensten van Korfbalkids vindt u op deze pagina onze contactopties."
        ></meta>
      </Head>

      <NavbarTwo />

      <PageBanner pageTitle="Contact" BGImage="/images/korfbal-header.jpg" />

      <ContactInfo />

      <ContactForm />

      <Footer />
    </>
  );
};

export default Contact;
