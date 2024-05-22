'use client';

import Image from 'next/image';
import { FaFacebook, FaTwitter, FaInstagram, FaEnvelope } from 'react-icons/fa';
import PropTypes from 'prop-types';

interface FooterProps {
  onBuyNowClick?: () => void;
}

const Footer: React.FC<FooterProps> = ({ onBuyNowClick }) => {
  const handleBuyNowClick = () => {
    if (onBuyNowClick) {
      onBuyNowClick();
    } else {
      window.location.href = 'https://www.pinterest.es/';
    }
  };

  return (
    <>
      <section
        id="contact-section"
        className="flex flex-col items-center justify-center min-h-[calc(100vh-96px)] px-6 lg:px-20 mt-0 pt-0"
      >
        <h1 className="text-2xl text-sale-price font-bold text-center leading-snug sm:text-4xl md:text-4xl lg:text-5xl lg:leading-normal xl:leading-looser mt-4 sm:mt-8">
          Don&apos;t wait any longer!
        </h1>
        <div className="flex justify-center w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl mt-4">
          <Image
            src="/images/ebook-version.svg"
            alt="ebook cover"
            width={900}
            height={524}
            style={{
              maxWidth: '100%',
              height: 'auto',
            }}
          />
        </div>
        <button
          onClick={handleBuyNowClick}
          className="bg-paragraph hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md inline-flex items-center justify-center mt-4 transition duration-300 ease-in-out text-sm sm:text-lg"
        >
          <span>Buy Now</span>
        </button>
      </section>
      <div className="bg-black text-white py-4">
        <div className="container mx-auto text-center">
          <div className="flex justify-center space-x-6 mb-4">
            <a
              href="https://facebook.com"
              className="hover:text-blue-500"
              aria-label="facebook"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="https://twitter.com"
              className="hover:text-blue-400"
              aria-label="twitter"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="https://instagram.com"
              className="hover:text-pink-500"
              aria-label="instagram"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="mailto:info@example.com"
              className="hover:text-red-500"
              aria-label="email"
            >
              <FaEnvelope size={24} />
            </a>
          </div>
          <p>&copy; 2024 MindBook. All rights reserved.</p>
        </div>
      </div>
    </>
  );
};

Footer.propTypes = {
  onBuyNowClick: PropTypes.func,
};

export default Footer;
