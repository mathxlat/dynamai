import React from 'react'

const infoFooter = [
    {content: "contacto@dynamaiapp.org", id:"1"},
    {content: "Av. Rivadavia 882 – 5to. E – CP. 1002 – CABA, Buenos Aires, Argentina", id:"2"},
    {content: "Teléfono +54 9 11 1111111", id:"3"},
]
const redes = [
    {
        link: "esto es un link",
        name: "Facebook",
        icon: "/img/redes/facebook.svg"
    },
    {
        link: "esto es un link",
        name: "YouTube",
        icon: "/img/redes/youtube.svg"
    },
    {
        link: "esto es un link",
        name: "LinkedIn",
        icon: "/img/redes/linkedin.svg"
    },
    {
        link: "esto es un link",
        name: "Instagram",
        icon: "/img/redes/instagram.svg"
    },
]

export default function Footer() {
    return (
        <footer className="bg-primario">
            <div>
                <div className="flex flex-row max-w-xs mx-auto justify-between px-12 pt-5">
                    {redes.map( item => (
                        <div key={item.name}>
                            <img className="w-6 select-none" src={item.icon} alt={item.name} />
                        </div>
                    ))}
                </div>
                <div className="flex flex-col xl:flex-row max-w-7xl mx-auto justify-between px-10 py-5">
                    {infoFooter.map( item => (
                        <p key={item.content} className="font-nunito font-semibold text-lg text-white">{item.content}</p>
                    ) )}
                </div>
            </div>
        </footer>
    )
}

