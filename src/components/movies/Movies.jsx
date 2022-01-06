import React from "react";
import movieList1 from "../json/movielist1";
import movieList2 from "../json/movielist2";
import "./style.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import styles from "./style.module.scss";

export default function Movies() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    // dotsClass: styles.button__bar
  };

  return (
    <div className="movies-container">
      <div>
      <h1>New releases</h1>
        <Slider {...settings}>
          {movieList1.map((item, index) => (
            <img
              className="movies-container-image"
              key={index}
              src={item.img}
              alt="poster"
            />
          ))}
        </Slider>
      </div>
      <div>
      <h1>New releases</h1>
        <Slider {...settings}>
          {movieList2.map((item, index) => (
            <img
              className="movies-container-image"
              key={index}
              src={item.img}
              alt="poster"
            />
          ))}
        </Slider>
      </div>
    </div>
  );
}
