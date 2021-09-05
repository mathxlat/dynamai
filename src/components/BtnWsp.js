import React from 'react'

const BtnWsp = () => {
    return (
        <div className="z-40 fixed bottom-20 right-2 sm:bottom-10 sm:right-10 ">
            <a href="https://wa.me/message/QQZZDV4XAYPBP1" target="_blank" rel="noreferrer">
                <img className="hidden sm:flex w-12 h-12 z-50 sm:w-20 sm:h-20" src="/img/redes/wsp.svg" alt="wsp"/>
                <img className="flex sm:hidden w-12 h-12 z-50 sm:w-20 sm:h-20" src="/img/redes/wsp-mobile.svg" alt="wsp"/>
            </a>
        </div>
    )
}

export default BtnWsp;
