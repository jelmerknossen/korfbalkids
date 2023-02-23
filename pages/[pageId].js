import React from "react";
import NavbarTwo from "../components/Layouts/NavbarTwo";
import PageBanner from "../components/Common/PageBanner";
import BlogDetailsContent from "../components/Blog/BlogDetailsContent";
import Footer from "../components/Layouts/Footer";
import { request } from "../utils/datoCms";

const ALLNIEWSBERICHT_QUERY = `query allNieuwsBerichtQuery {
  allNieuwsberichts {
    titel
    id
    slug
    tekst
    datum
  }
}`;

export async function getStaticPaths() {
  const data = await request({
    query: ALLNIEWSBERICHT_QUERY,
  });

  const paths = data.allNieuwsberichts.map((nieuwsbericht) => ({
    params: { pageId: nieuwsbericht.slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

// `getStaticPaths` requires using `getStaticProps`
export async function getStaticProps(paths) {
  const {
    params: { pageId },
  } = paths;

  const NIEWSBERICHT_QUERY = `query MyQuery {
    allNieuwsberichts(filter: {slug: {eq: "${pageId}"}}) {
      titel
      tekst
      slug
      id
      datum
    }
  }`;

  const dataSingleNewsItem = await request({
    query: NIEWSBERICHT_QUERY,
  });

  const dataAllNewsItems = await request({
    query: ALLNIEWSBERICHT_QUERY,
  });

  return {
    props: { dataSingleNewsItem, dataAllNewsItems },
  };
}

const BlogDetails = ({ dataSingleNewsItem, dataAllNewsItems }) => {
  const { tekst, titel, datum } = dataSingleNewsItem.allNieuwsberichts[0];

  return (
    <>
      <NavbarTwo />

      <PageBanner pageTitle={titel} BGImage="/images/ballen.jpeg" />

      <BlogDetailsContent
        datum={datum}
        allNewsItems={dataAllNewsItems}
        tekst={tekst}
      />

      <Footer />
    </>
  );
};

export default BlogDetails;
