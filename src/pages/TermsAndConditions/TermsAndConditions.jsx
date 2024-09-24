import React, { useState } from "react";

const TermsAndConditions = () => {
  const [activeSection, setActiveSection] = useState(1);

  const sections = [
    {
      id: 1,
      title: "Account Terms",
      content: ` Welcome to Shopify! By signing up for a Shopify Account (as defined
            in Section 1) or by using any Shopify Services (as defined below),
            you are agreeing to be bound by the following terms and conditions
            (the "Terms of Service")
            As used in these Terms of Service, "we", "us", "our" and "Shopify"
            means the applicable Shopify Contracting Party (as defined in
            Section 13 below). and "you" means the Shopify User (if registering
            for or using a Shopify Service as an individual), or the business
            employing the Shopify User (if registering for or using a Shopify
            Service as a business) and any of its affiliates.
            
            Shopify provides a complete commerce platform that enables merchants
            to unify their commerce activities. Among other features, this
            platform includes a range of tools for merchants to build and
            customize online stores.`,
    },
    {
      id: 2,
      title: "Account Activation",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel velit eget massa pharetra lacinia.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel velit eget massa pharetra lacinia.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel velit eget massa pharetra lacinia.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel velit eget massa pharetra lacinia.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel velit eget massa pharetra lacinia.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel velit eget massa pharetra lacinia.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel velit eget massa pharetra lacinia.",
    },
    {
      id: 3,
      title: "Shopify Rights",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel velit eget massa pharetra lacinia.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel velit eget massa pharetra lacinia.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel velit eget massa pharetra lacinia.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel velit eget massa pharetra lacinia.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel velit eget massa pharetra lacinia.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel velit eget massa pharetra lacinia.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel velit eget massa pharetra lacinia. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel velit eget massa pharetra lacinia.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel velit eget massa pharetra lacinia.",
    },
    {
      id: 4,
      title: "Your Responsibilities",
      content:
        "Curabitur vel velit eget massa pharetra lacinia.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel velit eget massa pharetra lacinia.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel velit eget massa pharetra lacinia.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel velit eget massa pharetra lacinia.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel velit eget massa pharetra lacinia.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel velit eget massa pharetra lacinia.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel velit eget massa pharetra lacinia.",
    },
    {
      id: 5,
      title: "Payment of Fees and Taxes",
      content:
        "Consectetur adipiscing elit. Curabitur vel velit eget massa pharetra lacinia.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel velit eget massa pharetra lacinia.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel velit eget massa pharetra lacinia.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel velit eget massa pharetra lacinia.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel velit eget massa pharetra lacinia.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel velit eget massa pharetra lacinia.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel velit eget massa pharetra lacinia.",
    },
    {
      id: 6,
      title: "Confidentiality",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel velit eget massa pharetra lacinia.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel velit eget massa pharetra lacinia.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel velit eget massa pharetra lacinia.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel velit eget massa pharetra lacinia.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel velit eget massa pharetra lacinia.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel velit eget massa pharetra lacinia.",
    },
    {
      id: 7,
      title: "Limitation of Liability and Indemnification",
      content:
        "Sit amet, consectetur adipiscing elit. Curabitur vel velit eget massa pharetra lacinia.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel velit eget massa pharetra lacinia.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel velit eget massa pharetra lacinia.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel velit eget massa pharetra lacinia.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel velit eget massa pharetra lacinia.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel velit eget massa pharetra lacinia.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel velit eget massa pharetra lacinia.",
    },
    {
      id: 8,
      title: "Intellectual Property and Your Materials",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel velit eget massa pharetra lacinia.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel velit eget massa pharetra lacinia.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel velit eget massa pharetra lacinia.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel velit eget massa pharetra lacinia.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel velit eget massa pharetra lacinia.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel velit eget massa pharetra lacinia.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel velit eget massa pharetra lacinia.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-custom-blue text-center mb-2">
        Terms & Conditions
      </h1>
      <div className="flex flex-col p-8 space-x-6 mt-10 md:flex-row">
        <div className="md:w-1/4 mb-6 md:mb-0">
          <h3 className="text-2xl font-bold mb-6">TABLE OF CONTENTS</h3>
          <ul className="space-y-5 text-custom-black pl-4">
            {sections.map((section) => (
              <li
                key={section.id}
                className={`cursor-pointer ${
                  activeSection === section.id
                    ? "text-custom-blue font-bold"
                    : ""
                }`}
                onClick={() => setActiveSection(section.id)}
              >
                {section.id}. {section.title}
              </li>
            ))}
          </ul>
        </div>

        <div className="md:w-3/4 bg-gray-100 p-6 rounded-lg">
          <p className="text-md text-custom-black font-bold mb-4">
            Last updated on: March 1, 2023
          </p>
          <p className="text-custom-black mb-4">
            {sections.find((section) => section.id === activeSection)?.content}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
