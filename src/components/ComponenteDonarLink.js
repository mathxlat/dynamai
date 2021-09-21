import React from 'react'
import ComponenteDonarLinkButton from './ComponenteDonarLinkButton';

const ComponenteDonarLink = ({ title = '', data = [], styles = '', color = 'bg-white', textColor = '' }) => {
    return (
        <div className={`flex flex-col mt-2 md:mt-20 ${styles}`}>
            <h1 className="text-white">
                { title }
            </h1>
            <div className="flex flex-wrap mt-4 md:mt-10 md:mx-5 w-full items-center justify-around md:justify-between">
                { data.map( ({ valor, href }) => <ComponenteDonarLinkButton key={valor} valor={valor} href={href} color={color} textColor={textColor} /> ) }
            </div>
        </div>
    )
}

export default ComponenteDonarLink;
