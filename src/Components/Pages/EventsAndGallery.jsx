import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faImages } from '@fortawesome/free-solid-svg-icons';
import { HOC } from '../Hoc/HOC';

const EventsAndGallery = () => {
    return (
        <div className="min-h-screen bg-gray-50 py-12">
            {/* Section Title */}
            <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold ">Events & Gallery</h2>
            </div>

            {/* Events Section */}
            <div className="container mx-auto px-4 lg:px-0 mb-16 mx-auto max-w-screen-xl">
                <h3 className="text-2xl font-semibold text-gray-700 mb-4">
                    <FontAwesomeIcon icon={faCalendarAlt} className="mr-2 text-[#fcd462]" />
                    Upcoming Events
                </h3>

                {/* Events List */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
                    {/* Event 1 */}
                    <div className="bg-white shadow-md rounded-lg overflow-hidden">
                        <img src="https://via.placeholder.com/400x250" alt="Event 1" className="w-full h-48 object-cover"/>
                        <div className="p-4">
                            <h4 className="font-semibold text-xl text-gray-800">Instrument Workshop</h4>
                            <p className="text-gray-600">Join us for a hands-on workshop to learn how to play guitar, piano, and more!</p>
                            <p className="text-sm text-gray-500 mt-2"><FontAwesomeIcon icon={faCalendarAlt} className="mr-2" /> Dec 15, 2024</p>
                        </div>
                    </div>

                    {/* Event 2 */}
                    <div className="bg-white shadow-md rounded-lg overflow-hidden">
                        <img src="https://via.placeholder.com/400x250" alt="Event 2" className="w-full h-48 object-cover"/>
                        <div className="p-4">
                            <h4 className="font-semibold text-xl text-gray-800">Music Theory Class</h4>
                            <p className="text-gray-600">Learn the basics of music theory and how to apply it to your instrument of choice.</p>
                            <p className="text-sm text-gray-500 mt-2"><FontAwesomeIcon icon={faCalendarAlt} className="mr-2" /> Jan 10, 2025</p>
                        </div>
                    </div>

                    {/* Event 3 */}
                    <div className="bg-white shadow-md rounded-lg overflow-hidden">
                        <img src="https://via.placeholder.com/400x250" alt="Event 3" className="w-full h-48 object-cover"/>
                        <div className="p-4">
                            <h4 className="font-semibold text-xl text-gray-800">Jazz Night</h4>
                            <p className="text-gray-600">A night of smooth jazz performances by local musicians. Free entry!</p>
                            <p className="text-sm text-gray-500 mt-2"><FontAwesomeIcon icon={faCalendarAlt} className="mr-2" /> Feb 5, 2025</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Gallery Section */}
            <div className="container mx-auto px-4 lg:px-0 mx-auto max-w-screen-xl">
                <h3 className="text-2xl font-semibold text-gray-700 mb-4">
                    <FontAwesomeIcon icon={faImages} className="mr-2 text-[#fcd462]" />
                    Gallery
                </h3>

                {/* Gallery Images */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Image 1 */}
                    <div className="bg-white shadow-md rounded-lg overflow-hidden">
                        <img src="https://via.placeholder.com/400x250" alt="Gallery 1" className="w-full h-48 object-cover"/>
                    </div>

                    {/* Image 2 */}
                    <div className="bg-white shadow-md rounded-lg overflow-hidden">
                        <img src="https://via.placeholder.com/400x250" alt="Gallery 2" className="w-full h-48 object-cover"/>
                    </div>

                    {/* Image 3 */}
                    <div className="bg-white shadow-md rounded-lg overflow-hidden">
                        <img src="https://via.placeholder.com/400x250" alt="Gallery 3" className="w-full h-48 object-cover"/>
                    </div>

                    {/* Image 4 */}
                    <div className="bg-white shadow-md rounded-lg overflow-hidden">
                        <img src="https://via.placeholder.com/400x250" alt="Gallery 4" className="w-full h-48 object-cover"/>
                    </div>

                    {/* Image 5 */}
                    <div className="bg-white shadow-md rounded-lg overflow-hidden">
                        <img src="https://via.placeholder.com/400x250" alt="Gallery 5" className="w-full h-48 object-cover"/>
                    </div>

                    {/* Image 6 */}
                    <div className="bg-white shadow-md rounded-lg overflow-hidden">
                        <img src="https://via.placeholder.com/400x250" alt="Gallery 6" className="w-full h-48 object-cover"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HOC(EventsAndGallery);
