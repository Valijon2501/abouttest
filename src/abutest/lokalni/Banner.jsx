// import React from "react";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { AboutStyle } from "../AboutStyle";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import "./styles.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Banner = () => {
  return (
    <>
      <AboutStyle>
        {/* <div className="container"> */}
        <h5>Banner</h5>
        <Swiper
          slidesPerView={3}
          spaceBetween={15}
          loop={true}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              src="https://cdn.dribbble.com/users/579758/screenshots/5546963/18-11-25-s.jpg?resize=400x300&vertical=center"
              alt=""
              loading="lazy"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://cdn3.vectorstock.com/i/1000x1000/32/32/online-test-word-concepts-banner-vector-28883232.jpg"
              alt=""
              loading="lazy"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://static.vecteezy.com/system/resources/previews/022/179/943/original/blood-test-modern-concept-design-flat-banner-vector.jpg"
              alt=""
              loading="lazy"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://www.shutterstock.com/image-vector/online-test-banner-start-testing-260nw-2363347361.jpg"
              alt=""
              loading="lazy"
            />
          </SwiperSlide>
        </Swiper>
        {/* </div> */}
      </AboutStyle>
    </>
  );
};
export default Banner;
