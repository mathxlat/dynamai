import React from 'react'

const infoFooter = [
    {content: "contacto@dynamaiapp.org", id:"1"},
    {content: "Gallo 353 – CP. 1172 – CABA, Buenos Aires, Argentina", id:"2"},
    {content: "Teléfono +54 9 1150361430", id:"3"},
]
const redes = [
    {
        link: "https://www.facebook.com/DynamaiApp/",
        name: "Facebook",
        icon: "/img/redes/facebook.svg"
    },
    {
        link: "https://www.youtube.com/channel/UCWrniZqHjb3EL0qcFSI-tlQ",
        name: "YouTube",
        icon: "/img/redes/youtube.svg"
    },
    {
        link: "https://www.linkedin.com/company/79269797/admin/",
        name: "LinkedIn",
        icon: "/img/redes/linkedin.svg"
    },
    {
        link: "https://www.instagram.com/dynamaiapp/",
        name: "Instagram",
        icon: "/img/redes/instagram.svg"
    },
]

export default function Footer() {
    return (
        <footer className="bg-primario">
            <div>
                <div className="flex flex-col max-w-xs mx-auto pt-5">
                    <p className="inline-block sm:hidden max-w-xs mx-auto uppercase text-white text-xs">SEGUINOS EN</p>
                    <div className="flex flex-row mx-auto mt-2 justify-between w-1/2">
                        {redes.map( item => (
                            <a href={item.link} target="_blank" rel="noreferrer" key={item.name}>
                                <img className="w-6 select-none" src={item.icon} alt={item.name} />
                            </a>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col xl:flex-row max-w-7xl mx-auto justify-between items-center sm:items-start px-10 py-5">
                    {infoFooter.map( item => (
                        <p key={item.content} className="font-nunito text-xs sm:text-lg text-center sm:font-semibold text-white">{item.content}</p>
                    ) )}
                </div>
            </div>
        </footer>
    )
}

