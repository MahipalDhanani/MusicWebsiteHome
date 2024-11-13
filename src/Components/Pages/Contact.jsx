import React from 'react'
import { HOC } from '../Hoc/HOC'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import ContactForm from '../Other Componets/ContactForm';


function Contact() {
  return (
    <>
      <section className="bg-gray-100 py-10 ">
        <div className="container mx-auto max-w-screen-xl">
          <div className="flex flex-wrap lg:flex-nowrap px-4 md-px-0 -mx-4">
            {/* Contact Info Section */}
            <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
              <div className="bg-white p-8 rounded-lg shadow-lg h-full">
                <h2 className="text-2xl  mb-4">Get in Touch</h2>
                <p className="text-gray-600 mb-6">
                  No time to waste – we’ve got exactly what you need! Step up to
                  success with Ekanstech Solution. Our team is poised and ready to
                  propel your business to new heights. Don’t miss out, call us today
                  for cutting-edge, dependable digital marketing services that
                  guarantee your triumph.
                </p>
                <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="bg-[#fcd462] text-black p-3 rounded-full">
                      <FontAwesomeIcon icon={faMapMarkerAlt} className="w-6 h-6" />
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold">Address</h4>
                      <p>
                        <a href="https://maps.app.goo.gl/Dh545u1x7F1pNWBJ7" target="_blank" rel="noopener noreferrer">
                          238, Atlanta Mall, Near Sudama Chock, <br /> Mota Varachha, Surat - 394101
                        </a>
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-[#fcd462] text-black p-3 rounded-full">
                      <FontAwesomeIcon icon={faPhone} className="w-6 h-6" />
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold">Phone</h4>
                      <p>
                        <a href="tel:8160362614">+91 81603 62614</a>
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-[#fcd462] text-black p-3 rounded-full">
                      <FontAwesomeIcon icon={faEnvelope} className="w-6 h-6" />
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold">Email</h4>
                      <p>
                        <a href="mailto:ekanstechinfo@gmail.com">ekanstechinfo@gmail.com</a>
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Google Map Section */}
            <div className="w-full lg:w-1/2 px-4">
              <div className="border-2 border-[#fcd462] rounded-lg overflow-hidden h-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18458.126597653896!2d72.87530210590099!3d21.24211111215467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4517873113d82fa5%3A0xe553cc8c5ab21d18!2sEkanstech%20Solutions!5e1!3m2!1sen!2sin!4v1726034764863!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-[500px] lg:h-full"
                ></iframe>
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>


    </>
  )
}

export default HOC(Contact)