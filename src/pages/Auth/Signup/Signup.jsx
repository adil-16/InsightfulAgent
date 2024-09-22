import React from "react";
import AuthButton from "../../../components/Buttons/SignupButton";
import { RxArrowLeft } from "react-icons/rx";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  const onBackClick = () => {
    navigate(-1);
  };
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

      <div className="flex flex-1 w-full max-w-7xl mx-auto py-2 px-4 lg:px-2">
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-custom-black mb-4">
            Create an Account{" "}
            <span role="img" aria-label="wave">
              🚀
            </span>
          </h2>
          <p className="text-custom-black text-lg mb-8">
            Enter your details and Hit 'Continue'
          </p>

          <form className="space-y-6">
            <div className="w-full max-w-sm">
              <div className="relative mt-4">
                <input
                  id="email"
                  type="email"
                  required
                  className="h-12 w-full px-4 py-2 text-gray-900 border border-gray-300 rounded-full focus:outline-none focus:border-blue-500 transition-colors duration-200"
                  placeholder="adil@gmail.com"
                />
                <label
                  htmlFor="email"
                  className="absolute -top-3 left-6 bg-white text-gray-500 px-1 text-sm transition-all duration-200"
                >
                  Enter your email
                </label>
              </div>

              <div className="relative mt-6">
                <input
                  id="password"
                  type="password"
                  required
                  className="h-12 w-full px-4 py-2 text-gray-900 border border-gray-300 rounded-full focus:outline-none focus:border-blue-500 transition-colors duration-200"
                  placeholder="******"
                />
                <label
                  htmlFor="password"
                  className="absolute -top-3 left-6 bg-white text-gray-500 px-1 text-sm transition-all duration-200"
                >
                  Password
                </label>
              </div>
              <div className="relative mt-6">
                <input
                  id="password"
                  type="password"
                  required
                  className="h-12 w-full px-4 py-2 text-gray-900 border border-gray-300 rounded-full focus:outline-none focus:border-blue-500 transition-colors duration-200"
                  placeholder="******"
                />
                <label
                  htmlFor="password"
                  className="absolute -top-3 left-6 bg-white text-gray-500 px-1 text-sm transition-all duration-200"
                >
                  Confirm Password
                </label>
              </div>
              <p className="text-custom-gray mt-4">
                I agree to the{" "}
                <span className="underline font-semibold">
                  Terms & Conditions
                </span>{" "}
                and
              </p>
              <p className="text-custom-gray underline font-semibold">
                Privacy Policy
              </p>
              <div className="flex items-center justify-between space-x-4">
                <button
                  className="bg-white text-custom-black border font-semibold py-3 px-4 rounded-full w-36 mt-6 flex items-center justify-center"
                  onClick={onBackClick}
                >
                  <RxArrowLeft className="h-6 w-6 mr-2" />
                  <span>Back</span>
                </button>
                <Link to={"/verificationEmail"}>
                  <AuthButton text="Continue" />
                </Link>
              </div>
            </div>
          </form>
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

export default Signup;
