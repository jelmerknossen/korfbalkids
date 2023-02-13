import React from "react";
import Link from "next/link";

const CtaAreaTwo = () => {
  return (
    <>
      <div className="cta-area-two ptb-100">
        <div className="container">
          <div className="cta-content">
            <span>Lijkt het je wat?</span>
            <h3>Neem dan contact op met KorfbalKids!</h3>
          </div>

          <div
            className="cta-btn-box"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            <Link href="/contact">
              <a className="custom-btn">Contact opnemen</a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CtaAreaTwo;
