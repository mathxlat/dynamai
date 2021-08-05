import React from 'react'
// import Carousel from '../components/Carousel/index'

const infoBeneficiarios = [
    {
        title: "+765.000",
        icon: "/img/icons/argentina.svg",
        content: "Niños y niñas nacen cada año en Argentina"
    },
    {
        title: "+300.000",
        icon: "/img/icons/mujer-embarazada.svg",
        content: "Son madres primarizas"
    },
    {
        title: "+44%",
        icon: "/img/icons/clase.svg",
        content: "De las madres primarizas no finalizaron sus estudios secundarios"
    },
]

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
            <article className="w-full min-h-screen max-h-max">
                <div className="max-w-7xl mx-auto px-10 py-6">
                    <div className="mt-20">
                        <h1 className="text-black">
                            Beneficiarios potenciales
                        </h1>
                        <div className="flex flex-col md:flex-row items-center md:items-start flex-wrap pt-10 w-full justify-between">
                        {
                            infoBeneficiarios.map( item => (
                            <div key={item.title} className="max-w-sm py-8 flex flex-col items-center">
                                <div className="rounded-full bg-acento-2 h-48 w-48 flex items-center justify-center">
                                    <img className="w-32 select-none" src={item.icon} alt="hola" />
                                </div>
                                <div className="w-full pt-4 flex flex-col items-center justify-center">
                                    <h1 className="text-black font-extrabold text-center">{item.title}</h1>
                                    <p className="text-black w-full text-center">{item.content}</p>
                                </div>
                            </div>
                            ))
                        }
                        </div>
                    </div>
                </div>
            </article>

            <article className="bg-gradient-radial w-full min-h-screen max-h-full from-secundario-2 to-black">
                <div className="max-w-7xl h-screen flex flex-col justify-center items-center mx-auto px-10 py-6">
                        <h2 className="text-center">Creemos en un mundo en el que todos puedan desarrollar al
                        máximo su potencial y, así también, contribuir a mejorar la
                        sociedad en su conjunto.</h2>
                </div>
            </article>
        </section>
    )
}

export default Home;
