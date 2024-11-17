import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const FAQAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: 'Do I have to enter my credit card details to sign up?',
      answer: 'No. We only need your email address and the name of your organization, and then you will be able to start creating campaigns.',
    },
    {
      question: 'Do I need any prior knowledge or skills?',
      answer: "Not at all! Brevo is designed with simplicity in mind. Even if you're a complete beginner, you'll have all the tools you need to build stunning emails, create contact lists and set advanced preferences. If you ever need guidance, you can take a look at our many tutorials and resources, or contact our support team.",
    },
    {
      question: 'Are there any contracts?',
      answer: 'There are no contracts or hidden fees with Brevo. You may change plans or cancel at any time. Sign up for a plan or purchase credits as you need them, there are no additional charges.',
    },
    {
      question: 'Do you offer pay-as-you-go plans?',
      answer: "Yes. A pay-as-you-go plan is ideal for businesses and organizations that don't send emails often, or that don’t have a large contact list. PAYG credits do not expire, so you can use them at your own pace. One email sent equals one credit deducted. You still get all of our great features and services, however they do not include phone support. It is still possible to easily buy more credits or shift to a monthly plan at anytime though.",
    },
    {
      question: 'Can I use my monthly plan for transactional email only?',
      answer: 'Yes. We have a dedicated plan for transactional only users, but you can still use your Marketing Platform credits to send transactional emails.',
    },
    {
      question: 'Can I try Brevo before purchasing a plan?',
      answer: 'Absolutely! When you create an account, you will automatically have a Free plan to upload unlimited contacts. Once we approve your account for sending, you can start sending up to 300 emails per day.',
    },
    {
      question: 'What if I change my mind?',
      answer: 'If you change your mind, you can cancel your plan at any time directly from your account. Your data will be stored if you wish to use our services again, or we can delete all of your records upon your request.',
    },
    {
      question: 'How can I pay?',
      answer: 'All payments are made by credit card, through our secure payment processor, Adyen, or by Paypal. If you subscribe to a monthly plan, the subscription period is 30 days and charges are processed at the beginning of each period.',
    },
  ];

  return (
    <section className="container mx-auto px-4 sm:px-8 py-8">
      <div className="text-center mb-8">
        <h4 className="text-lg sm:text-2xl font-semibold text-gray-800">Frequently asked questions</h4>
      </div>
      <div className="max-w-4xl mx-auto">
        <ul className="space-y-4">
          {faqData.map((item, index) => (
            <li
              key={index}
              className={`border rounded-lg overflow-hidden shadow-sm transition-all duration-300 ${
                activeIndex === index ? 'border-green-500' : 'border-gray-200'
              }`}
            >
              <button
                className="w-full flex justify-between items-center p-4 bg-white hover:bg-gray-50 transition-all duration-300"
                onClick={() => toggleAccordion(index)}
              >
                <span className="text-sm sm:text-base font-medium text-gray-700 break-words">
                  {item.question}
                </span>
                <span className="text-green-500">
                  {activeIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                </span>
              </button>
              {activeIndex === index && (
                <div
                  className="p-4 bg-gray-50 text-sm sm:text-base text-gray-600 break-words transition-all duration-300"
                >
                  {item.answer}
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FAQAccordion;
