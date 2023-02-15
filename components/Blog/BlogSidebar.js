import React from "react";
import Link from "next/link";

const BlogSidebar = () => {
  return (
    <>
      <div className="widget-area" id="secondary">
        {/* Recent posts */}
        <div className="widget widget_recent_entries">
          <h3 className="widget-title">Recent posts</h3>

          <ul>
            <li>
              <Link href="/blog-details">
                <a>The security risks of changing package owners</a>
              </Link>
              <span className="post-date">March 15, 2022</span>
            </li>
            <li>
              <Link href="/blog-details">
                <a>Tips to protecting business and Family</a>
              </Link>
              <span className="post-date">March 16, 2022</span>
            </li>
            <li>
              <Link href="/blog-details">
                <a>Protect your workplace from cyber attacks</a>
              </Link>
              <span className="post-date">March 17, 2022</span>
            </li>
            <li>
              <Link href="/blog-details">
                <a>Business debit Fees to increase in 2022</a>
              </Link>
              <span className="post-date">March 18, 2022</span>
            </li>
            <li>
              <Link href="/blog-details">
                <a>10 tips to reduce your card processing costs</a>
              </Link>
              <span className="post-date">March 19, 2022</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default BlogSidebar;
