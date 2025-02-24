import React from "react";
import { Link } from 'react-router-dom'
import { Instagram, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#081a28] text-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Quick Links Section */}
          <div className="py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
              <ul className="space-y-3 sm:space-y-4">
                <li>
                  <Link to="/about" className="hover:text-gray-400 transition duration-300">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/" className="hover:text-gray-400 transition duration-300">
                    Services
                  </Link>
                </li>
                <li>
                  <Link to="/articles" className="hover:text-gray-400 transition duration-300">
                    Articles
                  </Link>
                </li>
                {/* <li>
                  <Link to="/contact-us" className="hover:text-gray-400 transition duration-300">
                    Contact Us
                  </Link>
                </li> */}
              </ul>
            </div>
          </div>



          {/* Contact Information Section */}
          <div className="py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-lg font-semibold mb-6 text-white">Contact Us</h3>
              <ul className="space-y-3 sm:space-y-4 text-gray-200">
                <li className="">
                  <Mail className="inline-block mx-2" />
                  <a
                    href="mailto:horizonlegalmedia@gmail.com"
                    className="hover:text-gray-400 transition duration-300"
                  >
                    horizonlegalmedia@gmail.com
                  </a>
                </li>
                <li>
                  <a href="https://wa.me/917042861776" rel="noopener noreferrer" target="_blank" className="text-white hover:text-gray-200 flex items-center justify-center transition duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16" >
                      <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                    </svg>
                    <span className="pl-4">Chat on WhatsApp</span>
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+917042861776"
                    className="hover:text-gray-400 transition duration-300"
                  >
                    +91 7042861776
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+916396021631"
                    className="hover:text-gray-400 transition duration-300"
                  >
                    +91 6396021631
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Social Media Links Section */}
          <div className="py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-lg font-semibold mb-6">Follow Us</h3>
              <div className="flex justify-center space-x-6">
                <a
                  href="https://www.instagram.com/horizonlegalmedia/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-gray-400 transition duration-300"
                >
                  <Instagram className="h-8 w-8 text-2xl" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-gray-400 transition duration-300"
                >
                  <Linkedin className="h-8 w-8 text-2xl" />
                </a>

              </div>
            </div>
          </div>

          {/* Other projects  */}
          <div className="py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-lg font-semibold mb-6 text-white">Explore More</h3>
              <ul className="space-y-3 sm:space-y-4 text-gray-200">      
                <li>
                  <a
                    href="https://fashionlawyerindia.com/" target="_blank"
                    className="hover:text-gray-400 transition duration-300"
                  >
                    fashionlawyerindia
                  </a>
                </li>
                <li>
                  <a
                    href="https://iforumlawyers.com/" target="_blank"
                    className="hover:text-gray-400 transition duration-300"
                  >
                    iforumlawyers
                  </a>
                </li>
              
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-800 mt-8 px-4 py-6">
          <p className="text-sm text-gray-400 text-center">
            &copy; {new Date().getFullYear()} horizonlegalmedia. All rights reserved.
          </p>
        </div>
      </div>
    </footer>


  );
};

export default Footer;