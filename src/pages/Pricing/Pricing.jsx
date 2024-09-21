import React, { useState } from "react";

const Pricing = () => {
  const [isEmail, setIsEmail] = useState(true);

  const toggleSwitch = () => {
    setIsEmail((prev) => !prev);
  };
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
          <span className="toggle-label bg-custom-blue w-12 h-6 rounded-full flex items-center p-1 cursor-pointer">
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

      <div className="grid md:grid-cols-4 gap-6">
        {[
          {
            title: "Pay-As-You-Go Plan",
            price: "Free",
            features: [
              "1 free report per month",
              "Additional reports @ $27 each",
              "Access to 1 PDF report template",
            ],
          },
          {
            title: "Basic Plan",
            price: "$97/monthly",
            features: [
              "Includes 2 reports per month",
              "Additional reports @ $27 each",
              "Access to 10 PDF report templates",
            ],
          },
          {
            title: "Growth Plan",
            price: "$297/monthly",
            features: [
              "Includes 5 reports per month",
              "Additional reports @ $27 each",
              "Access to 20 PDF report templates",
            ],
          },
          {
            title: "Professional Plan",
            price: "$497/monthly",
            features: [
              "Includes 10 reports per month",
              "Additional reports @ $27 each",
              "Access to 50 PDF report templates",
            ],
          },
        ].map((plan, idx) => (
          <div key={idx} className="bg-white shadow-lg h-96 p-10 rounded-lg">
            <h2 className="text-lg font-bold">{plan.title}</h2>
            <p className="text-3xl font-bold my-4">{plan.price}</p>
            <ul className="text-sm text-gray-600 space-y-2 mb-6">
              {plan.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
            <button className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
              Get Started
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
