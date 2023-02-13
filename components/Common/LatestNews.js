import React from "react";
import Link from "next/link";

const LatestNews = () => {
  return (
    <>
      <div className="blog-area ptb-110">
        <div className="container">
          <div className="section-title">
            <h2>Nieuws</h2>
          </div>

          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="single-blog-post mb-0">
                <div className="post-image">
                  <Link href="/blog-details">
                    <a>
                      <img src="/images/blog/blog1.jpg" alt="image" />
                    </a>
                  </Link>
                </div>

                <div className="post-content">
                  <h3 className="mb-0">
                    <Link href="/blog-details">
                      <a>Tariefwijzigingen</a>
                    </Link>
                  </h3>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="blog-item-box">
                <div className="blog-item">
                  <div className="row align-items-center">
                    <div className="col-lg-4 col-md-3 col-sm-4">
                      <div className="post-image">
                        <Link href="/blog-details">
                          <a>
                            <img src="/images/blog/blog2.jpg" alt="image" />
                          </a>
                        </Link>
                      </div>
                    </div>

                    <div className="col-lg-8 col-md-9 col-sm-8">
                      <div className="post-content">
                        <h3>
                          <Link href="/blog-details">
                            <a>Het is niet altijd een succes :(</a>
                          </Link>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="blog-item">
                  <div className="row align-items-center">
                    <div className="col-lg-4 col-md-3 col-sm-4">
                      <div className="post-image">
                        <Link href="/blog-details">
                          <a>
                            <img src="/images/blog/blog3.jpg" alt="image" />
                          </a>
                        </Link>
                      </div>
                    </div>

                    <div className="col-lg-8 col-md-9 col-sm-8">
                      <div className="post-content">
                        <h3>
                          <Link href="/blog-details">
                            <a>
                              Nieuwe samenwerkingen KorfbalKids seizoen
                              2022-2023
                            </a>
                          </Link>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="blog-item">
                  <div className="row align-items-center">
                    <div className="col-lg-4 col-md-3 col-sm-4">
                      <div className="post-image">
                        <Link href="/blog-details">
                          <a>
                            <img src="/images/blog/blog4.jpg" alt="image" />
                          </a>
                        </Link>
                      </div>
                    </div>

                    <div className="col-lg-8 col-md-9 col-sm-8">
                      <div className="post-content">
                        <h3>
                          <Link href="/blog-details">
                            <a>
                              Succesvolle samenwerking tussen KorfbalKids en
                              KZ/Thermo4U
                            </a>
                          </Link>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="blog-item">
                  <div className="row align-items-center">
                    <div className="col-lg-4 col-md-3 col-sm-4">
                      <div className="post-image">
                        <Link href="/blog-details">
                          <a>
                            <img src="/images/blog/blog1.jpg" alt="image" />
                          </a>
                        </Link>
                      </div>
                    </div>

                    <div className="col-lg-8 col-md-9 col-sm-8">
                      <div className="post-content">
                        <h3>
                          <Link href="/blog-details">
                            <a>Samenwerking KorfbalKids en KV DOT</a>
                          </Link>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LatestNews;
