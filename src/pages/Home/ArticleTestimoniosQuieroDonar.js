import base from '../../airtable/airtable.base';
import React, { useEffect, useState } from 'react'
import ButtonLink from '../../components/ButtonLink';

const list4Testimonios = test => {
    test.sort(() => Math.random() - 0.5 );
    return test.splice( 0, 4 );
}

const ArticleTestimoniosQuieroDonar = () => {
    const [testimonios, setTestimonios] = useState([]);
    const [testimonios4, setTestimonios4] = useState([]);

    useEffect(() => {

        base('Testimonios').select({view: 'Testimonios' }).eachPage((records, fetchNextPage) => {
            setTestimonios(records);
            fetchNextPage();
        });

    }, [])

    testimonios.sort(() => Math.random() - 0.5 );

    useEffect(() => {

        setTestimonios4(list4Testimonios(testimonios));

    }, [testimonios])


    return (
            <article className="bg-gradient-radial w-full min-h-full md:min-h-screen max-h-full from-secundario-2 to-black">
                <div className="max-w-7xl h-full md:h-screen relative flex flex-col justify-center items-center mx-auto px-5 sm:px-10 py-6">
                    <div className="-top-32 left-0 w-full hidden md:absolute md:flex justify-around">
                        {testimonios ?
                        
                        (testimonios4.map( testimonio => (

                            (testimonio.fields.nombre && testimonio.fields.imagen && testimonio.fields.testimonio) 
                            ?
                            (<div key={testimonio.fields.nombre} className="w-72 h-72 mx-2 rounded-lg overflow-hidden bg-gray-300 shadow-lg">
                                <div className="h-40">
                                    <img className="w-full h-40 object-cover" src={testimonio.fields.imagen[0].url} alt={testimonio.testimonio} />
                                </div>
                                <div className="w-full h-full p-3 bg-white">
                                    <p className="capitalize">
                                        {testimonio.fields.nombre}
                                    </p>
                                    <small>
                                        {`“${testimonio.fields.testimonio}”`}
                                    </small>
                                </div>
                            </div>) 
                            : null

                            ))
                        ) : null
                        }
                    </div>
                    <h2 className="text-center text-white">Creemos en un mundo en el que todos puedan desarrollar al
                    máximo su potencial y, así también, contribuir a mejorar la
                    sociedad en su conjunto.</h2>
                    <ButtonLink text="Quiero donar" to="/donar" className="mt-10 md:mt-16" />
                </div>
            </article>
    )
}

export default ArticleTestimoniosQuieroDonar;
