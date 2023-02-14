import React, { useState } from "react";
import FsLightbox from "fslightbox-react";

const TipContent = () => {
  const [toggler, setToggler] = useState(false);
  return (
    <>
      <div className="about-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 col-md-12">
              <div className="about-image">
                <img
                  src="/images/foto-2.jpg"
                  alt="image"
                  className="rounded-10"
                />
              </div>
            </div>

            <div className="col-lg-7 col-md-12">
              <div className="about-content about-content-two">
                <div className="section-title">
                  <h2>10 succesfactoren voor de KangoeroeKlup</h2>
                  <div class="about-text">
                    <ul>
                      <li>
                        <i class="fa-solid fa-circle-check" />
                        Enthousiaste begeleiders Kinderen en ouders worden
                        enthousiast van begeleiders die met plezier trainen
                        staan te geven!
                      </li>
                      <li>
                        <i class="fa-solid fa-circle-check" />
                        Zelfstandige ondernemende KangoeroeKlup Een ondernemende
                        KangoeroeKlup zorgt voor ledenwinst. Geef regelmatig
                        clinics aan de groepen 1,2. Hiervoor kunt u ook Korfbal
                        Kids inschakelen.
                      </li>
                      <li>
                        <i class="fa-solid fa-circle-check" />
                        Afwisselende spellen/elke week een “happening” Maak van
                        elke week een feestje.
                      </li>
                      <li>
                        <i class="fa-solid fa-circle-check" />
                        Ken de ouders en kinderen Maak het persoonlijk door de
                        namen van kinderen en ouders te leren.
                      </li>
                      <li>
                        <i class="fa-solid fa-circle-check" />
                        Schoolouders Zorg voor ouders op scholen die kinderen
                        naar je KangoeroeKlup sturen.
                      </li>
                      <li>
                        <i class="fa-solid fa-circle-check" />
                        Gegevens noteren Noteer altijd gegevens. Dat kun je op
                        een laagdrempelige manier vragen.
                      </li>
                      <li>
                        <i class="fa-solid fa-circle-check" />
                        Mailing lijst Maak een mailinglijst met mailadressen.
                        Stuur af en toe een mail dat zaterdag de KangoeroeKlup
                        er weer is.
                      </li>
                      <li>
                        <i class="fa-solid fa-circle-check" />
                        Verwen de ouders Ontvang de ouders netjes en biedt ze
                        koffie en thee.
                      </li>
                      <li>
                        <i class="fa-solid fa-circle-check" />
                        Giga Kangoeroedag Organiseer een Giga Kangoeroedag!
                      </li>
                      <li>
                        <i class="fa-solid fa-circle-check" />
                        Blijf Flyeren Flyer af en toe op scholen om leden te
                        werven. Bij scholen die meedoen aan de Giga Kangoeroedag
                        mag dit vaak al snel.
                      </li>
                    </ul>
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

export default TipContent;
