import React, { useState } from "react";
import {
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { saveEmailToFirestore } from "../../firebase/ApiFunctions/UserFunctions";
import { toast } from "react-toastify";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
});

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNotifyMe = async (values, { resetForm }) => {
    setLoading(true);
    const isSuccess = await saveEmailToFirestore(values.email);
    setLoading(false);
    if (isSuccess) {
      toast.success("Email saved successfully!");
      resetForm();
    } else {
      setLoading(false);
      toast.error("Error saving email. Please try again.");
    }
  };

  return (
    <div className="bg-custom-gradient flex flex-col h-screen">
      <nav className="flex items-center justify-between p-4 flex-shrink-0">
        <div className="flex items-center pl-4 md:pl-16">
          <img
            src="landingLogo.png"
            alt="Logo"
            className="h-16 md:h-20 w-auto object-contain"
          />
        </div>

        <div className="hidden md:flex flex-grow justify-center items-center">
          <div className="flex items-center space-x-8 bg-violet-400 lg:mr-72 px-8 py-4 rounded-full text-custom-black shadow-2xl">
            <Link to="/pricing" className="text-white hover:text-custom-black">
              Pricing
            </Link>
            <Link
              to="/privacyPolicy"
              className="text-white hover:text-custom-black"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms&conditions"
              className="text-white hover:text-custom-black"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>

        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            {isMenuOpen ? (
              <FaTimes className="h-6 w-6" />
            ) : (
              <FaBars className="h-6 w-6" />
            )}
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden bg-violet-400 text-center p-4">
          <Link
            to="/pricing"
            className="block text-white hover:text-custom-black mb-2"
          >
            Pricing
          </Link>
          <Link
            to="/privacyPolicy"
            className="block text-white hover:text-custom-black mb-2"
          >
            Privacy Policy
          </Link>
          <Link
            to="/terms&conditions"
            className="block text-white hover:text-custom-black"
          >
            Terms & Conditions
          </Link>
        </div>
      )}

      <div className="flex-grow flex flex-col justify-center items-center text-center p-4">
        <h1 className="text-4xl md:text-5xl font-semibold text-white tracking-widest">
          COMING SOON
        </h1>
        <p className="text-white mt-4 text-sm md:text-base">
          We are currently creating something fantastic. <br /> We will be here,
          Subscribe to be notified.
        </p>

        <div className="flex flex-col md:flex-row mt-6 w-full max-w-md">
          <Formik
            initialValues={{ email: "" }}
            validationSchema={validationSchema}
            onSubmit={handleNotifyMe}
          >
            {({ handleSubmit }) => (
              <Form className="flex flex-col md:flex-row mt-6 w-full max-w-md">
                <Field
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="px-4 py-2 rounded-full text-sm bg-transparent border border-custom-gray text-white mb-3 md:mb-0 md:mr-4 w-full"
                />
                <button
                  type="submit"
                  className="px-6 py-1 bg-white text-custom-blue rounded-full text-sm w-full md:w-1/3"
                  disabled={loading}
                >
                  {loading ? (
                    <div className="text-custom-black">Loading...</div>
                  ) : (
                    "Notify Me"
                  )}
                </button>
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-600 font-bold text-sm mt-2"
                />
              </Form>
            )}
          </Formik>
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
