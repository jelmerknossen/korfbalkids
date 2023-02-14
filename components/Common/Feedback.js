import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

const Feedback = () => {
  return (
    <>
      <div className="feedback-area ptb-100">
        <div className="container">
          <div className="feedback-list">
            <div className="quotes-icon">
              <img src="/images/left-quote-white.png" alt="icon" />
            </div>

            <Swiper
              pagination={{
                clickable: true,
              }}
              spaceBetween={30}
              slidesPerView={1}
              modules={[Pagination]}
              className="feedback-slides"
            >
              <SwiperSlide>
                <div className="single-feedback">
                  <p>
                    Door de deskundige inzet/organisatie van Jelmer tijdens de
                    clinics voor de schooljeugd is het enthousiasme voor de
                    sport en onze club binnen de gemeente gegroeid. Het opzetten
                    en uitvoering van de Giga-kangoeroedag is door de
                    ondersteuning van Jelmer een groot succes geworden. Jelmer
                    heeft een grote rol bij de advisering en uitvoering van ons
                    plan voor groei binnen onze jeugdafdeling van de club. Wij
                    zijn zeer enthousiast over de werkwijze van Jelmer;
                    betrokken, enthousiast, kundig en gestructureerd. Hij heeft
                    clinics verzorgt voor basisscholen namens onze club en
                    clinics /trainingen gegeven aan onze eigen jeugdleden.
                    Inspirerend en zeer goed voor de korfballende jeugd. Wij
                    betrekken Jelmer nauw bij onze plannen voor de jeugd van
                    onze vereniging.
                  </p>

                  <div className="bar"></div>

                  <h3>Janine Schoorl</h3>
                  <span>Functie ledenwerfcommissie Helios</span>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="single-feedback">
                  <p>
                    Ik heb vernomen dat de clinic met veel enthousiasme is
                    ontvangen. De trainers in spé waren zeer te spreken over de
                    uitdagende spelvormen en de tips die je ze hebt meegegeven.
                    Dank daarvoor!
                  </p>

                  <div className="bar"></div>

                  <h3>Jelle Brinks</h3>
                  <span>Combinatiefunctionaris Almelo</span>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feedback;
