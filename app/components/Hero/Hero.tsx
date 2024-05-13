import Image from "next/legacy/image";

const Hero = () => {
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row relative">
      <div className="absolute top-55 left-0 w-full h-full md:top-0 md:left-1/2 md:-translate-x-1/2">
        <Image
          src="/model.svg"
          layout="responsive"
          objectFit="cover"
          width={100}
          height={60}
          alt="background model"
          className="w-full h-full object-cover md:w-full md:h-full"
        />
      </div>
      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        <h1 className="text-4xl md:text-5xl lg:text-6xl text-white text-center font-bold leading-tight md:leading-loose mt-12">
          Imagine enjoying this paradise without
          <span className="md:mt-4 block">
            worrying about those extra pounds?
          </span>
        </h1>
        <p className="text-base md:text-lg mt-12 text-gray-700 text-center text-white xl:max-w-[520px] leading-relaxed md:mx-auto font-semibold italic">
  {"My eBook can help you achieve just that effortlessly."}
</p>

      </div>
    </section>
  );
};

export default Hero;
