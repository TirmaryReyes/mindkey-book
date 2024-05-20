"use client";

import React from "react";
import Image from "next/image";
import CountdownTimer from "./CountdownTimer";
import { BadgeIcon } from "../../../public/icons/Badge";
import { CheckIcon } from "../../../public/icons/Check";
import { ShoppingIcon } from "../../../public/icons/Shopping-cart";


interface Product {
  title: string;
  imageUrl: string;
  description: string;
}

const productDescription: Product = {
  title: "Product Title",
  imageUrl: "path/to/image.jpg",
  description: "Product Description",
};

interface ProductShowcaseProps {
  product: Product;
}

const ProductShowcase: React.FC<ProductShowcaseProps> = ({ product }) => {
  const targetDate = new Date();
  targetDate.setHours(targetDate.getHours() + 4);

  return (
    <section
      id="product-section"
      className="bg-main-bg-color p-5 shadow-md rounded-lg text-center mt-5 text-white"
    >
      <h1 className="text-main-title text-2xl font-bold mt-0 md:text-4xl sm:text-3xl">
        Summer Weight Loss
      </h1>
      <h2 className="text-xl font-semibold text-main-title mt-0 mb-5 md:text-2xl sm:text-lg">
        A Guide for Women for Effective Weight Loss
      </h2>
      <div className="flex justify-center">
        <Image
          src="/images/ebook.svg"
          alt="ebook cover"
          width={300}
          height={100}
        />
        <div className="absolute top-0 right-0 m-2"></div>
      </div>
      <p className="text-paragraph text-lg font-semibold mt-5">{`What's inside?`}</p>
      <span className="flex flex-col items-center justify-center mt-4">
        <BadgeIcon className="w-10 h-10 text-paragraph" />
        <span className="text-main-title font-semibold text-xl mt-2">
          Unlock Your Potential: Empower Your Mind with Knowledge!
        </span>
      </span>
      <div className="bg-main-bg-color text-color p-5 shadow-md rounded-lg mt-5 max-w-4xl mx-auto lg:flex lg:justify-center lg:items-center">
        <ul className="list-none p-0 m-0 space-y-4 flex flex-col items-start justify-center w-full lg:w-3/4">
          {[
            "Unlock the Benefits of Tailored Guidance for Women on Your Wellness Journey!",
            "Discover Dietary Strategies, Effective Exercises, and the Secrets of the Mediterranean Diet.",
            "Gain Tools to Stay Motivated and Overcome Obstacles for a Healthier, Balanced Lifestyle.",
            "Experience the transformative potential of this book and become the best version of yourself!",
            "Empower yourself this summer with our weight loss plan designed for women, achieve your goals in a sustainable and healthy way!",
            "Immerse yourself in the pages of this book and awaken your hidden potential.",
          ].map((text, index) => (
            <li key={index} className="flex items-center justify-start w-full">
              <CheckIcon className="w-5 h-5 mr-2 text-green-500 flex-shrink-0" />
              <span className="text-left">{text}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-5 text-center">
        <span className="text-offer text-3xl font-bold md:text-2xl sm:text-xl">
          Special Price!
        </span>
        <div className="mt-2">
          <span className="block text-offer text-2xl leading-relaxed md:text-xl sm:text-base">
            Summer Sale
          </span>
          <div className="text-main-title text-3xl font-bold md:text-2xl sm:text-xl mt-2">
            <CountdownTimer targetDate={targetDate} />
          </div>
        </div>
        <div className="mt-4 flex items-baseline items-center justify-center">
          <span className="text-offer-color text-sm font-bold">Before</span>
          <span className="text-gray text-2xl font-bold line-through ml-2">
            $20.99
          </span>
        </div>
        <div className="flex items-center justify-center">
          <span className="text-white text-1xl font-bold mt-2 mr-2">
            Only Now!
          </span>
          <span className="salePrice text-3xl font-bold mt-2">
            $14.99
          </span>
        </div>
      </div>
      <button className="bg-paragraph hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md inline-flex items-center justify-center mt-4 transition duration-300 ease-in-out text-base md:text-sm">
        <ShoppingIcon className="hidden md:inline mr-2 text-white h-6 w-6 md:h-4 md:w-4" />
        <span>Buy Now</span>
      </button>
    </section>
  );
};

export default ProductShowcase;
