import React from 'react'
import { Helmet } from 'react-helmet';
import { SpinnerCircular } from 'spinners-react';

export const Loading = ({ className }) => {
    return (
        <>
        <Helmet>

            <title>Dýnamai - Cargando</title>

        </Helmet>
        <main>
            <article className={`flex flex-col justify-center items-center justify-items-center bg-gradient-radial w-full min-h-screen max-h-full ${ className }`}>
                    <SpinnerCircular size={65} thickness={120} speed={140} color="rgba(75, 172, 57, 1)" secondaryColor="rgba(76, 172, 57, 0)" />
            </article>
        </main>
    </>
    )
}
