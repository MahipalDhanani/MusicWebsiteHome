import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram,faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faMapMarkerAlt, faEnvelope, faPhone, faArrowUp } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Show "Scroll to Top" button after scrolling down 300px
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to the top of the page smoothly
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#181818] text-white pt-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-screen-xl md:px-0 p-10">
        <div>
          <h3 className="text-lg font-semibold mb-4 text-[#fcd462]">Quick Links</h3>
          <ul>
            <li className="mb-2"><a href="/" className="hover:text-[#fcd462] transition-all">Home</a></li>
            <li className="mb-2"><a href="/about" className="hover:text-[#fcd462] transition-all">About Us</a></li>
            <li className="mb-2"><a href="/services" className="hover:text-[#fcd462] transition-all">Courses</a></li>
            <li className="mb-2"><a href="/contact" className="hover:text-[#fcd462] transition-all">Contact Us</a></li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-4 text-[#fcd462]">Our Services</h3>
          <ul>
            <li className="mb-2"><a href="/music-production" className="hover:text-[#fcd462] transition-all">Music Production</a></li>
            <li className="mb-2"><a href="/sound-engineering" className="hover:text-[#fcd462] transition-all">Sound Engineering</a></li>
            <li className="mb-2"><a href="/vocal-recording" className="hover:text-[#fcd462] transition-all">Vocal Recording</a></li>
            <li className="mb-2"><a href="/instrumental-sessions" className="hover:text-[#fcd462] transition-all">Instrumental Sessions</a></li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-4 text-[#fcd462]">Write</h3>
          <ul className="space-y-2">
            <li>
              <a href="https://www.facebook.com/people/Harmony-Music/100076525804141/" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-[#fcd462] transition-all">
                <FontAwesomeIcon icon={faFacebook} className="text-xl " />
                Facebook
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/harmonymusic_class_official/" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-[#fcd462] transition-all">
                <FontAwesomeIcon icon={faInstagram} className="text-xl " />
                Instagram
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/@harmonymusic_class_official" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-[#fcd462] transition-all">
                <FontAwesomeIcon icon={faYoutube} className="text-xl " />
                You Tube
              </a>
            </li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-4 text-[#fcd462]">Help & Support</h3>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="text-xl transition-all" />
              344, Silver Bussiness Hub, Yogi Chowk, Simada Gam, Surat
            </li>
            <li className="flex items-center gap-2">
              <FontAwesomeIcon icon={faEnvelope} className="text-xl transition-all" />
              <a href="mailto:ekanstechinfo@gmail.com" className="hover:text-[#fcd462] transition-all">ekanstechinfo@gmail.com</a>
            </li>
            <li className="flex items-center gap-2">
              <FontAwesomeIcon icon={faPhone} className="text-xl transition-all" />
              <a href="tel:+918160362614" className="hover:text-[#fcd462] transition-all">+91 81603 62614</a>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="bg-black text-white text-center py-4 mt-10">
        <p>Copyright © 2024 by <span className="text-[#fcd462]">Harmony Music</span>. All Rights Reserved</p>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed shadow-xl bottom-8 right-8 bg-[#fcd462] text-black p-3 rounded-full shadow-lg hover:bg-[#e6b74a] transition-all"
          aria-label="Scroll to top"
        >
          <FontAwesomeIcon icon={faArrowUp} className="text-lg" />
        </button>
      )}
    </footer>
  );
}
