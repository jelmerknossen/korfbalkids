import React from "react";
import Link from "next/link";

const DankjewelContent = () => {
  return (
    <>
      <div className="error-area ptb-100">
        <div className="container">
          <div className="error-content">
            <h3>Wij nemen z.s.m contact met je op</h3>
            <div className="back-btn">
              <Link href="/">
                <a className="btn btn-primary">Terug naar home</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DankjewelContent;
