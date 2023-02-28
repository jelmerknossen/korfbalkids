import React from "react";
import NavbarTwo from "../components/Layouts/NavbarTwo";
import PageBanner from "../components/Common/PageBanner";
import VerenigingenContent from "../components/Verenigingen/VerenigingenContent";
import CtaAreaTwo from "../components/Common/CtaAreaTwo";
import Footer from "../components/Layouts/Footer";
import Head from "next/head";
import { request } from "../utils/datoCms";

const ALLVERENIGING_QUERY = `query MyQuery {
  allVerenigings {
    tekst
    plaatje {
      url
    }
  }
}`;

export async function getStaticProps() {
  const data = await request({
    query: ALLVERENIGING_QUERY,
  });

  return {
    props: { data },
  };
}

const Verenigingen = ({ data }) => {
  const { tekst, plaatje } = data.allVerenigings[0];
  return (
    <>
      <Head>
        <title>Korfbalkids - Verenigingen</title>
        <meta
          name="description"
          content="Welkom op de pagina voor verenigingen. Korfbal Kids heeft veel ervaring in het begeleiden van korfbalverenigingen."
        ></meta>
      </Head>
      <NavbarTwo />

      <PageBanner pageTitle="Verenigingen" BGImage="/images/foto-2.jpg" />

      <VerenigingenContent tekst={tekst} plaatje={plaatje} />

      <CtaAreaTwo />

      <Footer />
    </>
  );
};

export default Verenigingen;
