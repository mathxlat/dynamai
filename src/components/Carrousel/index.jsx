
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

const carrusel = [
    {
        img: "/img/carrousel/img_carrusel_1.webp",
        title: "EN ARGENTINA ALREDEDOR DEL 48% DE LOS NIÑOS NACE Y CRECE BAJO LA LÍNEA DE POBREZA.",
        description: "(*Observatorio de la Deuda Social de la UCA)"
    },
    {
        img: "/img/carrousel/img_carrusel_2.webp",
        title: "CERCA DEL 41% DE LAS EMBARAZADAS NO REALIZA LA CANTIDAD DE CONSULTAS MÉDICAS RECOMENDADAS.",
        description: "(*Observatorio de la Deuda Social de la UCA)"
    },
    {
        img: "/img/carrousel/img_carrusel_3.webp",
        title: "UN 50% DE LOS PADRES DE LOS ESTRATOS SOCIALES MÁS BAJOS NO LEE CUENTOS NI COMPARTE HISTORIAS ORALES CON SUS HIJOS/AS.",
        description: "(*Observatorio de la Deuda Social de la UCA)"
    },
    {
        img: "/img/carrousel/img_carrusel_4.webp",
        title: "ALREDEDOR DEL 65% DE LOS NIÑOS CARECE DE UNA DIETA BALANCEADA.",
        description: "(*Observatorio de la Deuda Social de la UCA)"
    },
]

function Carousel() {
    return (
    <>
        <Swiper 
            pagination={{
                clickable: true
            }} 
            autoplay={{
                "delay": 8500,
                "disableOnInteraction": false
            }}
            className="mySwiper">
            {carrusel.map( item => (
                <SwiperSlide key={item.title}>
                    <img className="select-none" src={item.img} alt="imagen dynamai" />
                    <div className="select-none">
                        <p className="text-white uppercase text-4xl w-3/6 font-bold">
                            {item.title}
                        </p>
                        <p className="text-white uppercase text-2xl font-normal">
                            {item.description}
                        </p>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    </>
    )
}
export default Carousel