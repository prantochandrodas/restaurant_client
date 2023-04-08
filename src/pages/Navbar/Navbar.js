import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css'
const Navbar = () => {

    const [state, setState] = useState(false)

    // Replace javascript:void(0) paths with your paths
    const navigation = [
        { title: "Features", path: "/" },
        { title: "Integrations", path: "/menu" },
        { title: "Customers", path: "/menu" },
        { title: "Pricing", path: "/menu" }
    ]

    return (
        <nav className="bg-white border-b border-slate-300 w-full md:static md:text-sm ">
            <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
                <div className="flex items-center justify-between py-3 lg:py-2 md:block">
                    <a href="javascript:void(0)">
                        <img
                            src={logo}
                            width={90}
                            height={50}
                            alt="Cooking Master Logo"
                        />
                    </a>
                    <div className="md:hidden">
                        <button className="text-gray-500 hover:text-gray-800"
                            onClick={() => setState(!state)}
                        >
                            {
                                state ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                    </svg>
                                )
                            }
                        </button>
                    </div>
                </div>
                <div className={`flex-1 pb-3 mt-8 md:block md:pb-0 md:mt-0 ${state ? 'block' : 'hidden'}`}>
                    <ul className="justify-end items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
                        {
                            navigation.map((item, idx) => {
                                return (
                                    <NavLink className="text-lg inline-flex gap-1.5  font-medium text-gray-900 dark:text-white" to={item.path}>{item.title}</NavLink>
                                )
                            })
                        }
                        <span className='hidden w-px h-6 bg-gray-300 md:block'></span>
                    </ul>
                </div>
            </div>
        </nav>
    )
};

export default Navbar;