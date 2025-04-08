"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import Head from "next/head";

export const metadata = {
  title: "Car Rental Terms & Conditions | Goa Self-Drive & Chauffeur Car Hire",
  description:
    "Understand the terms, conditions, and FAQs before renting a car in Goa. Learn about payment policies, driver requirements, usage restrictions, and more.",
  keywords:
    "Goa car rental, car hire Goa, self drive cars, chauffeur rental, Goa driving rules, rental terms",
};

const faqData = [
  {
    question: "Can I rent a car with a driver?",
    answer:
      "Yes, we offer the option to rent a car with a professional driver. This is a great choice if you prefer to sit back and enjoy the journey without the hassle of driving in unfamiliar areas.",
  },
  {
    question:
      "What should I do if the rental car experiences mechanical issues during my trip?",
    answer:
      "In case of any mechanical issues, please contact our customer support team immediately. We will provide guidance on the next steps and, if necessary, arrange a replacement vehicle.",
  },
  {
    question: "Where can I pick up and return the rental car?",
    answer:
      "We offer convenient pick-up and drop-off locations, including the airport, our office, and other popular areas in Goa. You can select your preferred location during the booking process.",
  },
];

const termsData = [
  {
    title: "Payment Terms",
    items: [
      "All rental charges, including pick-up and delivery fees, must be paid in full on the first day of rental.",
      "A refundable security deposit of minimum Rs. 3000/- is required. The deposit amount may vary depending on the car model.",
    ],
  },
  {
    title: "Driving Requirements",
    items: [
      "A valid driving license must be presented at the time of rental.",
      "A photocopy of the driving license is required.",
      "The driving license must be at least one year old.",
    ],
  },
  {
    title: "Usage Restrictions",
    items: [
      "The vehicle must not be taken outside Goa.",
      "Driving on Goa's beaches is strictly prohibited.",
      "Renters must comply with all local speed limits and traffic laws.",
      "Driving under the influence of alcohol is strictly prohibited and will result in fines and additional charges.",
    ],
  },
  {
    title: "Fuel Policy",
    items: [
      "Renters are responsible for fuel expenses.",
      "The fuel tank must be refilled to the original level before returning the vehicle (gauge-to-gauge policy).",
    ],
  },
  {
    title: "Damage & Cleaning",
    items: [
      "Renters are liable for any damages incurred during the rental period.",
      "Climbing on the car's roof or bonnet for photography is strictly prohibited.",
      "The vehicle must be returned in a clean condition. A cleaning fee of Rs. 200/- will be charged if the car is returned unclean.",
    ],
  },
];

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-200 p-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full text-left"
      >
        <h3 className="text-lg sm:text-xl font-semibold text-blue-950">
          {question}
        </h3>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-orange-500" />
        ) : (
          <ChevronDown className="w-5 h-5 text-orange-500" />
        )}
      </button>
      {isOpen && (
        <p className="text-base text-gray-700 mt-2 transition-all duration-300 ease-in-out">
          {answer}
        </p>
      )}
    </div>
  );
};

const CarRentalTerms = () => {
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <div className="w-full p-4 mx-auto bg-white text-gray-900 shadow-xl rounded-lg sm:p-8">
      <Head>
        <meta
          name="description"
          content="Understand the terms, conditions, and FAQs before renting a car in Goa. Learn about payment policies, driver requirements, usage restrictions, and more."
        />
        <meta
          name="keywords"
          content="Goa car rental, car hire Goa, self drive cars, chauffeur rental, Goa driving rules, rental terms"
        />
        <meta property="og:title" content="Car Rental Terms & Conditions | Goa Car Hire" />
        <meta
          property="og:description"
          content="Check FAQs, rental policies, and terms before renting a car in Goa with or without a driver."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourdomain.com/terms" />
        <meta property="og:image" content="https://yourdomain.com/images/car-rental.jpg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqStructuredData),
          }}
        />
      </Head>

      {/* FAQ Section */}
      <h1 className="text-3xl sm:text-4xl font-bold text-center text-orange-500 mb-6">
        Frequently Asked Questions (FAQ)
      </h1>

      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>

      {/* Terms & Conditions Section */}
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-orange-500 mt-10 mb-6">
        Terms & Conditions
      </h2>

      {termsData.map((section, sectionIndex) => (
        <div key={sectionIndex} className="mb-6">
          <h3 className="text-2xl font-semibold text-blue-950 mb-4">
            {section.title}
          </h3>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            {section.items.map((item, itemIndex) => (
              <li key={itemIndex} className="text-base">
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default CarRentalTerms;
