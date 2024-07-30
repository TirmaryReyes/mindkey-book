'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ShoppingIcon } from '../../../public/icons/Shopping-cart';

const FAQSection: React.FC = () => {
  const [visibleIndexes, setVisibleIndexes] = useState<number[]>([]);
  const faqs = [
    {
      question: 'What topics does the nutrition ebook cover?',
      answer:
        'Balanced diets, essential nutrients, meal prep tips, healthy recipes, and weight management.',
    },
    {
      question: 'Is the ebook suitable for beginners?',
      answer:
        "Yes, it's designed for all levels with easy-to-understand tips and explanations.",
    },
    {
      question: 'Can I access the ebook on multiple devices?',
      answer: "It's compatible with smartphones, tablets, and computers.",
    },
    {
      question: 'What if I have questions or need support after purchasing?',
      answer: 'Contact our support via email for any assistance or questions.',
    },
    {
      question: 'Is there a money-back guarantee?',
      answer:
        'Yes, we offer a 30-day money-back guarantee for your satisfaction.',
    },
  ];

  const toggleVisibility = (index: number) => {
    if (visibleIndexes.includes(index)) {
      setVisibleIndexes(visibleIndexes.filter((i) => i !== index));
    } else {
      setVisibleIndexes([...visibleIndexes, index]);
    }
  };

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLDivElement>,
    index: number
  ) => {
    if (event.key === 'Enter' || event.key === ' ') {
      toggleVisibility(index);
    }
  };

  const handleBuyNowClick = () => {
    window.open(
      'https://whop.com/checkout/4JuynWz2Y1T772UQed-SG79-35MO-O9wh-1m6cD0wispgn/',
      '_blank'
    );
  };

  return (
    <section id="faq-section" className="py-12 px-6 lg:px-20">
      <div
        id="ebook-section"
        className="flex flex-col items-center justify-center min-h-[50vh] px-6 lg:px-20"
      >
        <div className="flex justify-center w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl mt-4">
          <Image
            src="/images/ebook-version.webp"
            alt="ebook cover"
            width={800}
            height={424}
            style={{
              maxWidth: '100%',
              height: 'auto',
            }}
          />
        </div>
        <h1 className="text-2xl text-offer font-bold text-center leading-snug sm:text-4xl md:text-4xl lg:text-3xl lg:leading-normal xl:leading-looser mt-4 sm:mt-8">
          Don&apos;t wait any longer!
        </h1>
        <button
          onClick={handleBuyNowClick}
          className="bg-paragraph hover:bg-blue-400 text-white font-semibold py-3 px-8 rounded-md inline-flex items-center justify-center mt-2 transition duration-300 ease-in-out text-sm sm:text-base md:text-lg"
        >
          <ShoppingIcon className="hidden sm:inline mr-2 text-white h-5 w-5 sm:h-6 sm:w-6" />
          <span>Buy Now</span>
        </button>
      </div>

      <h2 className="text-3xl text-paragraph font-bold text-center mb-8 mt-20 lg:hidden">
        FAQ
      </h2>
      <h2 className="text-3xl text-paragraph font-bold text-center mb-8 mt-20 hidden lg:block">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4 max-w-4xl mx-auto">
        {faqs.map((faq, index) => (
          <div key={index} className="border border-paragraph rounded-lg">
            <div
              className="flex justify-between items-center cursor-pointer p-4"
              onClick={() => toggleVisibility(index)}
              onKeyDown={(event) => handleKeyDown(event, index)}
              role="button"
              tabIndex={0}
              aria-expanded={visibleIndexes.includes(index)}
            >
              <h3 className="text-lg font-semibold text-paragraph">
                {faq.question}
              </h3>
              <span className="text-lg text-paragraph">
                {visibleIndexes.includes(index) ? '−' : '+'}
              </span>
            </div>
            {visibleIndexes.includes(index) && (
              <div className="px-4 pb-4 text-white">
                <p className="mt-2 text-base text-justify text-white">
                  {faq.answer}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
