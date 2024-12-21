import React from "react";
import { Link as ScrollLink } from "react-scroll";

const Footer = () => {
  return (
    <footer className="bg-[rgb(2,28,51)] text-gray-400 py-16">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 px-6">
        {/* About Section */}
        <div>
          <h2 className="text-white text-xl font-bold mb-4">About Us</h2>
          <p className="text-sm leading-relaxed">
            We are a passionate team dedicated to building innovative solutions
            and providing exceptional services. Follow us for updates and inspiration.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-white text-xl font-bold mb-4">Quick Links</h2>
          <ul className="space-y-3">
            <li>
              <ScrollLink
                to="dashboard-section"
                smooth={true}
                duration={500}
                className="hover:text-white transition cursor-pointer"
              >
                Home
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="services-section"
                smooth={true}
                duration={500}
                className="hover:text-white transition cursor-pointer"
              >
                Services
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="about-section"
                smooth={true}
                duration={500}
                className="hover:text-white transition cursor-pointer"
              >
                About Us
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="help-section"
                smooth={true}
                duration={500}
                className="hover:text-white transition cursor-pointer"
              >
                Contact Us
              </ScrollLink>
            </li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div>
          <h2 className="text-white text-xl font-bold mb-4">Newsletter</h2>
          <p className="text-sm leading-relaxed mb-6">
            Subscribe to our newsletter for the latest updates and offers.
          </p>
          <form className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0">
            <input
              type="email"
              placeholder="Your Email"
              className="w-full md:flex-1 p-3 focus:ring-2 focus:ring-green-600 outline-none bg-[rgb(2,28,51)] text-gray-200"
            />
            <button
              type="submit"
              className="w-full md:w-auto px-6 py-3 bg-green-600 text-white hover:bg-green-700 transition"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Social Media Links */}
        <div>
          <h2 className="text-white text-xl font-bold mb-4">Follow Us</h2>
          <div className="flex space-x-5">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
              aria-label="Facebook"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="w-7 h-7"
                viewBox="0 0 24 24"
              >
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.99 3.657 9.128 8.438 9.877v-6.987H7.897v-2.89h2.541v-2.205c0-2.507 1.492-3.89 3.777-3.89 1.093 0 2.238.194 2.238.194v2.46h-1.261c-1.242 0-1.625.775-1.625 1.563v1.879h2.762l-.441 2.89h-2.321V22C18.343 21.128 22 16.99 22 12z" />
              </svg>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
              aria-label="Twitter"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="w-7 h-7"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
              </svg>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
              aria-label="Instagram"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="w-7 h-7"
                viewBox="0 0 24 24"
              >
                <path d="M7 2C4.791 2 3 3.791 3 6v12c0 2.209 1.791 4 4 4h10c2.209 0 4-1.791 4-4V6c0-2.209-1.791-4-4-4H7zm10 2a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h10zM12 7c-2.757 0-5 2.243-5 5s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm4.5-.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
              </svg>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
              aria-label="LinkedIn"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="w-7 h-7"
                viewBox="0 0 24 24"
              >
                <path d="M22.23 0H1.77C.79 0 0 .79 0 1.77v20.46C0 23.21.79 24 1.77 24h20.46c.98 0 1.77-.79 1.77-1.77V1.77C24 .79 23.21 0 22.23 0zM7.19 20.41H3.56v-9.3h3.63v9.3zM5.38 9.93c-1.16 0-2.09-.94-2.09-2.09s.93-2.09 2.09-2.09 2.09.94 2.09 2.09-.93 2.09-2.09 2.09zM20.41 20.41h-3.63v-5.5c0-1.31-.47-2.21-1.64-2.21-1.09 0-1.75.74-1.75 1.91v5.8h-3.63v-9.3h3.47v1.27h.05c.47-.89 1.62-1.78 3.27-1.78 2.4 0 4.32 1.59 4.32 5.01v4.8z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm text-gray-500">
        <span>© 2024 ICN. All Rights Reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;
