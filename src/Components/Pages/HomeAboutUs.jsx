import React from 'react';
import { NavLink } from 'react-router-dom';

const AboutUs = () => {
  return (
    <section className="py-16  px-6 bg-gray-900 text-white md:px-12 lg:px-24 xl:px-40" id="about">
      <div className="container mx-auto max-w-screen-xl text-center">
        <h2 className="text-5xl  mb-8 md:text-5xl">About Us</h2>
        <p className="text-lg mb-8 md:text-xl">
          Welcome to our music platform, a place where melodies come alive. We are dedicated to connecting artists and
          listeners, bringing music enthusiasts together to share, explore, and enjoy sounds from around the world.
          Whether you are a musician, a fan, or simply curious about discovering new music, our mission is to make it
          easier for you to find, enjoy, and experience the magic of music.
        </p>
        <p className="text-lg mb-8 md:text-xl">
          Join us in exploring genres, discovering fresh artists, and enjoying live events online. Together, let’s
          celebrate the beauty of sound and rhythm.
        </p>
        <NavLink to={"/about"} className="px-8 py-3 text-black mt-4 text-lg font-medium bg-[#fcd462] hover:brightness-90 rounded-full transition duration-300">
          Learn More
        </NavLink>
      </div>
    </section>
  );
};

export default AboutUs;
