import React from 'react'

const infoFooter = [
    {content: "contacto@dynamaiapp.org"},
    {content: "Av. Rivadavia 882 – 5to. E – CP. 1002 – CABA, Buenos Aires, Argentina"},
    {content: "Teléfono +54 9 11 1111111"},
]

export default function Footer() {
    return (
        <footer className="mt-4 bg-primario">
            <div>
                <div className="flex flex-col xl:flex-row max-w-7xl mx-auto justify-between px-10 py-5">
                    {infoFooter.map( item => (
                        <p className="font-nunito font-semibold text-lg text-primario">{item.content}</p>
                    ) )}
                </div>
            </div>
        </footer>
    )
}

