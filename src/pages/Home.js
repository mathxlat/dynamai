import React from 'react'
// import Carousel from '../components/Carousel/index'

function Home() {
    return (
        <section>
            <article className="bg-gradient-radial w-full min-h-screen max-h-full from-secundario-1 to-black">
                <div className="max-w-7xl mx-auto px-10 py-6">
                    <div className="mt-20 max-w-xl">
                        <h1>Queremos acompañarte durante la crianza, desde el embarazo.</h1>
                        <p className="mt-8" >Por eso creamos esta plataforma gratuita y de fácil acceso. acercando a madres y padres todos los conocimientos y herramientas que
                        necesitan durante el embarazo e infancia, de forma didáctica y aplicable.</p>
                    </div>
                </div>
            </article>
            {/* Carousel Preview */}
            {/* <article className="w-full h-screen">
                <Carousel />
            </article> */}
        </section>
    )
}

export default Home;
