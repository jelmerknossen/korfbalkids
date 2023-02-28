import React from "react";
import NavbarTwo from "../components/Layouts/NavbarTwo";
import PageBanner from "../components/Common/PageBanner";
import CtaAreaTwo from "../components/Common/CtaAreaTwo";
import Footer from "../components/Layouts/Footer";
import TarievenContent from "../components/Tarieven/TarievenContent";
import Head from "next/head";
import { request } from "../utils/datoCms";

const ALLTARIEVEN_QUERY = `query allTarievenQuery {
  allTarievens {
    tekst
  }
}`;

export async function getStaticProps() {
  const data = await request({
    query: ALLTARIEVEN_QUERY,
  });

  return {
    props: { data },
  };
}

const Tarieven = ({ data }) => {
  const { tekst } = data.allTarievens[0];
  return (
    <>
      <Head>
        <title>Korfbalkids - Tarieven</title>
        <meta
          name="description"
          content="Hier vindt u een overzicht van de verschillende diensten en bijbehorende tarieven van Korfbalkids."
        ></meta>
      </Head>
      <NavbarTwo />

      <PageBanner pageTitle="Tarieven" BGImage="/images/e-roda.jpg" />

      <TarievenContent tekst={tekst} />

      <CtaAreaTwo />

      <Footer />
    </>
  );
};

export default Tarieven;
