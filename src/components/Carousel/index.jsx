
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"

import "./styles.css";

import SwiperCore, {
    Autoplay,
    Pagination
} from 'swiper/core';

SwiperCore.use([Pagination, Autoplay]);


function Carousel() {
    return (
    <>
        <Swiper 
            pagination={true} 
            autoplay={{
                "delay": 10500,
                "disableOnInteraction": false
            }}
            className="mySwiper">
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            <SwiperSlide>Slide 5</SwiperSlide>
            <SwiperSlide>Slide 6</SwiperSlide>
            <SwiperSlide>Slide 7</SwiperSlide>
            <SwiperSlide>Slide 8</SwiperSlide>
            <SwiperSlide>Slide 9</SwiperSlide>
        </Swiper>
    </>
    )
}
export default Carousel