import React, { useState } from "react";
import pricingData from "../../utils/pricingData.json";

const Pricing = () => {
  const [isEmail, setIsEmail] = useState(false);

  const toggleSwitch = () => {
    setIsEmail((prev) => !prev);
  };

  const planData = pricingData.planData;
  const emailPlanData = pricingData.emailPlanData;

  return (
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
            className={`${plan.bgClass} shadow-xl h-auto p-10 rounded-xl relative`}
          >
            {plan.isProfessional || plan.isPopular ? (
              <div
                className={`absolute top-8 ${
                  isEmail ? "left-56" : "left-60"
                } transform -translate-x-1/2 border text-sm text-white px-3 py-1 rounded-lg`}
              >
                {plan.isProfessional || plan.isPopular ? "Popular" : ""}
              </div>
            ) : null}
            <h2 className={`text-xl font-bold ${plan.textClass}`}>
              {plan.title}
            </h2>
            <p className={`text-sm mb-4 ${plan.textClass}`}>{plan.subtitle}</p>
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
  );
};

export default Pricing;
