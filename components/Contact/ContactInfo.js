import React from "react";

const ContactInfo = ({ email, adres, telefoonnummer }) => {
  return (
    <>
      <div className="contact-info-area pt-100 pb-70">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="contact-info-box min-height-contact">
                <div className="icon">
                  <i className="pe-7s-mail"></i>
                </div>
                <h3>E-mail</h3>
                <p>
                  <a href="mailto:jelmerknossen@korfbalkids.nl">{email}</a>
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="contact-info-box min-height-contact">
                <div className="icon">
                  <i className="pe-7s-map-2"></i>
                </div>
                <h3>Adres</h3>
                <div dangerouslySetInnerHTML={{ __html: adres }} />
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="contact-info-box min-height-contact">
                <div className="icon">
                  <i className="pe-7s-call"></i>
                </div>
                <h3>Telefoonnummer</h3>
                <p>
                  <a href={`tel:${telefoonnummer}`}>{telefoonnummer}</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactInfo;
