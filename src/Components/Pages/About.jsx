import React, { useState } from 'react';
import { HOC } from '../Hoc/HOC';
import { FaMusic, FaGuitar, FaDrum } from 'react-icons/fa';  // Using FaPiano from react-icons/fa
import { GiGrandPiano } from 'react-icons/gi';

const About = () => {
  const [activeTab, setActiveTab] = useState('mission');

  const tabContent = {
    mission: {
      text: "Empower individuals to master musical instruments through expert guidance, personalized classes, and a supportive community. Our mission is to provide aspiring musicians with the tools, skills, and confidence needed to excel in their musical journey. We believe that music has the power to inspire, uplift, and connect people across cultures and backgrounds. Whether you're a beginner looking to pick up an instrument for the first time or an experienced musician aiming to refine your skills, our dedicated instructors are here to support you every step of the way. We foster an inclusive and creative environment where every student feels valued and encouraged.",
      image: "/public/Images/mission.jpg" // Replace with the actual mission image URL
    },
    vision: {
      text: "To create a world where everyone has the opportunity to unlock their musical potential and experience the joy of music. We envision a community where learning music is accessible, enjoyable, and fulfilling for all ages. Our goal is to bring the joy of playing an instrument to people of all skill levels, from absolute beginners to advanced musicians. By fostering a deep appreciation for music, we aim to cultivate lifelong learners who are passionate about the art of sound. Through innovative teaching methods, state-of-the-art resources, and a nurturing environment, we strive to inspire students to dream big and reach new heights in their musical endeavors.",
      image: "/public/Images/Our Vision.jpg" // Replace with the actual vision image URL
    },
    history: {
      text: "Founded by passionate musicians, our academy has helped students achieve musical mastery for over a decade with dedicated instructors and innovative teaching methods. Our journey began with a small group of music enthusiasts who shared a common dream: to make quality music education accessible to everyone. Over the years, we have grown into a thriving community of students, teachers, and music lovers who are committed to excellence in musical education. From humble beginnings, we've expanded our offerings to include a wide range of instruments, genres, and class formats to meet the diverse needs of our students. Today, our academy stands as a beacon of quality music education, recognized for its commitment to nurturing talent and fostering a deep love for music.",
      image: "/public/Images/Our History.jpg" // Replace with the actual history image URL
    }
  };
  
  return (
    <>
      <div className="min-h-screen bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0">
          <section className="pb-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl">
                We Are Your Musical Instrument Experts.
              </h2>
              <p className="mt-4 text-lg text-gray-500">
                Empowering you to master musical instruments with top-tier instructors and personalized classes.
              </p>
            </div>

            {/* Tabs Section */}
            <div className="flex justify-center mt-8 space-x-4">
              <button
                onClick={() => setActiveTab('mission')}
                className={`text-gray-900 font-semibold pb-2 border-b-2 ${activeTab === 'mission' ? 'text-[#fcd462] border-[#fcd462]' : 'border-transparent'}`}
              >
                Our Mission
              </button>
              <button
                onClick={() => setActiveTab('vision')}
                className={`text-gray-900 font-semibold pb-2 border-b-2 ${activeTab === 'vision' ? 'text-[#fcd462] border-[#fcd462]' : 'border-transparent'}`}
              >
                Our Vision
              </button>
              <button
                onClick={() => setActiveTab('history')}
                className={`text-gray-900 font-semibold pb-2 border-b-2 ${activeTab === 'history' ? 'text-[#fcd462] border-[#fcd462]' : 'border-transparent'}`}
              >
                Our History
              </button>
            </div>

            {/* Content Section */}
            <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="text-center lg:text-left">
                <p className="text-lg text-gray-600 text-justify">
                  {tabContent[activeTab].text}
                </p>
              </div>

              <div className="flex justify-center">
                <img
                  src={tabContent[activeTab].image} // Image changes based on active tab
                  alt="About us"
                  className="rounded-xl shadow-xl w-64 h-64 object-cover"
                />
              </div>
            </div>

            {/* Features Section */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 gap-x-10 text-gray-600">
              <div className="flex items-center justify-center space-x-2">
                <span className="text-[#fcd462]">✓</span>
                <p>Experienced and passionate instructors</p>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <span className="text-[#fcd462]">✓</span>
                <p>Personalized learning paths</p>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <span className="text-[#fcd462]">✓</span>
                <p>Flexible class timings</p>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <span className="text-[#fcd462]">✓</span>
                <p>Supportive community of musicians</p>
              </div>
            </div>
          </section>
          <div className="grid grid-cols-1 bg-gray-200 px-4 md:grid-cols-2 lg:grid-cols-4 gap-8 py-16">
            {/* Section 1: What We Offer */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <FaMusic className="text-4xl text-[#fcd462] mx-auto mb-4" /> {/* React Icon for Music */}
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">What We Offer</h3>
              <p className="text-gray-600">
                We offer professional music lessons for various instruments, including guitar, piano, drums, and more.
              </p>
            </div>

            {/* Section 2: Guitar Lessons */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <FaGuitar className="text-4xl text-[#fcd462] mx-auto mb-4" /> {/* React Icon for Guitar */}
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Guitar Lessons</h3>
              <p className="text-gray-600">
                Learn how to play the guitar at your own pace, with expert instructors guiding you every step of the way.
              </p>
            </div>

            {/* Section 3: Piano Lessons */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <GiGrandPiano className="text-4xl text-[#fcd462] mx-auto mb-4" /> {/* React Icon for Piano */}
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Piano Lessons</h3>
              <p className="text-gray-600">
                Discover the joy of playing the piano, from beginner to advanced levels, with personalized lessons.
              </p>
            </div>

            {/* Section 4: Drum Lessons */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <FaDrum className="text-4xl text-[#fcd462] mx-auto mb-4" /> {/* React Icon for Drums */}
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Drum Lessons</h3>
              <p className="text-gray-600">
                Perfect your rhythm and drumming technique with our hands-on drum lessons, suitable for all skill levels.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>

  );
};

export default HOC(About);
