import React from "react";
import Link from "next/link";

const ErrorContent = () => {
  return (
    <>
      <div className="error-area ptb-100">
        <div className="container">
          <div className="error-content">
            <h3>Error 404 : pagina niet gevonden</h3>
            <p>De pagina die je wilt bezoeken bestaat niet</p>
            <div className="back-btn">
              <Link href="/">
                <a className="btn btn-primary">Terug naar home</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ErrorContent;
