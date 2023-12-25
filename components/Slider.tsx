"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import Image from "next/image";

const Slider = () => {
  return (
    <>
      <Swiper
        slidesPerView={3}
        breakpoints={{
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          320: {
            slidesPerView: 2,
            spaceBetween: 5,
          },
        }}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image
            src="/static/figure2.png"
            width={231}
            height={473}
            alt="figure"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/static/figure3.png"
            width={231}
            height={473}
            alt="figure"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/static/figure4.png"
            width={231}
            height={473}
            alt="figure"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/static/figure5.png"
            width={231}
            height={473}
            alt="figure"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/static/figure6.png"
            width={231}
            height={473}
            alt="figure"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/static/figure7.png"
            width={231}
            height={473}
            alt="figure"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/static/figure8.png"
            width={231}
            height={473}
            alt="figure"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/static/figure9.png"
            width={231}
            height={473}
            alt="figure"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider;
