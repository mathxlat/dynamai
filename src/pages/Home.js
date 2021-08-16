import React from 'react'
import ButtonLink from '../components/ButtonLink'
import Carrousel from '../components/Carrousel/index'

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

const testimonios = [
    {
        img: "/img/carrousel/carrousel1.png",
        nombre: "Nombre Apellido",
        testimonio: "“Testimonio”"
    },
    {
        img: "/img/carrousel/carrousel2.png",
        nombre: "Nombre Apellido",
        testimonio: "“Testimonio”"
    },
    {
        img: "/img/carrousel/carrousel3.png",
        nombre: "Nombre Apellido",
        testimonio: "“Testimonio”"
    },
    {
        img: "/img/carrousel/carrousel4.png",
        nombre: "Nombre Apellido",
        testimonio: "“Testimonio”"
    }
]

function Home() {
    return (
        <section>
            <article className="bg-gradient-radial w-full min-h-screen max-h-full from-secundario-1 to-black">
                <div className="max-w-7xl mx-auto px-10 py-6">
                    <div className="mt-20 max-w-xl">
                        <h1 className="text-white">Queremos acompañarte durante la crianza, desde el embarazo.</h1>
                        <p className="mt-8 text-white" >Por eso creamos esta plataforma gratuita y de fácil acceso. acercando a madres y padres todos los conocimientos y herramientas que
                        necesitan durante el embarazo e infancia, de forma didáctica y aplicable.</p>
                        <div className="flex items-center mt-16">
                            <ButtonLink text="DESCARGAR LA APP" to="/descargar"/>
                            <a href="http://" className="flex justify-center ml-7 items-center">
                                <img src="/img/icons/play-button.svg" alt="play" className="w-8"/>
                                <p className="text-white ml-3 text-base">Cómo funciona</p>
                            </a>
                        </div>
                    </div>
                </div>
            </article>
            <article className="w-full h-full">
                <Carrousel />
            </article>
            <article className="w-full min-h-screen max-h-max">
                <div className="max-w-7xl mx-auto px-10 py-6">
                    <div className="mt-20">
                        <h1 className="text-semiblack">
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
                                    <h1 className="font-extrabold text-center">{item.title}</h1>
                                    <p className="w-full text-center">{item.content}</p>
                                </div>
                            </div>
                            ))
                        }
                        </div>
                    </div>
                </div>
            </article>

            <article className="bg-gradient-radial w-full min-h-screen max-h-full from-secundario-2 to-black">
                <div className="max-w-7xl h-screen relative flex flex-col justify-center items-center mx-auto px-10 py-6">
                    <div className="-top-32 left-0 w-full absolute flex justify-around">
                        {testimonios.map( testimonio => (
                            <div key={testimonio.nombre} className="w-72 h-72 mx-2 rounded-lg overflow-hidden bg-gray-300 shadow-lg">
                                <div className="h-40">
                                    <img className="w-full h-40 object-cover" src={testimonio.img} alt={testimonio.testimonio} />
                                </div>
                                <div className="w-full h-full p-3 bg-white">
                                    <p>{testimonio.nombre}</p>
                                    <small>{testimonio.testimonio}</small>
                                </div>
                            </div>
                        ) )}
                    </div>
                    <h2 className="text-center text-white">Creemos en un mundo en el que todos puedan desarrollar al
                    máximo su potencial y, así también, contribuir a mejorar la
                    sociedad en su conjunto.</h2>
                    <ButtonLink text="Quiero donar" to="/quierodonar" className="mt-16" />
                </div>
            </article>
        </section>
    )
}

export default Home;
