import React from "react";
import NavbarTwo from "../components/Layouts/NavbarTwo";
import MainBanner from "../components/HomePages/MarketingAgency/MainBanner";
import Services from "../components/HomePages/MarketingAgency/Services";
import CtaAreaTwo from "../components/Common/CtaAreaTwo";
import LatestNews from "../components/Common/LatestNews";
import Footer from "../components/Layouts/Footer";
import Head from "next/head";
import { request } from "../utils/datoCms";

const ALLNIEWSBERICHT_QUERY = `query MyQuery {
  allNieuwsberichts {
    slug
    titel
    id
    datum
  }
}`;

const ALLSLIDER_QUERY = `query AllSliderQuery {
  allSliders {
    subtitel
    titel
    id
    plaatje {
      url
    }
  }
}`;
export async function getStaticProps() {
  const dataAllNews = await request({
    query: ALLNIEWSBERICHT_QUERY,
  });

  const dataAllSlider = await request({
    query: ALLSLIDER_QUERY,
  });

  return {
    props: { dataAllNews, dataAllSlider },
  };
}

const KorfbalKids = ({ dataAllNews, dataAllSlider }) => {
  return (
    <>
      <Head>
        <title>Korfbalkids - Home</title>
        <meta
          name="description"
          content="Korfbal Kids geeft de leukste korfbal clinics op scholen en leidt jeugdtrainers en docenten op om een kwalitatief goede training te kunnen geven."
        />
      </Head>

      <NavbarTwo />

      <MainBanner sliderData={dataAllSlider.allSliders} />

      <Services />

      <div className="ptb-100">
        <LatestNews newsItems={dataAllNews.allNieuwsberichts} />
      </div>

      <CtaAreaTwo />

      <Footer />
    </>
  );
};

export default KorfbalKids;
