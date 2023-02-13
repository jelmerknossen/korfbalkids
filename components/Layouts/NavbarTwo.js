import React from "react";
import Link from "../../utils/ActiveLink";

const NavbarTwo = () => {
  const [menu, setMenu] = React.useState(true);
  const toggleNavbar = () => {
    setMenu(!menu);
  };
  React.useEffect(() => {
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
  });

  const classOne = menu
    ? "collapse navbar-collapse mean-menu"
    : "collapse navbar-collapse show";
  const classTwo = menu
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  return (
    <>
      <div id="navbar" className="navbar-area navbar-style-2">
        <nav className="navbar navbar-expand-md navbar-light">
          <div className="container-fluid">
            <Link href="/">
              <a className="navbar-brand">
                <img
                  src="/images/logo-korfbalkids.jpeg"
                  alt="KorfbalKids"
                  width="150"
                />
              </a>
            </Link>

            {/* Toggle navigation */}
            <button
              onClick={toggleNavbar}
              className={classTwo}
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="icon-bar top-bar"></span>
              <span className="icon-bar middle-bar"></span>
              <span className="icon-bar bottom-bar"></span>
            </button>

            <div className={classOne} id="navbarSupportedContent">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link href="/">
                    <a className="nav-link">Home</a>
                  </Link>
                </li>

                <li className="nav-item">
                  <Link href="#">
                    <a className="nav-link">Verenigingen</a>
                  </Link>
                </li>

                <li className="nav-item">
                  <Link href="/about" activeClassName="active">
                    <a className="nav-link">Filmmateriaal</a>
                  </Link>
                </li>

                <li className="nav-item">
                  <Link href="/over-korfbalkids">
                    <a className="nav-link">Over KorfbalKids</a>
                  </Link>
                </li>

                <li className="nav-item">
                  <Link href="/tarieven">
                    <a className="nav-link">Tarieven</a>
                  </Link>
                </li>

                <li className="nav-item">
                  <Link href="/contact">
                    <a className="nav-link">Contact</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default NavbarTwo;
