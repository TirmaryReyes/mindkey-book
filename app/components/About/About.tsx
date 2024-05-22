import Image from 'next/image';

const About = () => {
  return (
    <section
      className="relative pt-24 pb-24 bg-cover bg-center text-center"
      id="about-section"
    >
      <div className="max-w-4xl mx-auto px-6 lg:px-20">
        <h2 className="text-4xl font-bold text-teal-300 mb-4">
          About the Author
        </h2>
        <div className="relative flex flex-col items-center justify-center">
          <div className="w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 mb-4 relative">
            <Image
              src="/images/jb-photo.svg"
              alt="author photo"
              layout="fill"
              objectFit="cover"
              className="rounded-full border-4 border-teal-300 shadow-lg"
            />
          </div>
          <div className="bg-main-bg-color text-color p-5 shadow-lg rounded-lg mt-5 max-w-4xl mx-auto border-2 border-teal-300">
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
          <div className="mt-6 border-t-2 border-teal-300 w-full max-w-3xl mx-auto"></div>
        </div>
      </div>
    </section>
  );
};

export default About;
