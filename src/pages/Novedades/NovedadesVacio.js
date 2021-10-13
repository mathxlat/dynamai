import React from 'react'
import { Helmet } from 'react-helmet';

export const NovedadesVacio = () => {
    return (
<>
        <Helmet>

            <title>Dýnamai - Novedades</title>

        </Helmet>
        <main>
            <article className="bg-gradient-radial w-full min-h-screen max-h-full from-secundario-2 to-black">
                <div className="max-w-7xl mx-auto px-5 sm:px-10 py-6">
                    <div className="mt-2 md:mt-16">
                        <h1 className="text-white max-w-xl">
                            Novedades
                        </h1>
                        <div className="flex flex-col justify-center items-center max-h-full relative antialiased mt-5 mb-20">

                            <h1 className="text-white ">
                                Se ve que todavía no tenemos una novedad, vuelve cuando tengamos más novedades.
                            </h1>

                        </div>
                    </div>
                </div>
            </article>
        </main>
        </>
    )
}
