import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faPhone, faMessage } from '@fortawesome/free-solid-svg-icons';

const ContactForm = () => {
  return (
    <section className="bg-gray-100 py-16 px-4 md-px-0">
      <div className="container mx-auto">
        <div className="w-full mx-auto bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl  mb-4">Get in Touch</h2>
          <p className="text-gray-600 mb-6">
            No time to waste – we’ve got exactly what you need! Step up to success with Ekanstech Solution.
            Our team is poised and ready to propel your business to new heights.
          </p>

          <form className="space-y-4">
            {/* Name Field */}
            <div className="flex items-center border-b border-gray-300 py-2">
              <FontAwesomeIcon icon={faUser} className="text-gray-400 w-6 h-6 mr-3" />
              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-transparent focus:outline-none text-gray-700"
                required
              />
            </div>

            {/* Email Field */}
            <div className="flex items-center border-b border-gray-300 py-2">
              <FontAwesomeIcon icon={faEnvelope} className="text-gray-400 w-6 h-6 mr-3" />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full bg-transparent focus:outline-none text-gray-700"
                required
              />
            </div>

            {/* Phone Field */}
            <div className="flex items-center border-b border-gray-300 py-2">
              <FontAwesomeIcon icon={faPhone} className="text-gray-400 w-6 h-6 mr-3" />
              <input
                type="tel"
                placeholder="Your Phone Number"
                className="w-full bg-transparent focus:outline-none text-gray-700"
                required
              />
            </div>

            {/* Message Field */}
            <div className="flex items-start border-b border-gray-300 py-2">
              <FontAwesomeIcon icon={faMessage} className="text-gray-400 w-6 h-6 mr-3 mt-2" />
              <textarea
                placeholder="Your Message"
                className="w-full bg-transparent focus:outline-none text-gray-700 resize-none"
                rows="4"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="mt-6">
              <button
                type="submit"
                className="w-full bg-[#fcd462] text-black font-semibold py-3 rounded-lg hover:brightness-90 transition duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
