import React from "react";

const ContactForm = () => {
  return (
    <>
      <div className="contact-form pb-70">
        <form name="contact" action="/thanks" method="POST" data-netlify="true">
          <input type="hidden" name="contact" value="contactForm" />
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Naam"
                    className="form-control"
                    required
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group">
                  <input
                    type="text"
                    name="email"
                    placeholder="E-mail"
                    className="form-control"
                    required
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group">
                  <input
                    type="text"
                    name="number"
                    placeholder="Telefoonnummer"
                    className="form-control"
                    required
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group">
                  <input
                    type="text"
                    name="subject"
                    placeholder="Onderwerp"
                    className="form-control"
                    required
                  />
                </div>
              </div>
              <div className="col-lg-12 col-md-12">
                <div className="form-group">
                  <textarea
                    name="text"
                    cols="30"
                    rows="6"
                    placeholder="Bericht..."
                    className="form-control"
                    required
                  />
                </div>
              </div>
              <div className="col-lg-12 col-sm-12">
                <button type="submit" className="btn btn-primary">
                  Verstuur bericht
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default ContactForm;
