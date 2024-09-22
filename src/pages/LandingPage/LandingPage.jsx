import React from "react";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

const LandingPage = () => {
  return (
    <div className="bg-custom-gradient flex flex-col h-screen">
      <nav className="flex items-center md:space-x-72 p-4 flex-shrink-0">
        <div className="flex items-center pl-4 md:pl-16">
          <img src="landingLogo.png" alt="Logo" className="h-16 w-auto" />
        </div>
        <div className="hidden md:flex items-center justify-center space-x-8 bg-violet-400 px-8 py-4 rounded-full text-custom-black shadow-2xl">
          <a href="/pricing" className="text-white hover:text-custom-black">
            Pricing
          </a>
          <a href="#" className="text-white hover:text-custom-black">
            Privacy Policy
          </a>
          <a href="#" className="text-white hover:text-custom-black">
            Terms & Conditions
          </a>
        </div>
      </nav>
      <div className="flex-grow flex flex-col justify-center items-center text-center p-4">
        <h1 className="text-4xl md:text-5xl font-semibold text-white tracking-widest">
          COMING SOON
        </h1>
        <p className="text-white mt-4 text-sm md:text-base">
          We are currently creating something fantastic. <br /> We will be here,
          Subscribe to be notified.
        </p>
        <div className="flex-col md:flex-row mt-6 w-full max-w-md">
          <input
            type="email"
            placeholder="Your Email"
            className="px-4 py-2 rounded-full text-sm bg-transparent border border-custom-gray text-white mb-2 md:mb-0 md:mr-4"
          />
          <button className="px-6 py-2 bg-white text-custom-blue rounded-full text-sm">
            Notify Me
          </button>
        </div>
      </div>
      <footer className="py-6 text-center text-white flex-shrink-0">
        <p>Our Social Media Handlers</p>
        <div className="flex justify-center space-x-4 mt-2">
          <FaFacebook className="h-6 w-6 rounded-full hover:text-blue-600 transition" />
          <FaLinkedin className="h-6 w-6 rounded-full hover:text-blue-700 transition" />
          <FaTwitter className="h-6 w-6 rounded-full hover:text-blue-500 transition" />
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
