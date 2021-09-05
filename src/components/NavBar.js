import React, { Fragment, useEffect, useRef, useState } from 'react'
import { Popover ,Disclosure, Transition  } from '@headlessui/react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { ChevronDownIcon } from '@heroicons/react/solid'
import { Squash as Hamburger } from 'hamburger-react'
import SvgLogoDynamai from '../logo'
import SvgLogoLowDynamai from '../LogoLow'
import ButtonLink from './ButtonLink';

const navigation = [
    { 
        name: 'Home', 
        href: '/' ,
        iconDrawer: '/img/icons/drawer/drawer-menu-home.svg',
        mobile: false
    },
    { 
        name: 'Acerca de', 
        href: '/acerca',
        iconDrawer: '/img/icons/drawer/drawer-menu-acerca-de.svg',
        mobile: false
    },
    { 
        name: 'Participar', 
        href: '/participa',
        iconDrawer: '/img/icons/drawer/drawer-menu-participar.svg',
        mobile: false,
        submenu: true
    },
    { 
        name: 'Novedades', 
        href: '/novedades',
        iconDrawer: '/img/icons/drawer/drawer-menu-novedades.svg',
        mobile: false
    },
    { 
        name: 'Quiero donar', 
        href: '/quierodonar',
        iconDrawer: '/img/icons/drawer/drawer-menu-donar.svg',
        mobile: true
    },
    { 
        name: 'Ayuda y soporte', 
        href: '/ayuda',
        iconDrawer: '/img/icons/drawer/drawer-menu-soporte.svg',
        mobile: true
    },
]

const participa = [
    { 
      name: 'Organización pública/privada', 
      href: '/organizacion' 
    },
    { 
      name: 'Instituciones de salud', 
      href: '/instituciones' 
    },
    { 
      name: 'Voluntariado', 
      href: '/voluntariado' 
    },
]

const onClickUp = () => {
  window.scrollTo(0,0)
}

export default function NavBar() {
  const location = useLocation()
  const [activeLocation, setActiveLocation] = useState('')
  const LinkParticipaRef = useRef();
  const drawerMenuClose = useRef();

  
  useEffect(()=>{
    setActiveLocation(location.pathname)
    onClickUp()
  }, [location])

  let hoverNav;
  switch ( activeLocation ) {
    case navigation[0].href:
      hoverNav = 'left-0';
      break;
    case navigation[1].href:
      hoverNav = 'left-32';
      break;
    case navigation[3].href:
      hoverNav = 'left-3/4';
      break;
    case participa[0].href:
    case participa[1].href:
    case participa[2].href:
      hoverNav = 'left-64';
      break;
    default:
      hoverNav = 'hidden';
      break;
  }

  const isOpenDrawer = open => {
    if ( open ){ 
      drawerMenuClose.current?.click()
    }
  }

  let drawerParticipa = false;
  for (const key in participa) {
    if (activeLocation === participa[key].href) {
      drawerParticipa = true;
    }
  }

  return (
    <Disclosure as="nav" className="bg-primario shadow-lg sticky z-40 top-0">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 py-4 md:py-5 sm:px-6 md:px-4 lg:px-8">
            <div className="relative flex items-center justify-between h-10 sm:h-12 md:h-16">
              <div className="flex-1 flex items-center sm:items-stretch justify-between">
                <div className="flex items-center">
                <div className="flex items-center focus:outline-none sm:hidden">
                  <Disclosure.Button ref={drawerMenuClose} className="inline-flex focus:outline-none items-center justify-center p-2 mr-2 rounded-md text-gray-100 select-none">
                    <span className="sr-only">Abrir menu</span>
                    <Hamburger className="focus:outline-none" 
                    label="Ver menu" 
                    size={30} 
                    rounded={true} 
                    toggled={open}
                    distance="xl"
                    />
                  </Disclosure.Button>
                </div>
                  <Link to="/" className="flex-shrink-0 flex items-center">
                    <SvgLogoLowDynamai className="hidden sm:block lg:hidden h-14 md:h-16 w-auto" alt="Logo Dynamai" />
                    <SvgLogoDynamai 
                      onClick={() => isOpenDrawer(open)}
                      className="block sm:hidden lg:block h-12 md:h-16 w-auto" 
                      alt="Logo Dynamai" />
                  </Link>
                </div>
                <div className="flex items-center focus:outline-none sm:hidden">
                  <Link
                        to="/quierodonar"
                        onClick={() => isOpenDrawer(open)}
                        className="flex items-center transition justify-center px-4 mx-2 py-2 border border-transparent rounded-full shadow-sm text-base font-medium uppercase tracking-wider text-secundario-1 bg-white hover:bg-gray-900"
                        >
                        Donar
                  </Link>
                </div>
                <div className="hidden sm:flex w-full justify-end items-center">
                  <div className="select-none max-w-prose">
                    <div className="flex relative max-w-prose focus:outline-none">

                      {navigation.map( item => (
                        (item.submenu !== true) ? (
                          (item.mobile === false) && (
                            <NavLink
                              key={item.name}
                              exact to={item.href}
                              activeClassName="text-white text-opacity-100 focus:outline-none"
                              className="font-nunito w-32 flex transition-all items-center justify-center outline-none text-white text-opacity-90 hover:text-opacity-100 focus:outline-none hover:bg-white hover:bg-opacity-5 py-10 text-xs md:text-base uppercase font-semibold whitespace-nowrap"
                            >
                                {item.name}
                            </NavLink>
                          ) 
                        ) : (
                          <Popover key={item.name} className="relative">
                          <Popover.Button ref={LinkParticipaRef} className="font-nunito w-32 flex transition-all outline-none items-center justify-center text-white text-opacity-90 hover:text-opacity-100 focus:outline-none hover:bg-white hover:bg-opacity-5 py-10 text-xs md:text-base uppercase font-semibold whitespace-nowrap">
                            <span>{item.name}</span>
                            <ChevronDownIcon aria-hidden="true" className="ml-1 h-5 w-5 group-hover:text-gray-500" />
                          </Popover.Button>
                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1"
                          >
                          <Popover.Panel className="absolute z-10 -ml-4 -mt-1 transform px-2 w-screen max-w-xs sm:px-0 lg:ml-0 ">
                          <div className="shadow-xl bg-semiblack ring-1 ring-black ring-opacity-5 overflow-hidden">
                            <div className="relative grid px-3 py-4 sm:gap-8">
                              {participa.map( item =>(
                                  <NavLink exact to={item.href}
                                  key={item.name}
                                  activeClassName="bg-acento-2"
                                  onClick={() => LinkParticipaRef.current?.click()} 
                                  className="-m-4 p-3 pl-10 text-white flex font-nunito border-b border-gray-800 last:border-semiblack font-semibold items-start opacity-80  hover:bg-acento-2">
                                    {item.name}
                                  </NavLink>
                              ))}
                            </div>
                          </div>
                          </Popover.Panel>
                        </Transition>
                      </Popover>
                        )
                      ) )}
                      <div className={`${hoverNav} w-32 transition-all duration-300 bottom-0 h-1 bg-acento-2 absolute`}></div>
                    </div>
                  </div>
                  <Link 
                    to='/quierodonar'
                    className="hidden sm:flex justify-center items-center sm:ml-6 font-nunito font-semibold text-base uppercase bg-white hover:bg-gray-900 text-secundario-1 hover:text-white px-6 py-2 shadow hover:shadow-lg tracking-wider transition rounded-full whitespace-nowrap cursor-pointer"
                    >
                      Quiero Donar
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <Transition
            enter="transition duration-150 ease-out transform"
            enterFrom="-translate-x-6 opacity-0"
            enterTo="translate-x-0 opacity-100" 
            leave="transition duration-150 ease-out transform"
            leaveFrom="translate-x-0 opacity-100"
            leaveTo="-translate-x-6 opacity-0"
          >
            <Disclosure.Panel className="sm:hidden absolute transition-all w-4/5">
              <div className="bg-semiblack flex flex-col transition-all h-screen">
                {navigation.map((item) => (
                  (item.submenu !== true) ? (
                  <NavLink
                      key={item.name}
                      exact to={item.href}
                      onClick={() => drawerMenuClose.current?.click()} 
                      activeClassName="bg-acento-2 hover:bg-acento-2"
                      className="text-white text-opacity-80 py-5 transition-all hover:bg-acento-2 flex items-center px-3 text-base font-medium whitespace-nowrap"
                      >
                      <img className="h-8 ml-3 mr-6" src={item.iconDrawer} alt={item.name} /> 
                      {item.name}
                  </NavLink>
                  ) : (
                      <Disclosure key={item.name}>
                        {({ open }) => (
                          <>
                            <Disclosure.Button className={`flex justify-between items-center w-full text-white text-opacity-80 py-5 px-3 text-base font-medium whitespace-nowrap ${ drawerParticipa ? 'bg-acento-2' : 'bg-semiblack' }`}>
                              <div className="flex items-center ">
                                <img className="h-8 ml-3 mr-6" src={item.iconDrawer} alt={item.name} /> 
                                <span>{item.name}</span>
                              </div>
                              <ChevronDownIcon 
                              aria-hidden="true" 
                              className={`ml-1 h-5 w-5 group-hover:text-gray-500 transition-all ${ open ? 'transform rotate-180' : '' }`} />
                            </Disclosure.Button>
                            <Transition
                              show={open}
                              enter="transition duration-100 ease-out"
                              enterFrom="transform -translate-y-6 opacity-0"
                              enterTo="transform translate-y-0 opacity-100"
                              leave="transition duration-75 ease-out"
                              leaveFrom="transform translate-y-0 opacity-100"
                              leaveTo="transform -translate-y-6 opacity-0"
                            >
                              <Disclosure.Panel>
                                {participa.map( item => (
                                  <NavLink 
                                    key={item.name}
                                    exact to={item.href}
                                    onClick={() => drawerMenuClose.current?.click()} 
                                    activeClassName="bg-acento-2"
                                    className="text-white text-opacity-80 py-5 pl-20 hover:bg-acento-2 block text-base font-medium whitespace-nowrap">
                                      {item.name}
                                  </NavLink>
                                ) )}
                              </Disclosure.Panel>
                            </Transition>
                          </>
                        )}
                      </Disclosure>
                    ))
                  )}
                  <ButtonLink to='/descargar' text="DESCARGAR APP" className="mx-auto transition-all mt-8" />
              </div>
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  )
}