import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);
import baseUrl from "../../utils/baseUrl";

const alertContent = () => {
  MySwal.fire({
    title: "Congratulations!",
    text: "Your message was successfully send and will back to you soon",
    icon: "success",
    timer: 2000,
    timerProgressBar: true,
    showConfirmButton: false,
  });
};

// Form initial state
const INITIAL_STATE = {
  name: "",
  email: "",
  number: "",
  subject: "",
  text: "",
};

const ContactForm = () => {
  return (
    <>
      <div className="contact-form pb-70">
        <form name="contact" method="POST" data-netlify="true">
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
