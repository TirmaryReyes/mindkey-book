'use client';

import Image from 'next/image';

const About = () => {
  return (
    <section
      className="relative pt-12 pb-20 bg-cover bg-center text-center"
      id="about-section"
    >
      <div className="max-w-4xl mx-auto px-6 lg:px-20">
        <h2 className="text-xl font-semibold text-paragraph mb-4 sm:text-2xl md:text-3xl">
          Meet the Author
        </h2>
        <div className="relative flex flex-col items-center justify-center">
          <div className="relative w-48 h-48 md:w-60 md:h-60 lg:w-72 lg:h-72 mb-4 rounded-lg border-4 border-paragraph overflow-hidden">
            <div className="absolute inset-0">
              <Image
                src="/images/jb-photo.svg"
                alt="author photo"
                className="object-cover"
                sizes="100vw"
                layout="fill"
                style={{
                  objectFit: 'cover',
                }}
              />
            </div>
          </div>
          <div className="bg-main-bg-color text-color p-5 shadow-lg rounded-lg mt-3 max-w-4xl mx-auto border-2 border-paragraph">
            <p className="text-white text-sm leading-snug sm:text-base md:text-lg lg:text-md lg:leading-normal xl:leading-loose">
              Hello! My name is Jean-Baptiste, and I have created this Ebook to
              help you achieve your ideal weight year-round. Inside, you&apos;ll
              find valuable data, graphics, and tools to support you in reaching
              your goals. I hope this resource proves invaluable on your journey
              toward a better version of yourself!
            </p>
          </div>
          <div className="mt-4">
            <p className="text-white text-base italic">
              {'Empower your journey with knowledge and passion.'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
