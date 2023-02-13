import React, { useState } from "react";
import FsLightbox from "fslightbox-react";

const AboutContent = () => {
  const [toggler, setToggler] = useState(false);
  return (
    <>
      <div className="about-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-12">
              <div className="about-image">
                <img
                  src="/images/jelmer.jpg"
                  alt="image"
                  className="rounded-10"
                />
              </div>
            </div>

            <div className="col-lg-7 col-md-12">
              <div className="about-content about-content-two">
                <div className="section-title">
                  <h2>Wie ben ik?</h2>
                  <p>
                    Mijn naam is Jelmer Knossen. Na in 2010 mijn opleiding Sport
                    Management en Ondernemen te hebben afgerond ben ik begonnen
                    in de sales. Dit was niets voor mij en gelukkig kon ik
                    daarna bij de korfbalbond aan de slag als sportconsulent.
                    Hier heb ik met heel veel plezier twee jaar lang de 100
                    korfbalverenigingen van noord west ondersteund. Ik hielp met
                    name bij de ledenwerving en het opleiden van jeugdtrainers
                    en spelers. De trainingen op school is het belangrijkste
                    onderdeel van een wervingsactiviteit, zoals schoolkorfbal is
                    mijn ervaring. Op dit moment werk ik naast KorfbalKids ook
                    in Rotterdam bij Stichting Rotterdam Sportsupport. Ik ben
                    een aantal jaar combinatiefunctionaris korfbal geweest van
                    de 10 Rotterdamse korfbalverenigingen. Nu werk is als
                    projectcoördinator, om de Rotterdamse kinderen te stimuleren
                    om meer en structureel te gaan sporten bij een
                    sportvereniging.
                    <br />
                    <br />
                    Ik ben zelf ook actief vrijwilliger bij de korfbalvereniging
                    Roda Westzaan. Ik geef al jarenlang trainen en organiseer
                    veel jeugdactiviteiten. Ik heb KorfbalKids opgericht, omdat
                    ik het belangrijk vind dat elk kind met plezier aan de
                    korfbalsport deelneemt. Met mijn clinics op scholen en
                    verenigingen probeer ik hier aan bij te dragen. Het werven
                    van kinderen en het opleiden van trainers zijn twee
                    belangrijke aandachtspunten bij veel korfbalverenigingen.
                    Als de leden binnen zijn is er vaak slecht zicht op, of ze
                    het ook leuk vinden in een team. Goede trainers leveren hier
                    een belangrijke bijdrage aan.
                  </p>
                </div>

                <div className="about-text">
                  <h4>Missie</h4>
                  <p>
                    De missie van Korfbal Kids is om alle kinderen met plezier
                    te laten korfballen. Via scholen en verenigingen komen wij
                    in contact met kinderen. Zowel op de school, als op de
                    vereniging is het belangrijk dat de kinderen plezier in de
                    korfbalsport hebben.
                  </p>
                </div>

                <div className="about-text">
                  <h4>Visie</h4>
                  <p>
                    Door trainers op te leiden en clinics te geven op scholen
                    proberen we onze missie te bereiken. Het doel is daarom
                    altijd om een structurele relatie op te bouwen met de school
                    of de vereniging. Dan kunnen we namelijk echt wat betekenen.
                    We zijn daarnaast ook altijd bezig met het ontwikkelen van
                    onze clinics om deze perfect te laten aansluiten op de
                    huidige behoeften van de maatschappij.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutContent;
