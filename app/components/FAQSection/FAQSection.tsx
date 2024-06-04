'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ShoppingIcon } from '../../../public/icons/Shopping-cart';

const FAQSection: React.FC = () => {
  const [visibleIndexes, setVisibleIndexes] = useState<number[]>([]);
  const faqs = [
    {
      question: 'Why buy this eBook?',
      answer:
        "Achieving and maintaining a healthy weight is key to overall well-being. This book addresses the importance of a healthy approach to weight loss and setting realistic goals. It's not just about numbers on the scale but about sustainable lifestyle changes that promote physical and mental health.",
    },
    {
      question: "What do I do if I don't like the book?",
      answer:
        'We are committed to your satisfaction. If for any reason you are not satisfied with your purchase, we offer a money-back guarantee. Simply contact us within 30 days from the purchase date and we will refund the full amount of your purchase, no questions asked. We want you to feel confident when purchasing our product, and we are here to ensure you have a positive experience with us.',
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
    window.open('https://whop.com/mindkeybook/', '_blank');
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
          className="bg-paragraph hover:bg-blue-400 text-white font-semibold py-3 px-6 rounded-md inline-flex items-center justify-center mt-8 mb-4 transition duration-300 ease-in-out text-sm sm:text-base md:text-lg"
        >
          <ShoppingIcon className="hidden sm:inline mr-2 text-white h-5 w-5 sm:h-6 sm:w-6" />
          <span>Buy Now</span>
        </button>
      </div>

      <h2 className="text-3xl text-paragraph font-bold text-center mb-8 mt-20">
        Frequently Asked Questions
      </h2>
      <div className="space-y-6 bg-main-bg-color text-color p-5 shadow-md rounded-lg mt-5 max-w-4xl mx-auto">
        {faqs.map((faq, index) => (
          <div key={index} className="p-4 border-b border-gray-300 text-left">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleVisibility(index)}
              onKeyDown={(event) => handleKeyDown(event, index)}
              role="button"
              tabIndex={0}
              aria-expanded={visibleIndexes.includes(index)}
            >
              <h3 className="text-xl font-semibold text-paragraph ">
                {faq.question}
              </h3>
              <span className="text-white text-xl">
                {visibleIndexes.includes(index) ? '−' : '+'}
              </span>
            </div>
            {visibleIndexes.includes(index) && (
              <p className="mt-2 text-lg text-white text-justify">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
