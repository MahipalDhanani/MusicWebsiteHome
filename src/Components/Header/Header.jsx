// Header.js
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import logo from "/Images/logo.png";

const Header = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const navLinks = [
        { to: "/", label: "Home" },
        { to: "/courses", label: "Courses" },
        { to: "/enquiry", label: "Enquiry" },
        { to: "/about", label: "About Us" },
        { to: "/testimonial", label: "Testimonial" },
        { to: "/events-and-gallery", label: "Events And Gallery" },
    ];

    return (
        <header>
            <nav className="bg-black px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <NavLink to="/" className="flex items-center">
                        <span className="text-[#fcd462] self-center text-xl font-semibold whitespace-nowrap dark:text-white w-[50px] h-[50px]">
                            <img src={logo} alt='logo' />
                        </span>
                    </NavLink>
                    <div className="flex justify-center items-center lg:order-2">
                        <NavLink
                            to="/contact"
                            className="text-white bg-primary-700 hover:bg-primary-800 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700"
                        >
                            Contact Us
                        </NavLink>
                        <button
                            type="button"
                            onClick={toggleSidebar}
                            className="flex items-center justify-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        >
                            <div className="flex items-center justify-center w-6 h-6">
                                <i className={`fas ${isSidebarOpen ? 'fa-times' : 'fa-bars'}`}></i>
                            </div>
                        </button>
                    </div>
                    <div
                        className={`lg:flex lg:items-center w-full lg:w-auto lg:order-1 transition-all duration-500 ease-in-out overflow-hidden ${isSidebarOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 lg:max-h-full lg:opacity-100'}`}
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            {navLinks.map((link, index) => (
                                <li key={index}>
                                    <NavLink
                                        to={link.to}
                                        className="block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-[#fcd459] lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                                        aria-current={link.to === "/" ? "page" : undefined}
                                    >
                                        {link.label}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
