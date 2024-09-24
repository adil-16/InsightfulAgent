import React, { useState } from "react";
import ContinueButton from "../../../components/Buttons/AuthButton";
import { Link } from "react-router-dom";

const ProfessionalInfo = () => {
  const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);
  const [otherPurpose, setOtherPurpose] = useState("");
  const [source, setSource] = useState("");
  const [newsletter, setNewsletter] = useState(false);
  const [contactMethod, setContactMethod] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleCheckboxChange = (option) => {
    setSelectedCheckboxes((prev) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option]
    );
  };

  return (
    <div className="min-h-screen flex flex-col items-center p-4">
      <div className="w-full flex items-center justify-center p-4">
        <Link to={"/"}>
          <div className="flex items-center">
            <img
              src="/logo.png"
              alt="Logo"
              className="h-20 w-auto object-cover"
            />
          </div>
        </Link>
      </div>

      <div className="flex flex-col">
        <h1 className="text-xl text-custom-black font-bold mt-6">
          Primary Purpose for using the platform
        </h1>
        <p className="text-gray-600">(Select one or more)</p>

        <div className="grid grid-cols-1 gap-3 mt-2">
          {[
            "Creating Comparative Market Analyses (CMAs)",
            "Accessing Market Data",
            "Conducting Property Appraisals",
            "Buying or Selling Property",
            "Property Investment",
            "Other",
          ].map((option) => (
            <label key={option} className="flex items-center space-x-2">
              <input
                type="checkbox"
                value={option}
                checked={selectedCheckboxes.includes(option)}
                onChange={() => handleCheckboxChange(option)}
                className="form-checkbox h-5 w-5 text-custom-blue focus:ring-blue-500"
                style={{
                  backgroundColor: selectedCheckboxes.includes(option)
                    ? "transparent"
                    : "lightgray",
                }}
              />
              <span className={`flex-1 text-custom-gray p-1`}>{option}</span>
            </label>
          ))}
        </div>

        <textarea
          placeholder="Other..."
          value={otherPurpose}
          onChange={(e) => setOtherPurpose(e.target.value)}
          className="mt-4 p-2 border border-custom-gray rounded-xl w-full max-w-md"
        />

        <h2 className="text-xl text-custom-black font-bold  mt-6">
          How did you hear about us?
        </h2>
        <select
          value={source}
          onChange={(e) => setSource(e.target.value)}
          className="mt-2 p-3 border border-custom-gray rounded-full w-full max-w-md"
        >
          <option value="">Select an option</option>
          <option value="Friend">Friend</option>
          <option value="Social Media">Social Media</option>
        </select>

        <h2 className="text-xl text-custom-black font-bold  mt-6">
          Would you like to receive updates and Newsletter?
        </h2>
        <label className="flex items-center space-x-2 mt-2">
          <input
            type="checkbox"
            checked={newsletter}
            onChange={() => setNewsletter(!newsletter)}
            className="form-checkbox h-5 w-5 text-custom-blue focus:ring-blue-500"
          />
          <span className="text-custom-gray">
            Yes, sign me up for updates and newsletters.
          </span>
        </label>

        <h2 className="text-xl text-custom-black font-bold mt-6">
          Preferred Contact Method
        </h2>
        <select
          value={contactMethod}
          onChange={(e) => setContactMethod(e.target.value)}
          className="mt-2 p-3 border border-custom-gray rounded-full w-full max-w-md"
        >
          <option value="">Select an option</option>
          <option value="Email">Email</option>
          <option value="Phone">Phone</option>
        </select>

        <label className="flex items-center space-x-2 mt-6">
          <input
            type="checkbox"
            checked={termsAccepted}
            onChange={() => setTermsAccepted(!termsAccepted)}
            className="form-checkbox h-5 w-5 text-blue-600 focus:ring-blue-500"
          />
          <span className="text-custom-gray">
            I agree to <span className="underline">Terms & Conditions</span> and
            <span className="underline">Privacy Policy</span>
          </span>
        </label>

        <div className="mt-6">
          <Link to={"/"}>
            <ContinueButton text="Finish" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalInfo;
