const Hero = () => {
  return (
    <section className="hero-background hero-background--overlay">
      <div className="flex flex-col items-center justify-center min-h-screen px-6 lg:px-20">
        <h1 className="text-white text-center font-bold hero-title">
          Imagine enjoying this paradise without
          <span className="block hero-title">
            worrying about those extra pounds?
          </span>
        </h1>
        <p className="text-description text-gray-700 text-center text-white leading-relaxed font-semibold italic mx-auto">
          {`My eBook can help you achieve just that effortlessly`}
        </p>
      </div>
    </section>
  );
};

export default Hero;
