import React from "react";
import Link from "next/link";

const LatestNews = ({ allNewsItems }) =>
  allNewsItems.allNieuwsberichts.map((newsItem) => {
    const { slug, titel, datum } = newsItem;

    return (
      <li key={slug}>
        <Link href={`/${slug}`}>
          <a>{titel}</a>
        </Link>
        <span className="post-date">
          {datum.split("-").reverse().join("/")}
        </span>
      </li>
    );
  });

const BlogSidebar = ({ allNewsItems }) => {
  console.log(allNewsItems);
  return (
    <>
      <div className="widget-area" id="secondary">
        {/* Recent posts */}
        <div className="widget widget_recent_entries">
          <h3 className="widget-title">Laatste nieuws</h3>

          <ul>
            <LatestNews allNewsItems={allNewsItems} />
          </ul>
        </div>
      </div>
    </>
  );
};

export default BlogSidebar;
