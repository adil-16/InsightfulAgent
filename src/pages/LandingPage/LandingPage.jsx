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
    <div className="bg-custom-gradient flex flex-col h-full">
      <nav className="flex items-center justify-center p-4 flex-shrink-0">
        <div className="flex items-center">
          <img
            src="landingLogo.png"
            alt="Logo"
            className="h-16 md:h-24 w-auto object-contain"
          />
        </div>

        {/* <div className="hidden md:flex flex-grow justify-center items-center">
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
        </div> */}

        {/* <div className="md:hidden">
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
        </div> */}
      </nav>

      {/* {isMenuOpen && (
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
      )} */}

      <div className="flex-grow flex flex-col py-44 justify-center items-center text-center shadow-md">
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
                  className="px-4 py-2 rounded-full text-sm bg-transparent placeholder-white border border-white text-white mb-3 md:mb-0 md:mr-4 w-full"
                />
                <button
                  type="submit"
                  className="px-6 py-1 bg-white text-custom-blue font-semibold rounded-full text-sm w-full md:w-1/3"
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
                  className="text-white font-bold text-sm mt-2"
                />
              </Form>
            )}
          </Formik>
        </div>
      </div>
      <section className=" py-12 text-center shadow-md">
        <h2 className="text-3xl font-bold text-white">
          Revolutionizing CMAs with AI-Powered Precision
        </h2>
        <p className="mt-4 text-lg text-white">
          Smart Decisions Start Here. Join the Waitlist for Early Access!
        </p>
      </section>

      <section className=" py-12 text-center shadow-md">
        <h3 className="text-2xl font-semibold text-white">
          Welcome to Insightful Agent—Your Edge in Real Estate Pricing
        </h3>
        <p className="mt-4 text-white">
          We’re redefining how real estate professionals create and deliver
          Comparative Market Analyses (CMAs).
        </p>
        <p className=" text-white">
          Insightful Agent provides AI-driven, data-backed reports that help you
          make smarter, faster decisions.
        </p>
      </section>

      <section className="py-12 px-6 shadow-md">
        <h3 className="text-2xl font-bold text-white text-center">
          Why Insightful Agent is a Game Changer
        </h3>
        <div className="mt-6 space-y-6">
          <div className="text-left max-w-4xl mx-auto">
            <h4 className="font-semibold text-lg text-white">
              AI-Powered Reports:
            </h4>
            <p className="text-white">
              Say goodbye to time-consuming CMAs. Our platform leverages AI and
              real-time market data to give you accurate, research-backed
              reports in minutes, not hours.
            </p>
          </div>
          <div className="text-left max-w-4xl mx-auto">
            <h4 className="font-semibold text-lg text-white">
              Tailored Pricing Strategies:
            </h4>
            <p className="text-white">
              Our CMAs don’t just give you the basics. We provide detailed
              pricing strategies and property improvement suggestions, so you
              can confidently price homes and justify your valuations to
              clients.
            </p>
          </div>
          <div className="text-left max-w-4xl mx-auto">
            <h4 className="font-semibold text-lg text-white">
              Comprehensive Market Insights:
            </h4>
            <p className="text-white">
              Stay informed with neighborhood analysis, school ratings, and
              long-term market forecasts—all seamlessly integrated into our
              reports to provide a complete picture of your market.
            </p>
          </div>
          <div className="text-left max-w-4xl mx-auto">
            <h4 className="font-semibold text-lg text-white">
              Robust and Easy-to-Use:
            </h4>
            <p className="text-white">
              No steep learning curves here! Our platform is designed for real
              estate professionals of all experience levels, helping you deliver
              professional, in-depth reports with ease.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 px-6 shadow-md">
        <h3 className="text-2xl font-bold text-white text-center">
          Who Insightful Agent Helps
        </h3>
        <div className="mt-6 space-y-6">
          <div className="text-left max-w-4xl mx-auto">
            <h4 className="font-semibold text-lg text-white">
              Real Estate Agents:
            </h4>
            <p className="text-white">
              Save time, close more deals, and provide clients with reports that
              stand out.
            </p>
          </div>
          <div className="text-left max-w-4xl mx-auto">
            <h4 className="font-semibold text-lg text-white">
              Home Sellers & Buyers:
            </h4>
            <p className="text-white">
              Ensure you’re buying or selling at the right price with accurate,
              research-driven valuations.
            </p>
          </div>
          <div className="text-left max-w-4xl mx-auto">
            <h4 className="font-semibold text-lg text-white">Investors:</h4>
            <p className="text-white">
              Discover undervalued properties and maximize returns with
              data-backed insights
            </p>
          </div>
          <div className="text-left max-w-4xl mx-auto">
            <h4 className="font-semibold text-lg text-white">Appraisers:</h4>
            <p className="text-white">
              Use Insightful Agent to further validate your findings and enhance
              your credibility.
            </p>
          </div>
          <div className="text-left max-w-4xl mx-auto">
            <h4 className="font-semibold text-lg text-white">Consultants:</h4>
            <p className="text-white">
              Provide clients with a comprehensive, data-driven analysis to
              support informed decision-making.
            </p>
          </div>
        </div>
      </section>
      <section className="py-12 px-6 shadow-md">
        <h3 className="text-2xl font-bold text-white text-center">
          Why Subscribe to Waitlist?
        </h3>
        <div className="mt-6 space-y-6">
          <div className="text-left max-w-4xl mx-auto">
            <h4 className="font-semibold text-lg text-white">
              Be the first to know:
            </h4>
            <p className="text-white">
              Get notified the moment we go live and start creating robust CMAs
              that will change how you do business.
            </p>
          </div>
          <div className="text-left max-w-4xl mx-auto">
            <h4 className="font-semibold text-lg text-white">
              Early Access Perks:
            </h4>
            <p className="text-white">
              Sign up now and receive{" "}
              <span className="font-bold">50% off your first report</span> {""}
              when we launch.
            </p>
          </div>
          <div className="text-left max-w-4xl mx-auto">
            <h4 className="font-semibold text-lg text-white">
              Exclusive Insights:
            </h4>
            <p className="text-white">
              Join our community of forward-thinking real estate professionals
              and stay ahead of the curve with exclusive updates and tips.
            </p>
          </div>
        </div>
      </section>

      <section className=" py-12 text-center shadow-md">
        <h2 className="text-3xl font-bold text-white">Don’t miss out!</h2>
        <p className="mt-4 text-lg text-white">
          Be one of the first to experience the future of CMAs.
        </p>
        <p className="mt-4 text-lg text-white">
          <span className="font-bold">Join the waitlist today</span> {""} and
          unlock early access to Insightful Agent.
        </p>
      </section>

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
