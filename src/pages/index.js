import * as React from "react";
import CardGrid from "../components/CardGrid";
import Layout from "../components/Layout";
import Slideshow from "../components/Slider";

const IndexPage = () => {
  return (
    <Layout>
      <Slideshow />
      <CardGrid />
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
