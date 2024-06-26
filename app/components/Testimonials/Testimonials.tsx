'use client';

import Slider from 'react-slick';
import { FaStar } from 'react-icons/fa';
import Image from 'next/image';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const testimonials = [
  {
    name: 'Vanessa',
    text: 'I shared this eBook with my mom, and after reviewing it together, we have so much fun at our Zumba sessions.',
    image: '/images/testimony-vanessa.webp',
  },
  {
    name: 'Emily',
    text: 'My husband and I are committed to never repeating the same mistakes again. We have crafted our diet plan using the book and continuously refer back to it for guidance.',
    image: '/images/testimony-emily.webp',
  },
  {
    name: 'Rachel',
    text: "I was lost and didn't know what to do, but Jean-Baptiste and his book opened my eyes. I finally figured out how to lose weight for good.",
    image: '/images/testimony-rachel.webp',
  },
];

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <div className="bg-black text-white py-4 px-4 md:py-8">
      <h2 className="text-center text-paragraph text-lg font-bold mb-2">
        Join my community of readers
      </h2>
      <h3 className="text-center text-lg font-bold text-main-title mb-4 md:text-xl md:mb-8">
        Transformative Testimonials
      </h3>
      <div className="hidden md:grid md:grid-cols-3 gap-4 mx-auto max-w-6xl px-4">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            data-testid="testimonial"
            className="p-4 rounded-lg bg-gray-800 border border-gray-700 flex flex-col justify-between"
          >
            <p className="text-sm text-center md:text-base">
              {testimonial.text}
            </p>
            <div className="flex justify-center mt-4">
              {[1, 2, 3, 4, 5].map((value) => (
                <FaStar
                  key={value}
                  className="text-yellow-400"
                  data-testid="star"
                />
              ))}
            </div>
            <div className="flex items-center justify-end mt-4">
              <span className="text-white font-bold mr-4 text-sm md:text-base">
                {testimonial.name}
              </span>
              <Image
                className="w-12 h-12 rounded-full"
                width={50}
                height={50}
                src={testimonial.image}
                alt={testimonial.name}
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                }}
                quality={100}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="md:hidden px-4 py-2">
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              data-testid="testimonial"
              className="p-4 rounded-lg bg-gray-800 border border-gray-700 flex flex-col justify-between"
            >
              <p className="text-sm text-center md:text-base">
                {testimonial.text}
              </p>
              <div className="flex justify-center mt-4">
                {[1, 2, 3, 4, 5].map((value) => (
                  <FaStar
                    key={value}
                    className="text-yellow-400"
                    data-testid="star"
                  />
                ))}
              </div>
              <div className="flex items-center justify-end mt-4">
                <span className="text-white font-bold mr-4 text-sm md:text-base">
                  {testimonial.name}
                </span>
                <Image
                  className="w-12 h-12 rounded-full"
                  width={48}
                  height={48}
                  src={testimonial.image}
                  alt={testimonial.name}
                  style={{
                    maxWidth: '100%',
                    height: 'auto',
                  }}
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
