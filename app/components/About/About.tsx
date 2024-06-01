'use client';

import Image from 'next/image';

const About = () => {
  return (
    <section
      className="relative pt-6 pb-4 md:pb-10 bg-cover bg-center text-center md:pt-12"
      id="about-section"
    >
      <div className="max-w-4xl mx-auto px-6 lg:px-20">
        <h2 className="text-xl font-semibold text-paragraph mb-2 sm:text-2xl md:text-3xl md:mb-4">
          Meet the Author
        </h2>
        <div className="relative flex flex-col items-center justify-center">
          <div className="w-40 h-auto md:w-60 lg:w-72 mb-2 rounded-lg border-4 border-paragraph overflow-hidden">
            <Image
              src="/images/jb-photo.svg"
              alt="author photo"
              width={300}
              height={300}
              className="object-cover"
              style={{
                width: '100%',
                height: 'auto',
              }}
              priority
            />
          </div>
          <div className="bg-main-bg-color text-color p-3 shadow-lg rounded-lg mt-2 md:mt-3 max-w-4xl mx-auto border-2 border-paragraph md:p-5">
            <p className="text-white text-xs leading-snug sm:text-sm md:text-lg lg:text-md lg:leading-normal xl:leading-loose">
              Hello! My name is Jean-Baptiste, and I have created this Ebook to
              help you achieve your ideal weight year-round. Inside, you&apos;ll
              find valuable data, graphics, and tools to support you in reaching
              your goals. I hope this resource proves invaluable on your journey
              toward a better version of yourself!
            </p>
          </div>
          <div className="mt-2 mb-2 md:mt-6">
            <p className="text-white text-sm italic">
              {'Empower your journey with knowledge and passion.'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
