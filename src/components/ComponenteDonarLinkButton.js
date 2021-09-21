import React from 'react'

const ComponenteDonarLinkButton = ({ valor = '', href = '', color = '', textColor = '' }) => {
    return (
        <a href={href} target="_blank" rel="noreferrer" 
        className={`w-20 h-20 sm:w-24 sm:h-24 last:w-40 last:h-10 md:last:w-40 md:last:h-40 md:w-40 md:h-40 mb-5 mx-1 rounded-full flex items-center ${ color }`}>
            <p className={`mx-auto font-bold ${textColor}`}>
                {valor}
            </p>
        </a>
    )
}

export default ComponenteDonarLinkButton;
