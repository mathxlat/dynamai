import React from 'react'
import { Disclosure, Transition  } from '@headlessui/react'
import { NavLink } from 'react-router-dom'
import { Spin as Hamburger } from 'hamburger-react'

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
    { 
        name: 'Contacto', 
        href: '/contacto' 
    },
]


export default function NavBar() {
  return (
    <Disclosure as="nav" className="bg-green-800 sticky top-0">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-6 py-5 sm:px-6 md:px-4 lg:px-8">
            <div className="relative flex items-center justify-between h-10 sm:h-12 md:h-16">
              <div className="flex-1 flex items-center justify-between sm:items-stretch sm:justify-between">
                <div className="flex-shrink-0 flex items-center">
                  <img
                    className="hidden sm:block lg:hidden h-16 w-auto"
                    src="/logo/logo-dynamai-texto.svg"
                    alt="Logo Dynamai"
                  />
                  <img
                    className="block sm:hidden lg:block h-16 w-auto"
                    src="/logo/logo-dynamai-texto.svg"
                    alt="Logo Dynamai"
                  />
                </div>
                <div className="flex items-center focus:outline-none sm:hidden">
                <Disclosure.Button className="inline-flex focus:outline-none items-center justify-center p-2 rounded-md text-gray-100 hover:text-white hover:bg-green-700 focus:ring-2 focus:ring-inset focus:ring-green-500">
                  <span className="sr-only">Abrir menu</span>
                  <Hamburger className="focus:outline-none" label="Ver menu" size={30} toggled={open} />
                </Disclosure.Button>
              </div>
                <div className="hidden sm:flex justify-center select-none content-center items-center">
                  <div className="flex focus:outline-none lg:space-x-6">
                    {navigation.map((item) => (
                      <NavLink
                        key={item.name}
                        exact to={item.href}
                        activeClassName="text-green-400 bg-green-900 focus:outline-none hover:text-green-400 hover:bg-green-900"
                        className="text-gray-300 focus:outline-none hover:text-white hover:bg-green-700 px-3 py-2 rounded-md text-xs md:text-base uppercase font-medium whitespace-nowrap"
                      >
                        {item.name}
                      </NavLink>
                    ))}
                  </div>
                </div>
                <div className="hidden sm:flex justify-center items-center sm:ml-6">
                    <button className="tracking-wide transition text-white hover:text-green-300 px-6 py-2 rounded-md font-medium bg-green-700 hover:bg-green-900 uppercase whitespace-nowrap">Quiero Donar</button>
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
            <Disclosure.Panel className="sm:hidden absolute">
              <div className="px-2 pt-2 pb-3 space-y-1 bg-green-800 w-screen">
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
              </div>
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  )
}