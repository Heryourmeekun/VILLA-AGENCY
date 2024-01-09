import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import banner4 from "../assets/images/banner-04.png";
import banner5 from "../assets/images/banner-05.png";
import banner6 from "../assets/images/banner-06.png";
export default function SimpleSlider() {
  var settings = {
    arrows: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="slide">
      <Slider {...settings}>
        <div>
          <img
            src={banner4}
            className="
    slide1"
          />
        </div>
        <div>
          <img
            src={banner5}
            className="
    slide1"
          />
        </div>
        <div>
          <img
            src={banner6}
            className="
    slide1"
          />
        </div>
      </Slider>
    </div>
  );
}
