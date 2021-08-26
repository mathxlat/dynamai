import React, { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'

const ButtonComoFunciona = () => {
    let [isOpen, setIsOpen] = useState(false);

    const handleCloseModal = () => {
        setIsOpen(false);
    }

    const handleOpenModal = () => {
        setIsOpen(true);
    }

    return (
        <>
            <button 
                type="button" 
                onClick={handleOpenModal}
                className="flex justify-center ml-7 items-center">
                <img src="/img/icons/play-button.svg" alt="play" className="w-8"/>
                <p className="text-white ml-3 text-base">Cómo funciona</p>
            </button>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog
                as="div"
                className="fixed z-50 inset-0 overflow-y-auto"
                onClose={handleCloseModal}
                >
                <div className="min-h-screen px-10 text-center">
                    <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                    >
                    <Dialog.Overlay className="fixed inset-0" />
                    </Transition.Child>
                    {/* This element is to trick the browser into centering the modal contents. */}
                    <span
                    className="inline-block h-screen align-middle"
                    aria-hidden="true"
                    >
                    &#8203;
                    </span>
                    <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                    >
                        <div className="inline-block relative w-full max-w-screen-2xl overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                                <div className="w-full flex justify-center">
                                    <iframe 
                                    width="1536" 
                                    height="780" 
                                    src="https://www.youtube.com/embed/-Cj8NnF3Psg?autoplay=1&showinfo=0&rel=0&modestbranding=0" 
                                    title="YouTube video player" 
                                    frameborder="0" 
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                    allowfullscreen />
                                </div>
                                <button
                                    type="button"
                                    className="absolute top-0 left-0 justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                                    onClick={handleCloseModal}
                                >
                                    X
                                </button>
                        </div>
                    </Transition.Child>
                </div>
                </Dialog>
            </Transition>
        </>
    )
}

export default ButtonComoFunciona;
