import React from "react";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer className="footer-area">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-3 col-md-12 col-sm-12">
              <div className="single-footer-widget">
                <div className="logo">
                  <Link href="/">
                    <a>
                      <img
                        width="130"
                        src="/images/logo-korfbalkids.jpeg"
                        alt="Logo"
                      />
                    </a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="single-footer-widget ml-4 pl-5">
                <h3>Pagina's</h3>

                <ul className="list">
                  <li>
                    <Link href="/acties">
                      <a>Acties</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/partners">
                      <a>Partners</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/klantervaringen">
                      <a>Klantervaringen</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/tarieven">
                      <a>Tarieven</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact">
                      <a>Contact</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/over-korfbalkids">
                      <a>Over KorfbalKids</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/multimedia">
                      <a>Filmmateriaal</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/verenigingen">
                      <a>Verenigingen</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a>Home</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="single-footer-widget">
                <h3>Neem contact op</h3>
                <ul className="get-in-touch">
                  <li>
                    <i className="fa-solid fa-headset"></i>
                    <a href="tel:0610365180">06 10 36 51 80</a>
                  </li>
                  <li>
                    <i className="fa-solid fa-envelope"></i>
                    <a href="mailto:hello@pungent.com">
                      jelmerknossen@korfbalkids.nl
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="copyright-area">
          <div className="container"></div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
