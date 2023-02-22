import React from "react";
import Link from "next/link";
import BlogSidebar from "./BlogSidebar";

const BlogRightSidebar = ({ tekst, datum, allNewsItems }) => {
  return (
    <>
      <div className="blog-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="blog-details">
                <div className="article-content">
                  <ul className="entry-meta">
                    <li>
                      <i className="fa-solid fa-user"></i>
                      <Link href="/blog">
                        <a>Jelmer Knossen</a>
                      </Link>
                    </li>
                    <li>
                      <i className="fa-solid fa-calendar-days"></i> {datum}
                    </li>
                  </ul>
                  <div dangerouslySetInnerHTML={{ __html: tekst }} />
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-12">
              <div className="pl-20">
                <BlogSidebar allNewsItems={allNewsItems} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogRightSidebar;
