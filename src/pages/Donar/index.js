import React, { useEffect } from 'react'
import ComponenteDonarLink from '../../components/ComponenteDonarLink';
import { Helmet } from 'react-helmet';
import { firebaseAnalytics } from './../../firebase/firebase.services';

const donarMensualmente = [
    {
        valor: '$200',
        href: 'https://www.mercadopago.com.ar/subscriptions/checkout?preapproval_plan_id=2c9380847b62931d017be4a9b8bc6616'
    },
    {
        valor: '$500',
        href: 'https://www.mercadopago.com.ar/subscriptions/checkout?preapproval_plan_id=2c9380847b62931d017be4ab44ee661d'
    },
    {
        valor: '$1.000',
        href: 'https://www.mercadopago.com.ar/subscriptions/checkout?preapproval_plan_id=2c9380847b629336017be4ac507566d1'
    },
    {
        valor: '$2.000',
        href: 'https://www.mercadopago.com.ar/subscriptions/checkout?preapproval_plan_id=2c9380847b629336017be4acb1dd66d2'
    },
    {
        valor: 'Otro Monto',
        href: 'https://www.mercadopago.com.ar/subscriptions/checkout?preapproval_plan_id=fbdb28c8d77c4c3280b1991dfe2f98bb'
    }
];

const donarUnicaVez = [
    {
        valor: '$1.000',
        href: 'https://www.mercadopago.com.ar/checkout/v1/redirect?preference-id=209229376-d90ac6f6-766b-45ea-903c-88d769a6b009'
    },
    {
        valor: '$2.000',
        href: 'https://www.mercadopago.com.ar/checkout/v1/redirect?preference-id=209229376-35296da4-d86d-4dd6-8442-8c77ffa6ebe5'
    },
    {
        valor: '$5.000',
        href: 'https://www.mercadopago.com.ar/checkout/v1/redirect?preference-id=209229376-3d90dcda-b105-4708-bba5-354dfa4c9ea1'
    },
    {
        valor: '$10.000',
        href: 'https://www.mercadopago.com.ar/checkout/v1/redirect?preference-id=209229376-ab425b04-b34d-482e-b437-90aaf0591dca'
    },
    {
        valor: 'Otro Monto',
        href: 'mailto:contacto@dynamaiapp.org?Subject=Donación%20única%20Dynamai'
    }
];

const donacionesData = [
    {
        title: "Donar mensualmente",
        data: donarMensualmente,
        styles: '',
        color: 'bg-white',
        textColor: ''
    },
    {
        title: "Quiero donar por única vez",
        data: donarUnicaVez,
        styles: 'mb-48',
        color: 'bg-acento-1',
        textColor: 'text-white'
    },

]


function Donar() {

    useEffect(() => {
        firebaseAnalytics("donar_page_visited");
    }, []);
    
    return (
        <>
        <Helmet>

            <title>Dýnamai - Donar</title>

        </Helmet>
        <main>
            <article className="bg-gradient-radial w-full min-h-full md:min-h-screen max-h-full from-secundario-1 to-black">
                <div className="max-w-7xl mx-auto px-5 sm:px-10 py-6 pb-0">
                    <div className="mt-2 md:mt-16">
                        <div className="flex flex-wrap justify-between">
                            <h1 className="text-white max-w-xl">
                                Con tu colaboración vas a ayudar 
                                a que más niñas y niños tengan una 
                                vida más saludable.
                            </h1>
                            <div className="flex justify-center items-center border-2 border-white rounded-full mt-10 mb-10 md:mb-0 xl:mt-0 w-full xl:w-6/12 h-28 md:h-44 px-10 md:px-20">
                                <p className="text-white text-center font-light italic">
                                    $200 pesos donados nos permite llegar a una nueva familia.
                                </p>
                            </div>
                        </div>
                        {
                            donacionesData.map( ({title, data, styles, color, textColor }) => <ComponenteDonarLink key={title} title={title} data={data} styles={styles} color={color} textColor={textColor} />)
                        }
                    </div>
                </div>
                <img className="object-cover h-48 md:h-auto w-full" 
                    src="/img/pages/donar/img-donaciones.webp" 
                    alt="imagen donacion dynamai" 
                />
            </article>
        </main>
        </>
    )
}

export default Donar;