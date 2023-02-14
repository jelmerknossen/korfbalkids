import React, { useState } from "react";
import FsLightbox from "fslightbox-react";

const FilmContent = () => {
  const [toggler, setToggler] = useState(false);
  return (
    <>
      <div class="ptb-100">
        <FsLightbox
          toggler={toggler}
          sources={["https://www.youtube.com/embed/oE77ATjuekU"]}
        />

        <div className="about-area">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-5 col-md-12">
                <div className="about-image">
                  <img
                    src="https://i.ytimg.com/vi_webp/oE77ATjuekU/maxresdefault.webp"
                    alt="image"
                    className="rounded-10"
                  />

                  <div className="video-box">
                    <div
                      className="video-btn"
                      onClick={() => setToggler(!toggler)}
                    >
                      <i className="fa-solid fa-play"></i>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-7 col-md-12">
                <div className="about-content about-content-two">
                  <div className="section-title">
                    <h3>FF Bewegen clinic DVO (6:40 – 10:24)</h3>
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

export default FilmContent;
