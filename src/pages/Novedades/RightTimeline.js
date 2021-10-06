import { Disclosure, Transition } from '@headlessui/react';
import DateToFormat from './DateToFormat';

const RightTimeline = ( { field } ) => {
    const { fields } = field
    const { titulo, descripcion, date, imagen = [{ url:'' }], url_texto = 'Ir al enlace', url } = fields

    return(
    <Disclosure as="div" className="relative w-full md:w-1/2 self-end">
        {({ open }) => (

            <div className="flex md:justify-end max-w-full relative">
            <div className="flex absolute items-center order-1 left-2 md:-left-4 top-0 bg-acento-2 shadow-xl min-w-max w-8 h-8 md:w-10 md:h-10 rounded-full">
            </div>

            {/* {valor && 
                (
                    <div className="flex justify-center items-center absolute order-1 -right-9 top-2/3 bg-white shadow-xl w-16 h-16 rounded-full">
                        <p className="text-base text-acento-2">
                            2021
                        </p>
                    </div>
                )} */}

            <div className="flex flex-col transition bg-white order-1 md:mt-4 mb-20 ml-14 md:ml-8 md:mr-6 w-full max-w-full md:max-w-sm xl:max-w-md relative rounded-xl shadow-xl md:shadow-2xl overflow-hidden">
                <div className="flex md:flex-col">
                    <DateToFormat date={date} />
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
                <Transition
                    show={open}
                    enter="transition duration-100 ease-out transform"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition duration-100 ease-out transform"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                <Disclosure.Panel className={`flex flex-col max-w-full sm:max-w-lg md:max-w-full md:pt-0 md:py-6 justify-between items-start md:items-center relative transition-all duration-300 ease-in-out ${ open ? 'h-full' : 'h-0' }`}>
                        <p className="p-3 w-full md:py-0 md:p-8 text-base font-normal">
                            { descripcion }
                            {
                                url && 
                                    <a href={url} className="text-secundario-2 ml-1">
                                        {url_texto}
                                    </a>
                            }
                        </p>
                </Disclosure.Panel>
            </Transition>
            </div>
        </div>
    )}
    </Disclosure>
)}


export default RightTimeline;