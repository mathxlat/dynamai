import React, { useEffect, useState } from 'react'
import { Disclosure, Transition  } from '@headlessui/react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { Squash as Hamburger } from 'hamburger-react'
import SvgLogoDynamai from '../logo'

const navigation = [
    { 
        name: 'Home', 
        href: '/' 
    },
    { 
        name: 'Acerca de', 
        href: '/acerca' 
    },
    { 
        name: 'Participa', 
        href: '/participa' 
    },
    { 
        name: 'Novedades', 
        href: '/novedades' 
    },
]


export default function NavBar() {
  const location = useLocation()
  const [activeLocation, setActiveLocation] = useState('')
  useEffect(()=>{
    setActiveLocation(location.pathname)
  }, [location])
  let hoverNav;
  if(activeLocation === navigation[0].href){
    hoverNav = 'left-0';
  } else if (activeLocation === navigation[1].href){
    hoverNav = 'left-32';
  } else if (activeLocation === navigation[2].href){
    hoverNav = 'left-64';
  } else if (activeLocation === navigation[3].href){
    hoverNav = 'left-3/4';
  } else {
    hoverNav = 'hidden'
  }
  return (
    <Disclosure as="nav" className="bg-primario shadow-lg sticky z-50 top-0">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-6 py-5 sm:px-6 md:px-4 lg:px-8">
            <div className="relative flex items-center justify-between h-10 sm:h-12 md:h-16">
              <div className="flex-1 flex items-center sm:items-stretch justify-between">
                <Link to="/" className="flex-shrink-0 flex items-center">
                  <SvgLogoDynamai className="hidden sm:block lg:hidden h-16 w-auto" alt="Logo Dynamai" />
                  <SvgLogoDynamai className="block sm:hidden lg:block h-16 w-auto" alt="Logo Dynamai" />
                </Link>
                <div className="flex items-center focus:outline-none sm:hidden">
                <Disclosure.Button className="inline-flex focus:outline-none items-center justify-center p-2 rounded-md text-gray-100 hover:text-white hover:bg-green-700 focus:ring-2 focus:ring-inset focus:ring-green-500">
                  <span className="sr-only">Abrir menu</span>
                  <Hamburger className="focus:outline-none" label="Ver menu" size={28} toggled={open} />
                </Disclosure.Button>
              </div>
                <div className="hidden sm:flex w-full justify-end items-center">
                  <div className="select-none max-w-prose">
                    <div className="flex relative max-w-prose focus:outline-none">
                      {navigation.map((item) => (
                        <NavLink
                          key={item.name}
                          exact to={item.href}
                          activeClassName="text-white text-opacity-100 focus:outline-none"
                          className="font-nunito w-32 flex items-center justify-center text-white text-opacity-90 hover:text-opacity-100 focus:outline-none hover:bg-white hover:bg-opacity-5 py-10 text-xs md:text-base uppercase font-semibold whitespace-nowrap"
                        >
                          {item.name}
                        </NavLink>
                      ))}
                      <div className={`${hoverNav} w-32 transition-all duration-300 bottom-0 h-1 bg-acento-2 absolute`}></div>
                    </div>
                  </div>
                  <Link 
                    to={'/quierodonar'} 
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
            enterFrom="-translate-y-6 opacity-0"
            enterTo="translate-y-0 opacity-100" 
            leave="transition duration-150 ease-out transform"
            leaveFrom="translate-y-0 opacity-100"
            leaveTo="-translate-y-6 opacity-0"
          >
            <Disclosure.Panel className="sm:hidden absolute w-full">
              <div className="px-2 pt-2 pb-3 space-y-1 bg-primario">
                {navigation.map((item) => (
                  <NavLink
                      key={item.name}
                      exact to={item.href}
                      activeClassName="text-green-400 bg-green-900 hover:text-green-400 hover:bg-green-900"
                      className="text-gray-300 hover:text-white hover:bg-green-700 block px-3 py-2 rounded-md text-base font-medium whitespace-nowrap"
                      >
                      {item.name}
                  </NavLink>
                ))}
                  <div>
                    <Link
                      to="/quierodonar"
                      className="w-full flex items-center transition justify-center px-4 py-2 border border-transparent rounded-full shadow-sm text-base font-medium uppercase tracking-wider text-secundario-1 bg-white hover:bg-gray-900"
                    >
                      Quiero donar
                    </Link>
                  </div>
              </div>
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  )
}