import React from "react";
import { NavLink } from "react-router-dom";
import Slider from "react-slick";

const AutoScrollSlider = () => {
    // Slick slider settings
    const settings = {
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        cssEase: "linear",
    };

    // Content for each slide
    const slides = [
        {
            title: "Discover Amazing Courses",
            description: "Join us to unlock a world of learning and growth with expert instructors.",
        },
        {
            title: "Enhance Your Skills",
            description: "Explore our courses and take the next step in your professional journey.",
        },
        {
            title: "Achieve Your Goals",
            description: "Our community of learners and mentors will help you reach new heights.",
        },
        {
            title: "Join Our Community",
            description: "Connect with like-minded individuals and excel together.",
        },
    ];

    return (
        <div className="w-full relative h-screen">
            {/* Background Video */}
            <video
                className="absolute inset-0 w-full h-full object-cover z-0"
                src="/Video/videoplayback.mp4" // Replace with your video path
                autoPlay
                muted
                loop
            />

            {/* Overlay for slider content */}
            <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>

            {/* Text Content Slider */}
            <div className="absolute z-20 w-full h-[500px]  flex items-center justify-center">
                <Slider {...settings} className="w-full h-full flex items-center justify-center">
                    {slides.map((slide, index) => (
                        <div key={index} className="flex items-center justify-center transform translate-y-[45%] h-screen w-full text-center text-white px-6">
                            <div className="max-w-md mx-auto">
                                <h2 className="text-3xl sm:text-4xl font-bold mb-4">{slide.title}</h2>
                                <p className="text-lg sm:text-xl mb-6">{slide.description}</p>
                                <NavLink
                                    to="/contact"
                                    className="px-6 py-3 bg-[#fcd459] text-black font-semibold rounded-md hover:bg-yellow-500 transition duration-200"
                                >
                                    Contact Us
                                </NavLink>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default AutoScrollSlider;
