"use client"; // <===== REQUIRED

import React from "react";

// Swiper components, modules and styles
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Our custom button component
import SliderButtons from "./SliderButtons";

interface Slide {
  id: number;
  title: string;
  tagline: string;
  image: string;
  buttons: ButtonProps[];
}

interface ButtonProps {
  id: number;
  text: string;
  link: string;
  type: string;
}

interface DemoSliderProps {
  data: Slide[];
}

const DemoSlider: React.FC<DemoSliderProps> = ({ data }) => {
  return (
   
          <Swiper
            // navigation
            // pagination={{ type: "bullets", clickable: true }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop={true}
            modules={[Autoplay]}
          >
                  <SwiperSlide>
                   
                  <div className="slider_box">
                      <img
                        src="images/dominik-vanyi-Mk2ls9UBO2E-unsplash.jpg"
                        alt=""
                      />
                      <div
                        className="text_box col-lg-6 col-12 slide-top slide_1 text-animation animate__animated animate__fadeInUp"
                      >
                        <span>shop the very best</span>
                        <h2>get all mager brands</h2>
                        <p>shipped worldwide</p>
                      </div>
                    </div>
              
              </SwiperSlide>

              <SwiperSlide>
                   <div className="slider_box">
                      <img
                        src="images/ricardo-gomez-angel-F2iCP_knaj8-unsplash.jpg"
                        alt=""
                      />
                      <div
                        className="text_box col-lg-6 col-12 slide-top slide_2 text-animation animate__animated animate__fadeInUp"
                      >
                        <span>high end extreme quality</span>
                        <h2>spares for minig and construction equipment</h2>
                        <p>all major brands</p>
                      </div>
                    </div>
              </SwiperSlide>

              <SwiperSlide>
                   
              <div className="slider_box">
                      <img
                        src="images/vladimir-patkachakov-ZAP1duyEIR4-unsplash.jpg"
                        alt=""
                      />
                      <div
                        className="text_box col-lg-6 col-12 slide-top slide_3 text-animation animate__animated animate__fadeInUp"
                      >
                        <span>shop the very best</span>
                        <h2>parts & accessories</h2>
                        <p>all major engine brands</p>
                      </div>
                    </div>
                  
              </SwiperSlide>


          </Swiper>
       
  );
};

export default DemoSlider;
