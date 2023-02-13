import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Link from "next/link";
import VisibilitySensor from "react-visibility-sensor";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from "swiper";

const MainBanner = () => {
  const [toggler, setToggler] = useState(false);
  return (
    <>
      <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/embed/bk7McNUjWgw"]}
      />

      <Swiper
        cssMode={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
        className="hero-slider"
        autoplay={{
          delay: 7000,
        }}
      >
        <SwiperSlide>
          <div
            className="hero-banner overly-6"
            style={{
              backgroundImage: `url(/images/korfbal.jpeg)`,
            }}
          >
            <div className="d-table">
              <div className="d-table-cell">
                <div className="container">
                  <VisibilitySensor>
                    {({ isVisible }) => (
                      <div className="main-banner-content text-center">
                        <h1
                          className={
                            isVisible
                              ? "animated fadeInUp opacityOne"
                              : "opacityZero"
                          }
                        >
                          Korfbal Kids staat voor plezier!
                        </h1>

                        <p
                          className={
                            isVisible
                              ? "animated fadeInUp opacityOne"
                              : "opacityZero"
                          }
                        >
                          Wij vinden dat: spelers, trainers en kinderen op
                          school en bij de vereniging met plezier aan korfbal
                          moeten deelnemen. Korfbal Kids geeft de leukste
                          korfbal clinics op scholen en leidt jeugdtrainers en
                          docenten op om een kwalitatief goede training te
                          kunnen geven.
                        </p>

                        <div
                          className={
                            isVisible
                              ? "animated fadeInUp opacityOne"
                              : "opacityZero"
                          }
                        >
                          <Link href="/contact">
                            <a className="btn btn-primary">Neem contact op</a>
                          </Link>
                        </div>
                      </div>
                    )}
                  </VisibilitySensor>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="hero-banner overly-6"
            style={{
              backgroundImage: `url(/images/korfbal-header.jpg)`,
            }}
          >
            <div className="d-table">
              <div className="d-table-cell">
                <div className="container">
                  <VisibilitySensor>
                    {({ isVisible }) => (
                      <div className="main-banner-content text-center">
                        <h3
                          style={{ color: "white" }}
                          className={
                            isVisible
                              ? "animated fadeInUp opacityOne white"
                              : "opacityZero"
                          }
                        >
                          Clinic mick en jet
                        </h3>

                        <p
                          className={
                            isVisible
                              ? "animated fadeInUp opacityOne"
                              : "opacityZero"
                          }
                        >
                          Buiten dat ze goed kunnen korfballen, geven ze ook nog
                          eens geweldig leuke clinics!
                        </p>

                        <div
                          className={
                            isVisible
                              ? "animated fadeInUp opacityOne"
                              : "opacityZero"
                          }
                        >
                          <Link href="/contact">
                            <a className="btn btn-primary">Neem contact op</a>
                          </Link>
                        </div>
                      </div>
                    )}
                  </VisibilitySensor>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="hero-banner overly-6"
            style={{
              backgroundImage: `url(/images/foto-2.jpg)`,
            }}
          >
            <div className="d-table">
              <div className="d-table-cell">
                <div className="container">
                  <VisibilitySensor>
                    {({ isVisible }) => (
                      <div className="main-banner-content text-center">
                        <h3
                          style={{ color: "white" }}
                          className={
                            isVisible
                              ? "animated fadeInUp opacityOne white"
                              : "opacityZero"
                          }
                        >
                          Schoolkorfballes groepen 1,2
                        </h3>

                        <p
                          className={
                            isVisible
                              ? "animated fadeInUp opacityOne"
                              : "opacityZero"
                          }
                        >
                          Lessen voor de kleutergroepen om kangoeroes te werven
                          voor de kangoeroeklup.
                        </p>

                        <div
                          className={
                            isVisible
                              ? "animated fadeInUp opacityOne"
                              : "opacityZero"
                          }
                        >
                          <Link href="/contact">
                            <a className="btn btn-primary">Neem contact op</a>
                          </Link>
                        </div>
                      </div>
                    )}
                  </VisibilitySensor>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="hero-banner overly-6"
            style={{
              backgroundImage: `url(/images/e-roda.jpg)`,
            }}
          >
            <div className="d-table">
              <div className="d-table-cell">
                <div className="container">
                  <VisibilitySensor>
                    {({ isVisible }) => (
                      <div className="main-banner-content text-center">
                        <h3
                          style={{ color: "white" }}
                          className={
                            isVisible
                              ? "animated fadeInUp opacityOne white"
                              : "opacityZero"
                          }
                        >
                          Schoolkorfballes groepen 3 t/m 8
                        </h3>

                        <p
                          className={
                            isVisible
                              ? "animated fadeInUp opacityOne"
                              : "opacityZero"
                          }
                        >
                          Lessen op school zijn belangrijker dan ooit! Wij
                          hebben de kennis en expertise om een succesvolle
                          ledenwerving op te zetten.
                        </p>

                        <div
                          className={
                            isVisible
                              ? "animated fadeInUp opacityOne"
                              : "opacityZero"
                          }
                        >
                          <Link href="/contact">
                            <a className="btn btn-primary">Neem contact op</a>
                          </Link>
                        </div>
                      </div>
                    )}
                  </VisibilitySensor>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default MainBanner;
