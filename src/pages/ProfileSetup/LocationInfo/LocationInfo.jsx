import React from "react";
import ContinueButton from "../../../components/Buttons/AuthButton";
import { Link } from "react-router-dom";

const LocationInfo = () => {
  return (
    <div className="min-h-screen flex flex-col items-center">
      <div className="w-full flex items-center justify-center p-4">
        <div className="flex items-center">
          <img
            src="/logo.png"
            alt="Logo"
            className="h-20 w-auto object-cover"
          />
        </div>
      </div>

      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center space-y-1">
        <p className="text-custom-black text-2xl font-semibold whitespace-nowrap tracking-wider">
          Setup your Profile
        </p>
        <p className="text-custom-gray pb-10">Location</p>
        <form className="space-y-5">
          <div className="relative">
            <select
              id="city"
              required
              className="h-12 w-full px-6 py-2 text-gray-900 border border-gray-300 rounded-full focus:outline-none focus:border-blue-500 transition-colors duration-200 appearance-none"
            >
              <option value="" disabled selected>
                Choose City
              </option>
              <option value="New York">New York</option>
              <option value="Washington">Washington</option>
            </select>

            <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </div>
          </div>

          <div className="relative">
            <select
              id="state"
              required
              className="h-12 w-full px-6 py-2 text-gray-900 border border-gray-300 rounded-full focus:outline-none focus:border-blue-500 transition-colors duration-200 appearance-none"
            >
              <option value="" disabled selected>
                Choose State/Province
              </option>
              <option value="Test1">Test1</option>
              <option value="Test2">Test2</option>
            </select>

            <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </div>
          </div>
          <div className="relative">
            <select
              id="country"
              required
              className="h-12 w-full px-6 py-2 text-gray-900 border border-gray-300 rounded-full focus:outline-none focus:border-blue-500 transition-colors duration-200 appearance-none"
            >
              <option value="" disabled selected>
                Choose Country
              </option>
              <option value="Pak">Pakistan</option>
              <option value="USA">USA</option>
            </select>

            <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </div>
          </div>

          <div className="relative">
            <input
              id="zip"
              type="text"
              required
              className="h-12 w-full px-6 py-2 text-gray-900 border border-gray-300 rounded-full focus:outline-none focus:border-blue-500 transition-colors duration-200"
              placeholder="Zip/Postal Code"
            />
          </div>
          <div className="flex items-center justify-center">
            <Link to={"/profileSetup/professionalInfo"}>
              <ContinueButton text="Continue" />
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LocationInfo;
