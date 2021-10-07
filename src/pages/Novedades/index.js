import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet';
import base from '../../airtable/airtable.base'
import LeftTimeline from './LeftTimeline';
import RightTimeline from './RightTimeline';


// const dataReverse = data.reverse();


function Novedades() {
    const [novedades, setNovedadades] = useState([])

    useEffect(() => {
        base('Novedades').select({view: 'Novedades' }).eachPage((records, fetchNextPage) => {
            setNovedadades(records);
            fetchNextPage();
        })
    }, [])

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

                            <div className="relative hidden md:flex md:w-1/2">
                                <div className="flex justify-start md:justify-end w-full h-40">
                                    <div className="flex relative items-center order-1 -right-2 md:-right-6 top-0 bg-acento-2 shadow-xl w-8 h-8 md:w-10 md:h-10 rounded-full">
                                    </div>
                                </div>
                            </div>

                            {
                                novedades.map( ( data, index )  => (
                                    ( index % 2 === 0 ) ? (
                                        <LeftTimeline key={data.id} field={data} />
                                    ) : (
                                        <RightTimeline key={data.id} field={data} />
                                    )
                                ))
                            }

                            <div className="relative md:w-1/2">
                                <div className="flex justify-start md:justify-end w-full">
                                    <div className="flex relative justify-center items-center order-1 -right-1 md:-right-8 top-2 bg-white shadow-xl w-10 h-10 md:w-14 md:h-14 rounded-full">
                                        <small className="text-acento-1 font-semibold">2021</small>
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