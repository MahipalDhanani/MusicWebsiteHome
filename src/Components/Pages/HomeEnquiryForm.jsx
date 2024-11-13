// EnquirySection.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faPhone, faChevronDown } from '@fortawesome/free-solid-svg-icons';

const EnquirySection = () => {
    return (
        <div
            className="min-h-screen"
            style={{ backgroundImage: 'url("/Images/background enqury.jpg")' }}
        >
            {/* Left Side Content */}
            <div className="container p-4 py-16 lg:px-0 mx-auto max-w-screen-xl flex flex-col gap-10 md:flex-row items-center justify-center bg-cover bg-no-repeat bg-center min-h-screen">
                <div className="w-full md:w-1/2 h-64 md:h-auto flex flex-col justify-center p-8 text-white bg-opacity-60 bg-black rounded-2xl">
                    <div className="max-w-md">
                        <h1 className="text-3xl font-bold mb-4">It's thoughtful. It's focused on you.</h1>
                        <ul className="space-y-2">
                            <li className="flex items-start">
                                <span className="mr-2">»</span> Choose your place, choose your time
                            </li>
                            <li className="flex items-start">
                                <span className="mr-2">»</span> Learn at your pace, learn at any age
                            </li>
                            <li className="flex items-start">
                                <span className="mr-2">»</span> Set your goal, and get set going
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Right Side Form */}
                <div className="w-full md:w-1/2 p-6 md:p-12 bg-white shadow-lg rounded-lg">
                    {/* Form Header */}
                    <div className="bg-[#fcd462] text-center py-3 rounded-t-lg">
                        <h3 className="text-xl text-black font-semibold ">Enquire Now</h3>
                    </div>

                    {/* Form */}
                    <form className="p-6 space-y-4">

                        {/* Name Input */}
                        <div className="flex items-center border-b border-gray-300 py-2">
                            <FontAwesomeIcon icon={faUser} className="text-gray-500 mr-3" />
                            <input
                                type="text"
                                placeholder="Enter Your Name"
                                className="w-full focus:outline-none"
                                required
                            />
                        </div>

                        {/* Email Input */}
                        <div className="flex items-center border-b border-gray-300 py-2">
                            <FontAwesomeIcon icon={faEnvelope} className="text-gray-500 mr-3" />
                            <input
                                type="email"
                                placeholder="Enter Your Email"
                                className="w-full focus:outline-none"
                                required
                            />
                        </div>

                        {/* Mobile Input */}
                        <div className="flex items-center border-b border-gray-300 py-2">
                            <FontAwesomeIcon icon={faPhone} className="text-gray-500 mr-3" />
                            <input
                                type="tel"
                                placeholder="Enter Your 10 digit Mobile no."
                                className="w-full focus:outline-none"
                                required
                            />
                        </div>

                        {/* Area Select */}
                        <div className="flex items-center border-b border-gray-300 py-2">
                            <FontAwesomeIcon icon={faChevronDown} className="text-gray-500 mr-3" />
                            <select className="w-full focus:outline-none bg-white" required>
                                <option>--Select Area--</option>
                                <option>Area 1</option>
                                <option>Area 2</option>
                                <option>Area 3</option>
                            </select>
                        </div>

                        {/* Course Select */}
                        <div className="flex items-center border-b border-gray-300 py-2">
                            <FontAwesomeIcon icon={faChevronDown} className="text-gray-500 mr-3" />
                            <select className="w-full focus:outline-none bg-white" required>
                                <option>--Select Course Interested In--</option>
                                <option>Course 1</option>
                                <option>Course 2</option>
                                <option>Course 3</option>
                            </select>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full bg-[#fcd462] py-2 rounded-md font-semibold hover:brightness-90 transition duration-150"
                        >
                            Request a callback
                        </button>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default EnquirySection;
