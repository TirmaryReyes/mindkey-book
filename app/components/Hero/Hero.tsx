const Hero = () => {
  return (
    <section
      className="relative pt-24 bg-cover bg-center bg-[url('/images/model.svg')]"
      id="home-section"
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative flex flex-col items-center justify-center min-h-[calc(100vh-96px)] px-6 lg:px-20">
        <h1 className="text-3xl text-main-title font-bold text-center leading-snug sm:text-5xl md:text-5xl lg:text-5xl lg:leading-normal xl:leading-looser">
          Imagine enjoying this paradise without
          <span className="block text-main-title text-3xl font-bold leading-snug sm:text-5xl md:text-5xl lg:text-5xl lg:leading-normal xl:leading-looser">
            worrying about those extra pounds?
          </span>
        </h1>
        <p className="mt-10 text-base font-semibold italic text-center text-white mx-auto leading-loose sm:mt-16 sm:text-lg md:mt-20 md:text-xl lg:mt-24 lg:text-2xl lg:leading-loose xl:leading-looser">
          My eBook can help you achieve just that effortlessly
        </p>
      </div>
    </section>
  );
};

export default Hero;
