import { Disclosure } from '@headlessui/react';
import { useEffect, useState } from 'react';
import { DateToFormat, DateToYear, DateToYearFunction } from './DateToFormat';


const LeftTimeline = ( { field, dateToNew } ) => {
    const [unico, setUnico] = useState(false)
    const { fields } = field
    const { titulo, descripcion, fecha, imagen = [{ url:'' }], url_texto = 'Ir al enlace', url } = fields

    useEffect(()=>{
        
        dateToNew.forEach( ({dateAño, id}, index) => {
            if ( dateAño === DateToYearFunction(fecha) ) {
                if( id === field.id ){
                    if ( !(0 === index) ){
                        setUnico(true)
                    }
                }
            }
        })
        
    }, [dateToNew,fecha,field.id ])

    let fechaColor = false;

    if ( parseInt(DateToYearFunction(fecha)) % 2 === 0 ) {
        fechaColor = true;
    }

    return(
    <Disclosure as="div" className={`relative w-full pb-20 md:w-1/2 ${ unico ? 'pb-20 md:pb-0' : ''}`}>
        {({ open }) => (
            <div className="flex max-w-full relative">
            <div className={`flex absolute items-center order-1 left-2 md:left-full md:-ml-4 top-0 shadow-xl min-w-max w-8 h-8 md:w-10 md:h-10 rounded-full ${ fechaColor ? 'bg-acento-2' : 'bg-acento-1' }`}>
            </div>
            
            { unico ? (
                <div className="flex transform translate-y-3/4 md:-translate-y-1/4 justify-center items-center absolute order-1 left-0 md:-ml-7 md:left-full top-2/3 md:top-1/2 bg-white shadow-xl w-12 h-12 md:w-16 md:h-16 rounded-full">
                    <DateToYear date={ fecha } color={ fechaColor ? 'text-acento-2' : 'text-acento-1' } />
                </div>
            ) : null}



            <div className="flex flex-col transition bg-white order-1 md:mt-4 mb-20 ml-14 md:ml-0 md:mr-6 w-full max-w-full md:max-w-sm xl:max-w-md relative rounded-xl shadow-xl md:shadow-2xl overflow-hidden">
                <div className="flex md:flex-col">
                    <DateToFormat date={fecha} />
                    <img className="w-28 h-32 md:w-card-novedades md:h-56 object-cover"
                        src={imagen[0].url} 
                        alt="novedades" 
                    />
                    <div className="flex flex-row w-full pt-6 md:px-5 md:pt-0 md:flex-row justify-between items-start md:items-center relative">
                        <p className="w-full p-3 py-3 md:p-3 md:py-5 text-base font-bold uppercase">
                            {titulo}
                        </p>
                        <Disclosure.Button className="self-end md:self-auto">
                            {
                                open ?
                                (<img 
                                className="w-7 h-7 absolute md:relative right-2 bottom-2 md:right-2 md:bottom-0 self-end md:self-auto md:w-10 md:h-10"
                                src="/img/icons/ver-menos.svg"
                                alt="ver mas" 
                                />) :
                                (<img 
                                className="w-7 h-7 absolute md:relative right-2 bottom-2 md:right-2 md:bottom-0 self-end md:self-auto md:w-10 md:h-10"
                                src="/img/icons/ver-mas.svg"
                                alt="ver mas" 
                                />)
                            }
                        </Disclosure.Button>
                    </div>
                </div>

                <Disclosure.Panel className={`flex flex-col max-w-full sm:max-w-lg md:max-w-full md:pt-0 md:py-6 justify-between items-start md:items-center relative transition-all duration-300 ease-in-out ${ open ? 'h-full' : 'h-0' }`}>
                        <p className="p-3 w-full md:py-0 md:p-8 text-base font-normal">
                            {descripcion}
                            {
                                url && 
                                    <a href={url} className="text-secundario-2 ml-1">
                                        {url_texto}
                                    </a>
                            }
                        </p>
                </Disclosure.Panel>
            </div>
        </div>
    )}
    </Disclosure>
)}

export default LeftTimeline;