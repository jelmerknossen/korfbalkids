import React from "react";
import NavbarTwo from "../components/Layouts/NavbarTwo";
import PageBanner from "../components/Common/PageBanner";
import ContactInfo from "../components/Contact/ContactInfo";
import ContactForm from "../components/Contact/ContactForm";
import Footer from "../components/Layouts/Footer";
import Head from "next/head";
import { request } from "../utils/datoCms";

const ALLALGEMEEN_QUERY = `query MyQuery {
  allAlgemeens {
    adres
    email
    telefoonnummer
  }
}`;

export async function getStaticProps() {
  const data = await request({
    query: ALLALGEMEEN_QUERY,
  });

  return {
    props: { data },
  };
}

const Contact = ({ data }) => {
  const { telefoonnummer, email, adres } = data.allAlgemeens[0];
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

      <ContactInfo
        telefoonnummer={telefoonnummer}
        email={email}
        adres={adres}
      />

      <ContactForm />

      <Footer />
    </>
  );
};

export default Contact;
