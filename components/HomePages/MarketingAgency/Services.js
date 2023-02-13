import React from "react";
import Link from "next/link";

const Services = () => {
  return (
    <>
      <div className="bg-fcfbfb pt-100 pb-70">
        <div className="container">
          <div className="row justify-content-center">
            <div
              className="col-lg-3 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="100"
            >
              <div className="service-card-one height-100 white-bg text-center">
                <i className="pe-7s-smile bg-13c4a1"></i>
                <h3>
                  <Link href="/service-details">
                    <a>Klantervaringen</a>
                  </Link>
                </h3>
                <p>
                  Lees hier de ervaringen van de tevreden klanten van Korfbal
                  kids en wellicht staat u ook snel hierbij.
                </p>
              </div>
            </div>

            <div
              className="col-lg-3 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              <div className="service-card-one height-100 white-bg text-center">
                <i className="pe-7s-users bg-fc3549"></i>
                <h3>
                  <Link href="/service-details">
                    <a>Partners</a>
                  </Link>
                </h3>
                <p>
                  KorfbalKids is partner van het KNKV. Wij verzorgen onder
                  andere trainersclinics en schoolkorfballessen in samenwerking
                  met het KNKV.
                </p>
              </div>
            </div>

            <div
              className="col-lg-3 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="300"
            >
              <div className="service-card-one height-100 white-bg text-center">
                <i className="pe-7s-star bg-6610f2"></i>
                <h3>
                  <Link href="/service-details">
                    <a>Acties</a>
                  </Link>
                </h3>
                <p>Op dit moment lopen er geen acties.</p>
              </div>
            </div>

            <div
              className="col-lg-3 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="400"
            >
              <div className="service-card-one height-100 white-bg text-center">
                <i className="pe-7s-light bg-ffb700"></i>
                <h3>
                  <Link href="/service-details">
                    <a>Tips</a>
                  </Link>
                </h3>
                <p>
                  Lees hier de tips van Korfbal kids voor het werven van leden
                  voor jouw sportclub.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
