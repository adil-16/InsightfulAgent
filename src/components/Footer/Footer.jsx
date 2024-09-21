import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { SiWhatsapp } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="bg-white shadow-lg py-12">
      <div className="container mx-auto px-4 grid lg:grid-cols-3 gap-8">
        <div className="space-y-4 text-center lg:text-left">
          <img
            src="/logo.png"
            alt="Logo"
            className="mx-auto lg:mx-0 h-12 w-auto"
          />
          <p className="text-gray-600 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alquam.
          </p>
          <div className="flex justify-center lg:justify-start space-x-4">
            <FaFacebookF className="text-gray-500 hover:text-blue-500" />
            <RiInstagramFill className="text-gray-500 hover:text-pink-600" />
            <FaTwitter className="text-gray-500 hover:text-blue-400" />
            <FaYoutube className="text-gray-500 hover:text-red-600" />
            <SiWhatsapp className="text-gray-500 hover:text-green-500" />
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="font-bold text-gray-800">Quick Links</h3>
          <ul className="space-y-2 text-gray-600">
            <li>
              <Link to="/">Features</Link>
            </li>
            <li>
              <Link to="/">Pricing</Link>
            </li>
            <li>
              <Link to="/">Support</Link>
            </li>
            <li>
              <Link to="/">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/">Terms of Service</Link>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="font-bold text-gray-800">Contact Information</h3>
          <ul className="space-y-2 text-gray-600">
            <li>
              Email:{" "}
              <a href="mailto:info@cma-reports.com">info@cma-reports.com</a>
            </li>
            <li>Phone: +1 555-236-7890</li>
            <li>Address: 123 CMA Lane, Suite 100, USA</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-200 mt-8 pt-4">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row justify-between text-sm text-gray-600">
          <p className="text-center lg:text-left">
            &copy; 2023 CMA Reports. All rights reserved.
          </p>
          <div className="flex justify-center lg:justify-end space-x-4">
            <Link to="/terms-of-service">Terms of Service</Link>
            <Link to="/privacy-policy">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
