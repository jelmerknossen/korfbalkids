import React from "react";
import Link from "next/link";

const NewsItemList = ({ newsItems }) =>
  newsItems.slice(1).map((newsItem) => {
    const { slug, titel, id } = newsItem;

    return (
      <div className="blog-item">
        <div className="row align-items-center">
          <div className="col-lg-4 col-md-3 col-sm-4">
            <div className="post-image">
              <Link href={`/${slug}`}>
                <a>
                  <img src="/images/ballen.jpeg" alt="KorfbalKids ballen" />
                </a>
              </Link>
            </div>
          </div>

          <div className="col-lg-8 col-md-9 col-sm-8">
            <div className="post-content">
              <h3>
                <Link href={`/${slug}`}>
                  <a>{titel}</a>
                </Link>
              </h3>
            </div>
          </div>
        </div>
      </div>
    );
  });

const FeatureNewsItem = ({ titel, slug }) => (
  <div className="single-blog-post mb-0">
    <div className="post-image">
      <Link href={`/${slug}`}>
        <a>
          <img src="/images/ballen.jpeg" alt="KorfbalKids ballen" />
        </a>
      </Link>
    </div>

    <div className="post-content">
      <h3 className="mb-0">
        <Link href="/blog-details">
          <a>{titel}</a>
        </Link>
      </h3>
    </div>
  </div>
);

const LatestNews = ({ newsItems }) => {
  const { slug, titel } = newsItems[0];
  return (
    <>
      <div className="blog-area ptb-110">
        <div className="container">
          <div className="section-title">
            <h2>Nieuws</h2>
          </div>

          <div className="row align-items-start">
            <div className="col-lg-6 col-md-12">
              <FeatureNewsItem titel={titel} slug={slug} />
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="blog-item-box">
                <NewsItemList newsItems={newsItems} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LatestNews;
