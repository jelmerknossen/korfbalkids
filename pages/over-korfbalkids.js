import React from "react";
import NavbarTwo from "../components/Layouts/NavbarTwo";
import PageBanner from "../components/Common/PageBanner";
import AboutContent from "../components/About/AboutContent";
import CtaAreaTwo from "../components/Common/CtaAreaTwo";
import Footer from "../components/Layouts/Footer";
import Head from "next/head";
import { request } from "../utils/datoCms";

const ALLOVER_QUERY = `query allOversQuery {
  allOvers {
    tekst
    plaatje {
      url
    }
  }
}`;

export async function getStaticProps() {
  const data = await request({
    query: ALLOVER_QUERY,
  });

  return {
    props: { data },
  };
}

const Aabout = ({ data }) => {
  console.log(data);
  const { tekst, plaatje } = data.allOvers[0];
  return (
    <>
      <Head>
        <title>Korfbalkids - Over KorfbalKids</title>
        <meta
          name="description"
          content="Mijn naam is Jelmer Knossen. Ik heb Korfbal Kids opgericht, omdat ik het belangrijk vind dat iedereen plezier in de korfbalsport heeft."
        ></meta>
      </Head>
      <NavbarTwo />

      <PageBanner pageTitle="Over KorfbalKids" BGImage="/images/foto-2.jpg" />

      <AboutContent plaatje={plaatje} tekst={tekst} />

      <CtaAreaTwo />

      <Footer />
    </>
  );
};

export default Aabout;
