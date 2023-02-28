import React from "react";

const VerenigingContent = ({ tekst, plaatje }) => {
  return (
    <>
      <div className="about-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-md-12">
              <div className="about-content about-content-two">
                <div
                  className="section-title"
                  dangerouslySetInnerHTML={{ __html: tekst }}
                />
              </div>
            </div>
            <div className="col-lg-5 col-md-6">
              <div className="about-image">
                <img src={plaatje.url} alt="image" className="rounded-10" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VerenigingContent;
