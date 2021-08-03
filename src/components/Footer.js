import React from 'react'

const infoFooter = [
    {content: "contacto@dynamaiapp.org", id:"1"},
    {content: "Av. Rivadavia 882 – 5to. E – CP. 1002 – CABA, Buenos Aires, Argentina", id:"2"},
    {content: "Teléfono +54 9 11 1111111", id:"3"},
]

export default function Footer() {
    return (
        <footer className="mt-4 bg-primario">
            <div>
                <div className="flex flex-col xl:flex-row max-w-7xl mx-auto justify-between px-10 py-5">
                    {infoFooter.map( item => (
                        <p key={item.id} className="font-nunito font-semibold text-lg text-primario">{item.content}</p>
                    ) )}
                </div>
            </div>
        </footer>
    )
}

