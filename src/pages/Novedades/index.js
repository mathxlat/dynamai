import { Disclosure, Transition } from '@headlessui/react';
import React from 'react'
import { Helmet } from 'react-helmet';

const data = [
    {
        id: 1,
        date: 'ENERO | 2021',
        title: 'DESARROLLO DE LA PRIMERA VERSIÓN FUNCIONAL',

    },
    {
        id: 2,
        date: 'JULIO | 2021',
        title: 'DESARROLLO DE LA PRIMERA VERSIÓN FUNCIONAL'
    },
    {
        id: 3,
        date: 'NOVIEMBRE | 2021',
        title: 'DESARROLLO DE LA PRIMERA VERSIÓN FUNCIONAL'
    },
    {
        id: 4,
        date: 'DICIEMBRE | 2021',
        title: 'DESARROLLO DE LA PRIMERA VERSIÓN FUNCIONAL'
    },
];

const dataReverse = data.reverse();

const LeftTimeline = ( { date, valor = false } ) => (
    <div className="relative w-full md:w-1/2">
        <div className="flex justify-between max-w-full">
            <div className="flex absolute items-center order-1 left-2 md:left-full md:-ml-4 top-0 bg-acento-2 shadow-xl min-w-max w-8 h-8 md:w-10 md:h-10 rounded-full">
            </div>

            {
                    valor && 
                    (
                        <div className="flex justify-center items-center absolute order-1 -right-9 top-2/3 bg-white shadow-xl w-16 h-16 rounded-full">
                            <p className="text-base text-acento-2">
                                2021
                            </p>
                        </div>
                    )
            }

            <div className="flex md:flex-col bg-white md:mt-4 mb-20 ml-14 md:ml-0 md:mr-6 max-w-full md:max-w-sm xl:max-w-md relative rounded-xl shadow-xl md:shadow-2xl overflow-hidden">
                <p className="absolute uppercase text-xs font-bold md:font-normal md:text-base text-secundario-1 md:text-white top-2 md:top-5 right-2 md:right-5">
                    { date }
                </p>
                <img className="w-28 h-32 md:w-full md:h-full object-cover md:object-contain"
                    src="/img/carrousel/img_carrusel_1.webp" 
                    alt="novedades" 
                />
                <div className="flex flex-row pt-6 md:pt-0 md:flex-row justify-between items-start md:items-center relative">
                    <p className="p-3 py-3 md:py-0 md:p-5 text-xs md:text-base font-bold uppercase">
                        DESARROLLO DE LA PRIMERA VERSIÓN FUNCIONAL
                    </p>
                    <img 
                        className="w-7 h-7 m-2 self-end md:self-auto md:w-10 md:h-10 md:m-5"
                        src="/img/icons/ver-mas.svg"
                        alt="ver mas" 
                    />
                </div>
            </div>
        </div>
    </div>
)
const RightTimeline = ( { date, valor = false } ) => (
    <Disclosure as="div" className="relative w-full md:w-1/2 self-end">
        {({ open }) => (

            <div className="flex justify-end max-w-full relative">
            <div className="flex absolute items-center order-1 left-2 md:-left-4 top-0 bg-acento-2 shadow-xl min-w-max w-8 h-8 md:w-10 md:h-10 rounded-full">
            </div>

            {valor && 
                (
                    <div className="flex justify-center items-center absolute order-1 -right-9 top-2/3 bg-white shadow-xl w-16 h-16 rounded-full">
                        <p className="text-base text-acento-2">
                            2021
                        </p>
                    </div>
                )}

            <div className="flex flex-col transition bg-white order-1 md:mt-4 mb-20 ml-14 md:ml-8 md:mr-6 max-w-full md:max-w-sm xl:max-w-md relative rounded-xl shadow-xl md:shadow-2xl overflow-hidden">
                <div className="flex md:flex-col">
                    <p className="absolute uppercase font-bold md:font-normal text-base text-secundario-1 md:text-white top-2 md:top-5 right-2 md:right-5">
                        { date }
                    </p>
                    <img className="w-28 h-32 md:w-full md:h-full object-cover md:object-contain"
                        src="/img/carrousel/img_carrusel_1.webp" 
                        alt="novedades" 
                        />
                    <div className="flex flex-row pt-6 md:px-5 md:pt-0 md:flex-row justify-between items-start md:items-center relative">
                        <p className="p-3 py-3 md:p-3 md:py-5 text-base font-bold uppercase">
                            DESARROLLO DE LA PRIMERA VERSIÓN FUNCIONAL
                        </p>
                        <Disclosure.Button className="self-end md:self-auto">
                            <img 
                                className="w-7 h-7 absolute md:relative right-2 bottom-2 md:right-2 md:bottom-0 self-end md:self-auto md:w-10 md:h-10"
                                src="/img/icons/ver-mas.svg"
                                alt="ver mas" 
                                />
                        </Disclosure.Button>
                    </div>
                </div>
                <Transition
                    show={open}
                    enter="transition duration-300 ease-out transform"
                    enterFrom="scale-50 opacity-0"
                    enterTo="scale-100 opacity-100"
                    leave="transition duration-200 ease-out transform"
                    leaveFrom="scale-100 opacity-100"
                    leaveTo="scale-50 opacity-0"
                >
                <Disclosure.Panel className='flex flex-col max-w-full sm:max-w-lg md:max-w-full md:pt-0 md:py-6 justify-between items-start md:items-center relative transition-all duration-300 ease-in-out'>
                        <p className="p-3 w-full md:py-0 md:p-8 text-base font-normal">
                            Lanzamos la primera versión funcional de Dýnamai. 
                            Esta versión está disponible para Android y 
                            puede descargarse en Google Play.
                        </p>
                </Disclosure.Panel>
            </Transition>
            </div>
        </div>
    )}
    </Disclosure>
)

function Novedades() {
    return (
        <>
        <Helmet>

            <title>Dýnamai - Novedades</title>

        </Helmet>
        <main>
            <article className="bg-gradient-radial w-full min-h-full md:min-h-screen max-h-full from-secundario-2 to-black">
                <div className="max-w-7xl mx-auto px-5 sm:px-10 py-6">
                    <div className="mt-2 md:mt-16">
                        <h1 className="text-white max-w-xl">
                            Novedades
                        </h1>
                        <div className="flex flex-col relative antialiased mt-5 mb-20">

                            <div className="border-4 absolute top-1 left-5 md:left-1/2 border-white h-full"></div>

                            <div className="relative md:w-1/2">
                                <div className="flex justify-start md:justify-end w-full h-60">
                                    <div className="flex relative items-center order-1 -right-2 md:-right-6 top-0 bg-acento-2 shadow-xl w-8 h-8 md:w-10 md:h-10 rounded-full">
                                    </div>
                                </div>
                            </div>

                            {
                                dataReverse.map( ( data, index )  => (
                                    ( index % 2 === 0 ) ? (
                                        <LeftTimeline key={data.id} date={data.date} />
                                    ) : (
                                        <RightTimeline key={data.id} date={data.date} />
                                    )
                                ))
                            }


                            <div className="relative md:w-1/2">
                                <div className="flex justify-start md:justify-end w-full h-60">
                                    <div className="flex relative items-center order-1 -right-2 md:-right-6 top-0 bg-acento-2 shadow-xl w-8 h-8 md:w-10 md:h-10 rounded-full">
                                    </div>
                                </div>
                            </div>

                            <div className="relative md:w-1/2">
                                <div className="flex justify-start md:justify-end w-full">
                                    <div className="flex relative items-center order-1 -right-2 md:-right-6 top-2 bg-white shadow-xl w-8 h-8 md:w-10 md:h-10 rounded-full">
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </article>
        </main>
        </>
    )
}

export default Novedades;