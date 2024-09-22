import React from "react";
import VerifyButton from "../../../components/Buttons/AuthButton";
import { Link } from "react-router-dom";

const VerificationEmail = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="w-full flex items-center space-x-64 p-4">
        <Link to={"/"}>
          <div className="flex items-center pl-16">
            <img
              src="logo.png"
              alt="Logo"
              className="h-20 w-auto object-cover"
            />
          </div>
        </Link>
        <div className="flex items-center justify-center space-x-8 bg-gray-100 px-8 py-4 rounded-full text-custom-black shadow-md">
          <Link to="/pricing" className="text-custom-black hover:text-gray-500">
            Pricing
          </Link>
          <Link
            to="/privacyPolicy"
            className="text-custom-black hover:text-gray-500"
          >
            Privacy Policy
          </Link>
          <Link
            to="/terms&conditions"
            className="text-custom-black hover:text-gray-500"
          >
            Terms & Conditions
          </Link>
        </div>
      </div>

      <div className="flex flex-1 w-full max-w-6xl mx-auto py-2 px-4 lg:px-2">
        <div className="w-full lg:w-1/2 flex flex-col items-center justify-center space-y-1">
          <img
            src="Auth/VerifyEmail.png"
            alt="Verify_Image"
            className="h-32 w-16 object-contain"
          />
          <h1 className="text-custom-black text-2xl whitespace-nowrap font-semibold text-center">
            Verification
          </h1>
          <p className="text-custom-gray">An email has been sent to</p>
          <p className="text-custom-black font-semibold pb-6">
            johntest@gmail.com
          </p>
          <Link to={"/profileSetup/personalInfo"}>
            <VerifyButton text="Got it" />
          </Link>
        </div>
        <div className="hidden lg:block w-1/2 pl-16">
          <img
            src="Auth/AuthImg.png"
            alt="Design Illustration"
            className="w-full h-auto rounded-lg object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default VerificationEmail;
