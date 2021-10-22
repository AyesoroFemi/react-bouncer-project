
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { SliderWrapper } from './SliderPageStyled';

export default class SliderPage extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
        speed: 500,
        autoplay:true,
        slidesToShow: 1,
        slidesToScroll: 1,
      autoplay: true,
    //   speed: 500,
      arrows: true,
      autoplaySpeed: 2000,
      cssEase: "linear",
      className: "slides"
    };

    return (
      <SliderWrapper>
        <Slider {...settings}>
          <div className="slides-carousel">
                <div className="slide-heading">
                    <h2>IPhone X</h2>
                    <p>
                        Lorem Ipsum is simply dummy text of <br /> the printing and typesetting industry. 
                        Lorem <br />  Ipsum has been the industry's standard <br /> dummy.
                    </p>
                    <a href="#">MORE</a>
                </div>
                <div style={{display:"flex", justifyContent:"end", paddingRight: 200}}>
                    <img style={{objectFit:"contain"}} src="img/Mask.09b36980.png" alt="" />
                </div>
          </div>
          <div className="slides-carousel">
                <div className="slide-heading">
                    <h2>IPhone X</h2>
                    <p>
                        Lorem Ipsum is simply dummy text of <br /> the printing and typesetting industry. 
                        Lorem <br />  Ipsum has been the industry's standard <br /> dummy.
                    </p>
                    <a href="#">MORE</a>
                </div>
                <div style={{display:"flex", justifyContent:"end", paddingRight: 200}}>
                    <img style={{objectFit:"contain"}} src="img/Mask.09b36980.png" alt="" />
                </div>
          </div>
          <div className="slides-carousel">
                <div className="slide-heading">
                    <h2>IPhone X</h2>
                    <p>
                        Lorem Ipsum is simply dummy text of <br /> the printing and typesetting industry. 
                        Lorem <br />  Ipsum has been the industry's standard <br /> dummy.
                    </p>
                    <a href="#">MORE</a>
                </div>
                <div style={{display:"flex", justifyContent:"end", paddingRight: 200}}>
                    <img style={{objectFit:"contain"}} src="img/Mask.09b36980.png" alt="" />
                </div>
          </div>
        </Slider>
      </SliderWrapper>
    );
  }
}