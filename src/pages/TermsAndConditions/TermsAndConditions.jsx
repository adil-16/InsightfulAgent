import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-custom-blue text-center mb-2">
        Terms & Conditions
      </h1>
      <div className="flex flex-col p-8 space-x-6 mt-10 md:flex-row">
        <div className="md:w-1/4 mb-6 md:mb-0">
          <h3 className="text-2xl font-bold mb-6">TABLE OF CONTENTS</h3>
          <ul className="space-y-5 text-custom-black pl-4">
            <li>1. Account Terms</li>
            <li>2. Account Activation</li>
            <li>3. Shopify Rights</li>
            <li>4. Your Responsibilities</li>
            <li>5. Payment of Fees and Taxes</li>
            <li>6. Confidentiality</li>
            <li>7. Limitation of Liability and Indemnification</li>
            <li>8. Intellectual Property and Your Materials</li>
          </ul>
        </div>

        <div className="md:w-3/4 bg-gray-100 p-6 rounded-lg">
          <p className="text-md text-custom-black font-bold mb-4">
            Last updated on: March 1, 2023
          </p>
          <p className="text-custom-black mb-4">
            Welcome to Shopify! By signing up for a Shopify Account (as defined
            in Section 1) or by using any Shopify Services (as defined below),
            you are agreeing to be bound by the following terms and conditions
            (the "Terms of Service")
          </p>
          <p className="text-custom-black mb-4">
            As used in these Terms of Service, "we", "us", "our" and "Shopify"
            means the applicable Shopify Contracting Party (as defined in
            Section 13 below). and "you" means the Shopify User (if registering
            for or using a Shopify Service as an individual), or the business
            employing the Shopify User (if registering for or using a Shopify
            Service as a business) and any of its affiliates.
          </p>
          <p className="text-custom-black mb-4">
            Shopify provides a complete commerce platform that enables merchants
            to unify their commerce activities. Among other features, this
            platform includes a range of tools for merchants to build and
            customize online stores.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
