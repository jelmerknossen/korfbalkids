import React, { useState } from "react";
import FsLightbox from "fslightbox-react";

const AboutContent = () => {
  const [toggler, setToggler] = useState(false);
  return (
    <>
      <div className="about-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-md-12">
              <div className="about-content about-content-two">
                <div className="section-title">
                  <p>
                    Welkom op de pagina voor verenigingen. Korfbal Kids heeft
                    veel ervaring in het begeleiden van korfbalverenigingen.
                    Hieronder vind je de producten, die wij bieden aan
                    verenigingen.
                  </p>
                </div>

                <div className="about-text">
                  <h4>Schoolkorfballessen voor de groepen 3 t/m 8</h4>
                  <p>
                    Korfballessen op school is een onmisbaar onderdeel van elke
                    korfbalvereniging, zo niet het belangrijkste onderdeel. Je
                    kunt als korfbalvereniging niet meer verwachten, dat
                    kinderen zich zomaar aanmelden. Je zult daarom als
                    vereniging actief de scholen moeten benaderen. Op deze
                    manier komen kinderen in aanraking met de korfbalsport. Maar
                    hoe geef je dan een leuke les? KorfbalKids geeft al vanaf
                    2010 korfballessen op scholen in heel Nederland. Wij zorgen
                    voor een eerste leuke kennismaking met de korfbalsport!
                    Succesbeleving en plezier staan hier centraal.
                  </p>
                </div>

                <div className="about-text">
                  <h4>Clinic van Mick Snel of Jet Hendriks</h4>
                  <p>
                    Wil je graag iets gaafs doen voor een jeugdteam of een
                    spectaculaire opening van het seizoen maken? Bij KorfbalKids
                    werken we vaak samen met Jet Hendriks en Mick Snel, maar in
                    overleg kunnen we kijken of we een andere leaguespeler
                    kunnen regelen.
                  </p>
                </div>

                <div className="about-text">
                  <h4>Lessen voor de groepen 1,2 (Kangoeroes)</h4>
                  <p>
                    KorfbalKids heeft een speciaal lesprogramma voor kleuters
                    ontwikkeld. Je kunt niet vroeg genoeg starten om kinderen
                    enthousiast te maken voor de korfbalsport. Zoek je iemand
                    die voor 30 kleuters in een speelzaal een geweldige les kan
                    verzorgen, dan ben je aan het juiste adres.
                  </p>
                </div>

                <div className="about-text">
                  <h4>Clinic voor trainers</h4>
                  <p>
                    Als de leden eenmaal binnen zijn, dan is het ook belangrijk
                    om ze te behouden. De trainers spelen hierbij een centrale
                    rol. Sta je voor plezier of juist prestatie, Korfbal Kids
                    kan helpen om de trainers hiervoor op te leiden. In
                    gezamenlijk overleg bepalen we, wat we gaan trainen. We
                    laten jullie graag zien hoe je een bepaald thema kunt
                    uitdiepen. Hoe je een oefening korfbalgericht maakt en niet
                    aan een uurtje “opvulling” doet.
                  </p>
                </div>

                <div className="about-text">
                  <h4>Giga Kangoeroedag</h4>
                  <p>
                    Als mede ontwikkelaar van de Giga Kangoeroedag zijn wij DE
                    expert in begeleiding van deze dag. Een geweldige manier om
                    kinderen te werven en scholen aan je te binden. Of het nu
                    voor 200 of 1000 kleuters is, wij begeleiden jullie naar een
                    mooi resultaat.
                  </p>
                </div>

                <div className="about-text">
                  <h4>Clinic voor spelers</h4>
                  <p>
                    Zit je met een specifiek korfbal probleem, of wil je gewoon
                    een leuke clinic aan je spelers geven? We kunnen jullie
                    beide bieden. In overleg kunnen we een thema voor jullie
                    spelers bepalen. Dat kan een korfbalthema zijn of gewoon
                    plezier maken!
                  </p>
                </div>

                <div className="about-text">
                  <h4>FF Bewegen Clinic voor Kangoeroe trainers</h4>
                  <p>
                    De doelgroep kangoeroes vraagt andere kwaliteiten van de
                    trainers. Bij de Kangoeroes staat: plezier, bewegen en
                    samenwerken centraal. Het gebruik van fantasie is hierbij
                    erg belangrijk. Wij stomen jullie kangoeroe trainers klaar
                    om leuke Kangoeroe clinics te geven!
                  </p>
                </div>

                <div className="about-text">
                  <h4>Clinic voor spelers</h4>
                  <p>
                    Zit je met een specifiek korfbal probleem, of wil je gewoon
                    een leuke clinic aan je spelers geven? We kunnen jullie
                    beide bieden. In overleg kunnen we een thema voor jullie
                    spelers bepalen. Dat kan een korfbalthema zijn of gewoon
                    plezier maken!
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-7 col-md-6 mt-30">
              <div className="about-image">
                <img
                  src="/images/ballen.jpeg"
                  alt="image"
                  className="rounded-10"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutContent;
