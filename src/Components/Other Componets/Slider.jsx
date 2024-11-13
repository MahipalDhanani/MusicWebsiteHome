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

    return (
        <div className="w-full">
            <Slider {...settings}>
                {/* Slide 1 */}
                <div className="slide slide1 h-[500px] relative bg-cover bg-right-bottom">
                    <div className="absolute inset-0 flex items-center justify-center text-center text-white z-10 px-6">
                        <div>
                            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                                Discover Amazing Courses
                            </h2>
                            <p className="text-lg sm:text-xl mb-6">
                                Join us to unlock a world of learning and growth with expert instructors.
                            </p>
                            <NavLink to={"/contact"} className="px-6 py-3 bg-[#fcd459] text-black font-semibold rounded-md hover:bg-yellow-500 transition duration-200">
                                Contact Us
                            </NavLink>
                        </div>
                    </div>
                </div>

                {/* Slide 2 */}
                <div className="slide slide2 h-[500px] relative bg-cover bg-right-bottom">
                    <div className="absolute inset-0 flex items-center justify-center text-center text-white z-10 px-6">
                        <div>
                            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                                Enhance Your Skills
                            </h2>
                            <p className="text-lg sm:text-xl mb-6">
                                Explore our courses and take the next step in your professional journey.
                            </p>
                            <NavLink to={"/contact"} className="px-6 py-3 bg-[#fcd459] text-black font-semibold rounded-md hover:bg-yellow-500 transition duration-200">
                                Contact Us
                            </NavLink>
                        </div>
                    </div>
                </div>

                {/* Slide 3 */}
                <div className="slide slide3 h-[500px] relative bg-cover bg-right-bottom">
                    <div className="absolute inset-0 flex items-center justify-center text-center text-white z-10 px-6">
                        <div>
                            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                                Achieve Your Goals
                            </h2>
                            <p className="text-lg sm:text-xl mb-6">
                                Our community of learners and mentors will help you reach new heights.
                            </p>
                            <NavLink to={"/contact"} className="px-6 py-3 bg-[#fcd459] text-black font-semibold rounded-md hover:bg-yellow-500 transition duration-200">
                                Contact Us
                            </NavLink>
                        </div>
                    </div>
                </div>

                {/* Slide 4 */}
                <div className="slide slide4 h-[500px] relative bg-cover bg-right-bottom">
                    <div className="absolute inset-0 flex items-center justify-center text-center text-white z-10 px-6">
                        <div>
                            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                                Join Our Community
                            </h2>
                            <p className="text-lg sm:text-xl mb-6">
                                Connect with like-minded individuals and excel together.
                            </p>
                            <NavLink to={"/contact"} className="px-6 py-3 bg-[#fcd459] text-black font-semibold rounded-md hover:bg-yellow-500 transition duration-200">
                                Contact Us
                            </NavLink>
                        </div>
                    </div>
                </div>
            </Slider>
        </div>
    );
};

export default AutoScrollSlider;
