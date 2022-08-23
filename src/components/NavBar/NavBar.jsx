/* Tailwind CSS v2.0+ */
import React from 'react'
import { Disclosure } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import { NavLink } from 'react-router-dom';

const navigation = [
    { name: 'Home', to: 'home', current: true },
    { name: 'All Books', to: 'books', current: false },
    { name: 'Blog', to: 'blog', current: false },
]

export default function NavBar() {
    return (
        <div className="min-h-full">
            <Disclosure as="nav" className="bg-white">
                {({ open }) => (
                    <>
                        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                            <div className="relative flex items-center justify-between h-16 py-4 md:justify-start md:space-x-10">
                                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                    {/* Mobile menu button*/}
                                    <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-indigo-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                        <span className="sr-only">Open main menu</span>
                                        {open ? (
                                            <XIcon className="block h-6 w-6" aria-hidden="true" />
                                        ) : (
                                            <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                                        )}
                                    </Disclosure.Button>
                                </div>
                                {/* navbar right part (logo)*/}
                                <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                                    <div className="flex-shrink-0 flex items-center">
                                        <h2 className="text-2xl font-bold tracking-tight text-indigo-900">Booksy</h2>
                                    </div>
                                </div>
                                {/* Navigation links */}
                                <div className="hidden sm:block sm:ml-6 md:flex space-x-10 items-center justify-center py-4">
                                    <div className="flex space-x-4">
                                        {navigation.map((item) => (
                                            <NavLink
                                                key={item.name}
                                                to={item.to}
                                                className={({ isActive }) => isActive ? "bg-indigo-900 text-white px-3 py-2 rounded-md text-sm font-medium" : "text-gray-600 hover:bg-indigo-900 hover:text-white px-3 py-2 rounded-md text-sm font-medium"}
                                                aria-current={item.current ? 'page' : undefined}
                                            >
                                                {item.name}
                                            </NavLink>
                                        ))}
                                    </div>
                                </div>
                                {/* navbar left part */}
                                <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                                    <button
                                        type="button"
                                        className="bg-indigo-800 p-1 rounded-full text-white hover:bg-indigo-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                                        <span className="sr-only">View notifications</span>
                                        <BellIcon className="h-6 w-6" aria-hidden="true" />
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* Mobile navigation menu */}
                        <Disclosure.Panel className="sm:hidden">
                            <div className="px-2 pt-2 pb-3 space-y-1">
                                {navigation.map((item) => (
                                    <Disclosure.Button
                                        key={item.name}
                                        className={({ isActive }) => isActive ? "bg-indigo-900 text-white px-3 py-2 rounded-md text-sm font-medium" : "text-gray-600 hover:bg-indigo-900 hover:text-white px-3 py-2 rounded-md text-sm font-medium"}
                                        aria-current={item.current ? 'page' : undefined}
                                    >
                                        <NavLink to={item.to}>{item.name} </NavLink>
                                    </Disclosure.Button>
                                ))}
                            </div>
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>
        </div>
    )
}
