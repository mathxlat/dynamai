import React from 'react'
import ButtonLink from '../../components/ButtonLink';

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


const ArticleTestimoniosQuieroDonar = () => {
    return (
            <article className="bg-gradient-radial w-full min-h-full md:min-h-screen max-h-full from-secundario-2 to-black">
                <div className="max-w-7xl h-full md:h-screen relative flex flex-col justify-center items-center mx-auto px-10 py-6">
                    <div className="-top-32 left-0 w-full hidden md:absolute md:flex justify-around">
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
                    <ButtonLink text="Quiero donar" to="/quierodonar" className="mt-10 md:mt-16" />
                </div>
            </article>
    )
}

export default ArticleTestimoniosQuieroDonar;
