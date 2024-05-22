'use client';

import Image from 'next/image';

const handleBuyNowClick = () => {
  window.location.href = 'https://www.pinterest.es/';
};

const About = () => {
  return (
    <section
      className="relative pt-24 pb-20 bg-cover bg-center text-center"
      id="about-section"
    >
      <div className="max-w-4xl mx-auto px-6 lg:px-20">
        <h2 className="text-2xl font-semibold text-paragraph mb-4 sm:text-3xl md:text-4xl">
          Get to Know the Author
        </h2>
        <div className="relative flex flex-col items-center justify-center">
          <div className="relative w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 mb-4 rounded-lg border-4 border-paragraph overflow-hidden mt-5">
            <Image
              src="/images/jb-photo.svg"
              alt="author photo"
              className="object-cover"
              layout="fill"
            />
          </div>
          <div className="bg-main-bg-color text-color p-5 shadow-lg rounded-lg mt-5 max-w-4xl mx-auto border-2 border-paragraph">
            <p className="text-white text-base leading-snug sm:text-lg md:text-xl lg:text-xl lg:leading-normal xl:leading-loose">
              My name is Jean-Baptiste, and I have created this Ebook to help
              people achieve their ideal weight any time of the year. You will
              find data, graphics, and tools to achieve this goal. I hope this
              resource proves to be very useful on your journey towards a better
              version of yourself!
            </p>
          </div>
          <div className="mt-6">
            <p className="text-white text-lg italic">
              {'Empower your journey with knowledge and passion.'}
            </p>
          </div>
          <button
            onClick={handleBuyNowClick}
            className="bg-paragraph hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md inline-flex items-center justify-center mt-4 transition duration-300 ease-in-out text-sm sm:text-lg"
          >
            <span>Download!</span>
          </button>
          <div className="mt-6 border-t-2 border-paragraph w-full max-w-3xl mx-auto"></div>
        </div>
      </div>
    </section>
  );
};

export default About;
