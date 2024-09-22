import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="bg-white py-12">
      <div className="container mx-auto px-4 grid lg:grid-cols-4 gap-8">
        <div className="space-y-4 text-center lg:text-left">
          <img
            src="/logo.png"
            alt="Logo"
            className="mx-auto lg:mx-0 h-20 w-auto"
          />
          <p className="text-custom-gray text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alquam.
          </p>
          <div className="flex justify-center lg:justify-start space-x-4">
            <FaFacebookF className="text-custom-blue hover:text-blue-500" />
            <FaTwitter className="text-custom-blue hover:text-blue-400" />
            <RiInstagramFill className="text-custom-blue hover:text-pink-600" />
            <FaLinkedin className="text-custom-blue hover:text-blue-500" />
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="font-bold text-custom-black text-lg">Products</h3>
          <ul className="space-y-2 text-custom-gray">
            <li>
              <Link to="/">Features</Link>
            </li>
            <li>
              <Link to="/">Testimonials</Link>
            </li>
            <li>
              <Link to="/pricing">Pricing</Link>
            </li>
            <li>
              <Link to="/">FAQs</Link>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="font-bold text-custom-black text-lg">Quick Links</h3>
          <ul className="space-y-2 text-custom-gray">
            <li>
              <Link to="/">About Us</Link>
            </li>
            <li>
              <Link to="/">Services</Link>
            </li>
            <li>
              <Link to="/privacyPolicy">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/">Terms of Service</Link>
            </li>
            <li>
              <Link to="/">Lorem</Link>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="font-bold text-custom-black text-lg">
            Contact Information
          </h3>
          <ul className="space-y-2 text-custom-gray">
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
        <div className="container mx-auto px-4 flex flex-col lg:flex-row justify-center text-sm text-custom-gray">
          <p className="text-center lg:text-left">
            &copy; 2023 CMA Reports. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
