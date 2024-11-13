import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faLinkedinIn,faYoutube } from '@fortawesome/free-brands-svg-icons';
import Slider from 'react-slick';
import { HOC } from '../Hoc/HOC';

const TestimonialSection = () => {
    const testimonials = [
        {
            id: 1,
            name: "Lance Jarvis",
            review: "This course has transformed my music skills. Highly recommend it to anyone who wants to learn.",
            image: "https://randomuser.me/api/portraits/men/32.jpg",
        },
        {
            id: 2,
            name: "Ericka Lynda",
            review: "The lessons are engaging and the instructors are super helpful. A wonderful experience!",
            image: "https://randomuser.me/api/portraits/women/44.jpg",
        },
        {
            id: 3,
            name: "Neil Wilford",
            review: "Great environment for learning music, and I’ve made so much progress already. Love it!",
            image: "https://randomuser.me/api/portraits/men/10.jpg",
        },
        {
            id: 4,
            name: "Adffdg Lance Jarvis",
            review: "This course has transformed my music skills. Highly recommend it to anyone who wants to learn.",
            image: "https://randomuser.me/api/portraits/men/32.jpg",
        },
        {
            id: 5,
            name: "Bsdg Ericka Lynda",
            review: "The lessons are engaging and the instructors are super helpful. A wonderful experience!",
            image: "https://randomuser.me/api/portraits/women/44.jpg",
        },
        {
            id: 6,
            name: "Csdf Neil Wilford",
            review: "Great environment for learning music, and I’ve made so much progress already. Love it!",
            image: "https://randomuser.me/api/portraits/men/10.jpg",
        },
    ];

    // Slick slider settings
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 2 }
            },
            {
                breakpoint: 640,
                settings: { slidesToShow: 1 }
            },
        ]
    };

    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6 lg:px-0">
                <h2 className="text-3xl md:text-4xl text-center mb-4">Student Reviews</h2>
                <p className="text-center text-gray-500 mb-10">What our students are saying...</p>

                {/* Slick Slider Component */}
                <Slider {...settings}>
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.id} className="p-6">
                            <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300 p-6 text-center">
                                <div className={`rounded-full w-24 h-24 mx-auto bg-[#fcd459] flex items-center justify-center`}>
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="rounded-full w-20 h-20 border-4 border-white"
                                    />
                                </div>
                                <p className="mt-4 font-semibold text-lg text-gray-800">{testimonial.name}</p>
                                <p className="mt-2 text-gray-600">{testimonial.review}</p>

                                {/* Social Media Icons */}
                                <div className="mt-4 flex justify-center space-x-4 text-gray-500">
                                    <a href="https://www.facebook.com/people/Harmony-Music/100076525804141/" aria-label="Facebook" className="hover:text-blue-600">
                                        <FontAwesomeIcon icon={faFacebookF} />
                                    </a>
                                    <a href="https://www.instagram.com/harmonymusic_class_official/" aria-label="Instagram" className="hover:text-[#F56040]">
                                        <FontAwesomeIcon icon={faInstagram} />
                                    </a>
                                    <a href="https://www.youtube.com/@harmonymusic_class_official" aria-label="Youtube" className="hover:text-red-700">
                                        <FontAwesomeIcon icon={faYoutube} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default HOC(TestimonialSection);
