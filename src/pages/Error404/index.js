import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet';
import ButtonLink from './../../components/ButtonLink';
import { firebaseAnalytics } from './../../firebase/firebase.services';

function Error404() {

    useEffect(() => {
        firebaseAnalytics("404_page_visited");
    }, []);

    return (
        <>
            <Helmet>

                <title>Dýnamai - ERROR 404</title>

            </Helmet>
            <main>
            <article className="bg-gradient-radial w-full min-h-screen max-h-full from-primario-light to-black">
                <div className="max-w-7xl mx-auto px-5 sm:px-10 py-6">
                    <div className="mt-2 md:mt-16">
                        <div className="flex flex-col max-w-sm px-5 md:px-0 md:max-w-lg h-screen mx-auto justify-center content-center items-center antialiased -mt-40">

                            <img className="w-3/5 md:w-auto mb-5" src="/img/icons/pantalla-error.png" alt="error bebe llorando" />

                            <h1 className="text-white text-center">
                                Algo no salió como esperábamos
                            </h1>
                            <p className="text-white text-center mt-4">
                                La página que intentas acceder no existe.
                            </p>

                            <ButtonLink text="Ir al home" href="/" className="mt-10 md:mt-16" />

                        </div>
                    </div>
                </div>
            </article>
        </main>
        </>
    )
}

export default Error404;
