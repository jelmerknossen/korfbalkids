import React from "react";
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import korfbalHeader1 from "../images/korfbal-header.jpg";
import korfbalHeader2 from "../images/e-roda.jpg";

const images = [korfbalHeader1, korfbalHeader2];

const Slideshow = () => {
  return (
    <div className="slide-container">
      <Zoom scale={0.4}>
        {images.map((each, index) => (
          <img
            class="max-h-fit"
            key={index}
            style={{ width: "100%" }}
            src={each}
          />
        ))}
      </Zoom>
    </div>
  );
};

export default Slideshow;
