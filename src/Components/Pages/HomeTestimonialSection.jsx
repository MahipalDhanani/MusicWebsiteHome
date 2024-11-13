import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Slider from 'react-slick'; // Import Slick Slider

const TestimonialSection = () => {
    const testimonials = [
        {
            id: 1,
            name: "John Doe",
            review: "The music courses here are fantastic! I learned so much in a short time. Highly recommended!",
            rating: 5,
            image: "https://randomuser.me/api/portraits/men/1.jpg",
        },
        {
            id: 2,
            name: "Jane Smith",
            review: "An incredible experience! The instructors are so helpful, and the lessons are so engaging.",
            rating: 4,
            image: "https://randomuser.me/api/portraits/women/2.jpg",
        },
        {
            id: 3,
            name: "Alex Brown",
            review: "I have improved my skills tremendously thanks to the structured lessons and practical advice. A must-try!",
            rating: 5,
            image: "https://randomuser.me/api/portraits/men/3.jpg",
        },
    ];

    // Slick slider settings
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <section className="py-16 bg-gray-100">
            <div className="max-w-7xl mx-auto px-6 lg:px-0">
                <h2 className="text-5xl text-center text-gray-800 mb-8">What Our Students Say</h2>

                {/* Slick Slider Component */}
                <Slider {...settings} className='md:w-[50%] m-auto'>
                    {testimonials.map((testimonial) => (
                        <div
                            key={testimonial.id}
                            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 "
                        >
                            {/* User Image and Name */}
                            <div className="flex items-center mb-4">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-12 h-12 rounded-full mr-4"
                                />
                                <div>
                                    <p className="font-semibold text-lg">{testimonial.name}</p>
                                    <div className="text-[#fcd462]">
                                        {[...Array(testimonial.rating)].map((_, index) => (
                                            <FontAwesomeIcon key={index} icon={faStar} className="text-sm" />
                                        ))}
                                    </div>
                                </div>
                            </div>
                            {/* Review Text */}
                            <p className="text-gray-600">{testimonial.review}</p>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default TestimonialSection;
