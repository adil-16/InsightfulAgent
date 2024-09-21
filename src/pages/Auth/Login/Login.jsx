import React from "react";
import AuthButton from "../../../components/Buttons/AuthButton";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="w-full flex items-center space-x-64 p-4">
        <div className="flex items-center pl-16">
          <img src="logo.png" alt="Logo" className="h-20 w-auto object-cover" />
        </div>
        <div className="flex items-center justify-center space-x-8 bg-gray-100 px-8 py-4 rounded-full text-custom-black shadow-md">
          <a href="#" className="text-custom-black hover:text-gray-500">
            Pricing
          </a>
          <a href="#" className="text-custom-black hover:text-gray-500">
            Privacy Policy
          </a>
          <a href="#" className="text-custom-black hover:text-gray-500">
            Terms & Conditions
          </a>
        </div>
      </div>

      <div className="flex flex-1 w-full max-w-7xl mx-auto py-2 px-4 lg:px-2">
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-custom-black mb-4">
            Welcome to App Name{" "}
            <span role="img" aria-label="wave">
              😊
            </span>
          </h2>
          <p className="text-custom-black text-lg mb-8">
            Login to your account
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
              <AuthButton text="Login" />

              <div className="flex items-center justify-center mt-4">
                <a
                  href="#"
                  className="text-sm text-custom-black font-semibold underline"
                >
                  Forget Password?
                </a>
              </div>
              <div className="flex items-center justify-center my-6">
                <div className="flex-grow border-t border-gray-300"></div>
                <span className="px-2 text-custom-gray">Or Continue with</span>
                <div className="flex-grow border-t border-gray-300"></div>
              </div>
              <button
                type="button"
                className="w-full flex items-center justify-center py-3 px-4 border border-gray-300 rounded-full shadow-sm bg-white text-gray-600 hover:bg-gray-50 transition"
              >
                <FcGoogle />
                <span className="pl-2">Login with Google</span>
              </button>
              <Link to={"/signup"}>
                <button
                  type="button"
                  className="w-full py-3 px-4 mt-4 bg-black text-white rounded-full hover:bg-gray-900 transition"
                >
                  Join with an email →
                </button>
              </Link>
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

export default Login;
