import React, { useState } from "react";
import { FaPlay } from "react-icons/fa";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { faqs } from "../../utils/faqData";
import pricingData from "../../utils/pricingData.json";
import { FiSearch, FiArrowRight } from "react-icons/fi";

const Home = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [openFAQIndex, setOpenFAQIndex] = useState(null);
  const [isEmail, setIsEmail] = useState(false);

  const toggleSwitch = () => {
    setIsEmail((prev) => !prev);
  };

  const planData = pricingData.planData;
  const emailPlanData = pricingData.emailPlanData;

  const handlePlayClick = () => {
    setIsPlaying(!isPlaying);
  };

  const toggleFAQ = (index) => {
    setOpenFAQIndex(openFAQIndex === index ? null : index);
  };

  return (
    <>
      <div className="relative h-screen w-full">
        <img
          src="/Home/LandingImage.png"
          alt="Landing background"
          className="absolute h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 mt-8 md:mt-20 flex flex-col justify-center p-16 md:p-48 z-10">
          <h1 className="text-5xl font-bold text-white mb-4">
            Smart Decisions Start Here
          </h1>
          <p className="text-lg text-white mb-8">
            Empowering Real Estate Professionals with AI-Driven Insights
          </p>
          <div className="bg-white w-1/2 rounded-xl p-4 mb-4">
            <p className="text-custom-black p-4 font-semibold">
              Enter Subject Property Address
            </p>

            <div className="bg-white p-2 rounded-full border flex items-center w-[350px] md:w-[500px]">
              <FiSearch className="text-custom-gray ml-2" />

              <input
                type="text"
                placeholder="1234, Main Street New Mexico City"
                className="w-full p-3 text-black outline-none rounded-l-full ml-2"
              />
              <FiArrowRight className="text-gray-500 mr-2" />
            </div>
          </div>
          <button className="bg-custom-gradient w-1/5 text-white px-6 py-4 rounded-full ml-2">
            Get Started
          </button>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center p-20 md:p-48">
        <p className="text-custom-blue text-center text-xl font-semibold mb-6">
          Trusted by 10,000+ companies around the world
        </p>
        <div className="flex justify-center space-x-6 md:space-x-10">
          <img src="/Home/google.png" alt="Google" className="h-8 md:h-12" />
          <img
            src="/Home/facebook.png"
            alt="Facebook"
            className="h-8 md:h-12"
          />
          <img src="/Home/webflow.png" alt="YouTube" className="h-8 md:h-12" />
          <img src="/Home/pin.png" alt="Pinterest" className="h-8 md:h-12" />
          <img src="/Home/twitch.png" alt="Twitch" className="h-8 md:h-12" />
          <img src="/Home/webflow.png" alt="Webflow" className="h-8 md:h-12" />
        </div>
      </div>

      <div className="bg-gray-100 py-16 mt-10">
        <div className="text-center mb-10">
          <h2 className="text-4xl text-custom-secondary font-semibold">
            Browse our set of features
          </h2>
          <p className="text-custom-gray mt-4">
            Lorem ipsum dolor sit amet consectetur adipiscing elit semper dolor
          </p>
          <p className="text-custom-gray">
            elementum tempus hac tellus libero accumsan.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-6 px-6">
          {/* Card 1 */}
          <div className="bg-white rounded-lg shadow-md w-full md:w-1/4 flex flex-col items-center justify-between ">
            <div className="flex-1 flex items-center justify-center">
              <img
                src="/Home/cma.png"
                alt="Powerful CMAs"
                className="h-full object-contain"
              />
            </div>
            <div className="flex-1 mt-4 p-6">
              <h3 className="text-xl text-custom-black font-semibold mb-2">
                Powerful CMAs
              </h3>
              <p className="text-custom-gray">
                Generate accurate and data-driven CMAs using real-time market
                insights powered by the AI.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md w-full md:w-1/4 flex flex-col items-center justify-between">
            <div className="flex-1 flex items-center justify-center">
              <img
                src="/Home/insights.png"
                alt="Market Insights"
                className="h-full object-contain"
              />
            </div>
            <div className="flex-1 mt-4 p-6">
              <h3 className="text-xl text-custom-black font-semibold mb-2">
                Market Insights
              </h3>
              <p className="text-custom-gray">
                Stay informed with monthly market reports that keep you ahead of
                local and national real estate trends.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md w-full md:w-1/4 flex flex-col items-center justify-between">
            <div className="flex-1 flex items-center justify-center">
              <img
                src="/Home/property.png"
                alt="Property Improvement"
                className="h-full object-contain"
              />
            </div>
            <div className="flex-1 mt-4 p-6">
              <h3 className="text-xl text-custom-black font-semibold mb-2">
                Property Improvement
              </h3>
              <p className="text-custom-gray">
                Receive tailored improvement suggestions to maximize your
                property’s value based on actual subject property photos.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col  items-center py-16 mt-10">
        <p className="font-semibold text-xl text-custom-blue mb-4">WHY US</p>
        <h2 className="text-2xl font-bold  text-custom-secondary">
          A dedicated solution for startups
        </h2>
        <h2 className="text-2xl font-bold mb-6 text-custom-secondary">
          and enterprises
        </h2>

        <div className="relative max-w-4xl mx-auto">
          <img
            src="/Home/vid.png"
            alt="Why Us"
            className="rounded-lg shadow-lg"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            {isPlaying ? (
              <button
                className="bg-white text-custom-blue font-semibold text-md px-8 py-2 rounded-full"
                onClick={handlePlayClick}
              >
                Sign Up Now
              </button>
            ) : (
              <button
                className="bg-white text-black text-lg p-8 rounded-full shadow-lg"
                onClick={handlePlayClick}
              >
                <FaPlay />
              </button>
            )}
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-custom-secondary text-center mb-2">
          Pricing
        </h1>
        <p className="text-center text-custom-gray mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        <div className="flex justify-center items-center space-x-4 mb-6">
          <label htmlFor="toggle" className="font-bold">
            Email
          </label>
          <input
            id="toggle"
            type="checkbox"
            className="hidden"
            checked={isEmail}
            readOnly
          />
          <div className="relative" onClick={toggleSwitch}>
            <span className="toggle-label bg-custom-gradient w-12 h-6 rounded-full flex items-center p-1 cursor-pointer">
              <span
                className={`bg-white w-4 h-4 rounded-full shadow-md transition-transform transform ${
                  isEmail ? "translate-x-0" : "translate-x-6"
                }`}
              />
            </span>
          </div>
          <label htmlFor="toggle" className="font-bold">
            Plans
          </label>
        </div>

        <div
          className={`grid ${
            isEmail
              ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3"
              : "grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4"
          } gap-6 mx-auto`}
        >
          {(isEmail ? emailPlanData : planData).map((plan, idx) => (
            <div
              key={idx}
              className={`${plan?.bgClass} shadow-xl h-auto p-10 rounded-xl relative`}
            >
              {plan.isProfessional || plan.isPopular ? (
                <div
                  className={`absolute top-8 ${
                    isEmail ? "left-56" : "left-60"
                  } transform -translate-x-1/2 bg-indigo-300 text-sm text-white px-3 py-1 rounded-lg`}
                >
                  {plan.isProfessional || plan.isPopular ? "Popular" : ""}
                </div>
              ) : null}
              <h2 className={`text-xl font-bold ${plan.textClass}`}>
                {plan.title}
              </h2>
              <p className={`text-sm mb-4 ${plan.textClass}`}>
                {plan.subtitle}
              </p>
              <p
                className={`text-sm mb-4 ${
                  plan?.isProfessional || plan?.isPopular
                    ? "text-gray-200"
                    : "text-custom-gray"
                }`}
              >
                {plan.description}
              </p>
              <p className={`text-3xl font-bold my-4 ${plan.textClass}`}>
                {plan.price}{" "}
                <span
                  className={`text-sm font-normal ${
                    plan?.isProfessional || plan?.isPopular
                      ? "text-gray-200"
                      : "text-custom-gray"
                  }`}
                >
                  {plan.priceSuffix}
                </span>
              </p>
              <p
                className={`text-md ${
                  plan?.isProfessional || plan?.isPopular
                    ? "text-white"
                    : "text-custom-black"
                } font-semibold mb-2`}
              >
                What's included
              </p>
              <ul className={`text-sm space-y-2 mb-6 ${plan.textClass}`}>
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    {plan.isProfessional || plan.isPopular ? (
                      <span className="w-4 h-4 bg-white text-custom-blue border-2 border-custom-blue rounded-full flex items-center justify-center mr-2">
                        <svg
                          className="w-3 h-3"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      </span>
                    ) : (
                      <span className="w-4 h-4 bg-custom-gradient text-white rounded-full flex items-center justify-center mr-2">
                        <svg
                          className="w-3 h-3"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      </span>
                    )}
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-2 rounded-full ${plan.buttonClass} hover:opacity-90`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="py-16">
        <h2 className="text-center text-custom-secondary text-4xl font-bold mb-8">
          Frequently Asked Questions
        </h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {faqs.map((faq, index) => (
            <div key={index} className="space-y-2">
              <button
                className="w-full text-left py-8 px-6 rounded-lg shadow-md hover:bg-gray-200 flex justify-between items-center"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-custom-black font-semibold text-md">
                  {faq.question}
                </span>
                {openFAQIndex === index ? (
                  <IoIosArrowUp className="text-gray-500" />
                ) : (
                  <IoIosArrowDown className="text-gray-500" />
                )}
              </button>
              {openFAQIndex === index && (
                <div className="rounded-lg shadow-md p-4">
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold text-custom-blue">
                      {faq.question}
                    </h4>
                  </div>
                  <p className="text-gray-600 mt-2">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="py-16">
        <h2 className="text-center text-custom-secondary text-4xl font-bold mb-8">
          What Our Clients Say
        </h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: "John Carter",
              role: "Designer at XYZ Templates",
              feedback: "An amazing service",
              image: "/Home/client.png",
            },
            {
              name: "Sophie Moore",
              role: "Head of Design at ABC Templates",
              feedback: "One of a kind service",
              image: "/Home/client.png",
            },
            {
              name: "Andy Davis",
              role: "UX Lead at DEF Templates",
              feedback: "The best service",
              image: "/Home/client.png",
            },
          ].map((client, index) => (
            <div
              key={index}
              className="rounded-lg shadow-md p-6 flex flex-col items-start"
            >
              <img
                src={client.image}
                alt={client.name}
                className="w-16 h-16 rounded-full mb-4"
              />
              <div className="w-full">
                <p className="italic font-bold text-lg text-custom-black">
                  "{client.feedback}"
                </p>
                <p className="text-custom-gray mt-4 mb-4">
                  Lorem ipsum dolor sit ametolil col consectetur adipiscing
                  lectus a nunc mauris scelerisque sed.
                </p>
                <h3 className="mt-4 text-xl font-semibold text-gray-800">
                  {client.name}
                </h3>
                <p className="text-custom-blue">{client.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="py-16 bg-white">
        <h2 className="text-center text-4xl font-bold mb-4">Blog Articles</h2>
        <p className="text-center text-gray-500">
          Cras tristique tortor felis, id aliquet lorem vehicula ac. In hac
          habitasse platea dictumst.
        </p>
        <p className="text-center text-gray-500 mb-12">
          id aliquet lorem vehicula ac. In hac habitasse platea dictumst.
        </p>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src="/Home/blog.png"
              alt="Article 1"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="text-custom-black font-semibold mb-2">
                Olivia Rhye: 1 Jan 2023
              </div>
              <h3 className="text-2xl font-bold mb-2">
                Understanding the Importance of CMAs in Real Estate
              </h3>
              <p className="text-gray-500">
                How do you create compelling presentations that wow your
                colleagues and impress your managers?
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src="/Home/blog.png"
              alt="Article 2"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="text-custom-black font-semibold mb-2">
                Olivia Rhye: 1 Jan 2023
              </div>
              <h3 className="text-2xl font-bold mb-2">
                Top Strategies for Using CMAs in Property Investment
              </h3>
              <p className="text-gray-500">
                How do you create compelling presentations that wow your
                colleagues and impress your managers?
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="py-16 border-b-2">
        <div
          className="w-full max-w-4xl min-h-[300px] mx-auto flex flex-col md:flex-row items-center justify-between p-8 bg-cover bg-center rounded-2xl"
          style={{
            backgroundImage: 'url("/Home/news.png")',
          }}
        >
          <div className="text-center md:text-left text-white mb-6 md:mb-0">
            <h2 className="text-3xl font-bold">Newsletter Signup</h2>
            <p className="text-custom-gray">
              Stay updated with the latest real estate insights.
            </p>
          </div>

          <form className="flex flex-col md:flex-row w-full md:w-auto gap-2 items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full md:w-64 px-4 py-2 mb-4 md:mb-0 rounded-md md:rounded-l-md text-black outline-none"
            />
            <button
              type="submit"
              className="w-full md:w-auto bg-custom-gradient px-6 py-2 rounded-md md:rounded-r-md text-white hover:bg-purple-700"
            >
              Subscribe
            </button>

            {/* <p className="text-gray-300 w-full md:w-auto text-center mt-4 md:mt-0">
              Join the 10,000 users in our newsletter
            </p> */}
          </form>
        </div>
      </div>
    </>
  );
};

export default Home;
