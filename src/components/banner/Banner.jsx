import React from "react";
import "./style.scss";
import sliderBanner from "../json/sliderBanner";
import { useState } from "react";

const len = sliderBanner.length - 1;

export default function Banner() {


  const [indexActive, setIndexActive] = useState(0);
  const prevSlide = () => {
    setIndexActive(indexActive <= 0 ? len : indexActive - 1);
  };
  const nextSlide = () => {
    setIndexActive(indexActive == len ? 0 : indexActive + 1);
  };



  return (
    <div className="slider-container">
      {sliderBanner.map((item, index) => (
        <div
          className={
            index == indexActive ? "banner-container active " : "inactive"
          }
          style={{
            background: `linear-gradient(to bottom, rgba(0, 0, 0, 0), #151515), url(${item.urls}) `,
          }}
          key={index}
        >
          <div className="banner">
            <img src={item.img} alt="banner" />
            <p>{item.description}</p>
            <button>Watch</button>
          </div>
        </div>
      ))}
      <div className="arrows">
        <span className="prev" onClick={prevSlide}>
          &#10094;
        </span>
        <span className="next" onClick={nextSlide}>
          &#10095;
        </span>
      </div>
    </div>
  );
}
