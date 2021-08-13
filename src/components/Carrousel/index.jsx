
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
            pagination={{
                clickable: true
            }} 
            autoplay={{
                "delay": 1500,
                "disableOnInteraction": false
            }}
            className="mySwiper">
            <SwiperSlide><img src="/img/carrousel/carrousel1.png" /></SwiperSlide>
            <SwiperSlide><img src="/img/carrousel/carrousel2.png" /></SwiperSlide>
            <SwiperSlide><img src="/img/carrousel/carrousel3.png" /></SwiperSlide>
            <SwiperSlide><img src="/img/carrousel/carrousel4.png" /></SwiperSlide>
        </Swiper>
    </>
    )
}
export default Carousel