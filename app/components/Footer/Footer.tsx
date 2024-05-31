'use client';

import Image from 'next/image';
import { FaEnvelope } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { ShoppingIcon } from '../../../public/icons/Shopping-cart';
import { FaXTwitter } from 'react-icons/fa6';

interface FooterProps {
  onBuyNowClick?: () => void;
}

const Footer: React.FC<FooterProps> = ({ onBuyNowClick }) => {
  const handleBuyNowClick = () => {
    if (onBuyNowClick) {
      onBuyNowClick();
    } else {
      window.open('https://www.pinterest.com/mindkeybook/', '_blank');
    }
  };

  return (
    <>
      <section
        id="contact-section"
        className="flex flex-col items-center justify-center min-h-[calc(100vh-96px)] px-6 lg:px-20 mt-0 pt-0"
      >
        <h1 className="text-2xl text-offer font-bold text-center leading-snug sm:text-4xl md:text-4xl lg:text-3xl lg:leading-normal xl:leading-looser mt-4 sm:mt-8">
          Don&apos;t wait any longer!
        </h1>
        <div className="flex justify-center w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl mt-4">
          <Image
            src="/images/version.svg"
            alt="ebook cover"
            width={800}
            height={424}
            style={{
              maxWidth: '100%',
              height: 'auto',
            }}
          />
        </div>
        <button
          onClick={handleBuyNowClick}
          className="bg-paragraph hover:bg-blue-400 mb-10 text-white font-semibold py-2 px-4 rounded-md inline-flex items-center justify-center mt-10 transition duration-300 ease-in-out text-sm sm:text-lg"
        >
          <ShoppingIcon className="hidden sm:inline mr-2 text-white h-6 w-6 sm:h-4 sm:w-4" />
          <span>Buy Now</span>
        </button>
      </section>
      <div className="bg-black text-white py-4">
        <div className="container mx-auto text-center">
          <div className="flex justify-center space-x-6 mb-4">
            {/*<a
              href="https://facebook.com"
              className="hover:text-blue-500"
              aria-label="facebook"
            >
              <FaFacebook size={24} />
            </a>*/}
            <a
              href="https://x.com/MindKeyBook"
              className="hover:text-blue-400"
              aria-label="x"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaXTwitter size={24} />
            </a>
            {/*<a
              href="https://instagram.com"
              className="hover:text-pink-500"
              aria-label="instagram"
            >
              <FaInstagram size={24} />
            </a>*/}
            <a
              href="mindkeybook@gmail.com"
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
