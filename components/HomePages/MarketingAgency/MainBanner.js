import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Link from "next/link";
import VisibilitySensor from "react-visibility-sensor";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from "swiper";

const MainBanner = ({ sliderData }) => {
  const [toggler, setToggler] = useState(false);

  const sliderCollection = sliderData.map((slide) => (
    <SwiperSlide key={slide.id}>
      <div
        className="hero-banner overly-6"
        style={{
          backgroundImage: `url(${slide.plaatje.url})`,
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
                      {slide.titel}
                    </h1>

                    <p
                      className={
                        isVisible
                          ? "animated fadeInUp opacityOne"
                          : "opacityZero"
                      }
                    >
                      {slide.subtitel}
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
  ));
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
        {sliderCollection}
      </Swiper>
    </>
  );
};

export default MainBanner;
