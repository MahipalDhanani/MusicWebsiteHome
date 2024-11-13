import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic, faHeadphones, faMicrophone, faGuitar } from '@fortawesome/free-solid-svg-icons';

const services = [
  {
    title: 'Music Production',
    description: 'Professional music production services to bring your vision to life.',
    icon: faMusic,
    color: 'text-blue-500',
  },
  {
    title: 'Sound Engineering',
    description: 'High-quality sound engineering for all your audio needs.',
    icon: faHeadphones,
    color: 'text-green-500',
  },
  {
    title: 'Vocal Recording',
    description: 'State-of-the-art vocal recording for artists of all genres.',
    icon: faMicrophone,
    color: 'text-red-500',
  },
  {
    title: 'Instrumental Sessions',
    description: 'Professional instrumental sessions with skilled musicians.',
    icon: faGuitar,
    color: 'text-[#fcd462]',
  },
];

const ServicesSection = () => {
  return (
    <section className="py-16 bg-gray-50 text-center">
      <h2 className="text-5xl text-gray-800 mb-8">Our Services</h2>
      <div className="grid lg:px-0 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-4 gap-6 max-w-screen-xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white shadow-lg p-6 rounded-lg transition transform hover:scale-105"
          >
            <div className={`mb-4 ${service.color}`}>
              <FontAwesomeIcon icon={service.icon} className="text-5xl" />
            </div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
