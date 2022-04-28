/* eslint-disable no-unused-vars */
import React from "react";
import heroImg from "../../data";
import {FiMoreVertical} from 'react-icons/fi';
import ButtonFill from '../ButtonFill';

function SliderContent({ activeIndex, sliderImage }) {
  return (
    <section>
      {heroImg.map((slide, index) => (
        <div
          key={index}
          className={index === activeIndex ? "slides active" : "inactive"}
        >
          <img className="slide-image" src={slide.image} alt="" />
          <h2 className="slide-title">{slide.text}</h2>
        </div>
      ))}
    </section>
  );
}

export default SliderContent;
