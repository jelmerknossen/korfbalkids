import React from "react";
import NavbarTwo from "../components/Layouts/NavbarTwo";
import PageBanner from "../components/Common/PageBanner";
import BlogDetailsContent from "../components/Blog/BlogDetailsContent";
import Footer from "../components/Layouts/Footer";
import { request } from "./api/datocms";

const NIEWSBERICHT_QUERY = `query nieuwsBerichtQuery {
  allNieuwsberichts {
    tekst
    titel
    id
    datum
  }
}`;

export async function getStaticPaths() {
  return {
    paths: [
      { params: { pageId: "testing1" } },
      { params: { pageId: "testing2" } },
    ],
    fallback: false, // can also be true or 'blocking'
  };
}

// `getStaticPaths` requires using `getStaticProps`
export async function getStaticProps(context) {
  const data = await request({
    query: NIEWSBERICHT_QUERY,
  });
  return {
    props: { data },
  };
}

const BlogDetails = ({ data }) => {
  return (
    <>
      <NavbarTwo />

      <PageBanner pageTitle="Blog Details" BGImage="/images/page-banner2.jpg" />

      <div>{JSON.stringify(data, null, 2)}</div>
      <BlogDetailsContent />

      <Footer />
    </>
  );
};

export default BlogDetails;
