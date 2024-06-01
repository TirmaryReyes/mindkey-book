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
      window.open('https://whop.com/mindkeybook/', '_blank');
    }
  };

  return (
    <>
      <section
        id="contact-section"
        className="flex flex-col items-center justify-center min-h-[50vh] px-6 lg:px-20"
      >
        <div className="flex justify-center w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl mt-4">
          <Image
            src="/images/ebook-version.png"
            alt="ebook cover"
            width={800}
            height={424}
            style={{
              maxWidth: '100%',
              height: 'auto',
            }}
          />
        </div>
        <h1 className="text-2xl text-offer font-bold text-center leading-snug sm:text-4xl md:text-4xl lg:text-3xl lg:leading-normal xl:leading-looser mt-4 sm:mt-8">
          Don&apos;t wait any longer!
        </h1>
        <button
          onClick={handleBuyNowClick}
          className="bg-paragraph hover:bg-blue-400 text-white font-semibold py-2 px-4 rounded-md inline-flex items-center justify-center mt-2 mb-4 transition duration-300 ease-in-out text-xs sm:text-sm"
        >
          <ShoppingIcon className="hidden sm:inline mr-4 text-white h-8 w-8 sm:h-6 sm:w-6" />
          <span>Buy Now</span>
        </button>
      </section>
      <div className="bg-black text-white py-4">
        <div className="container mx-auto text-center">
          <div className="flex justify-center space-x-6 mb-4">
            <a
              href="https://x.com/MindKeyBook"
              className="hover:text-blue-400"
              aria-label="x"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaXTwitter size={24} />
            </a>
            <a
              href="mailto:mindkeybook@gmail.com"
              className="hover:text-red-500"
              aria-label="email"
            >
              <FaEnvelope size={24} />
            </a>
          </div>
          <p className="text-xxs">&copy; 2024 MindBook. All rights reserved.</p>
        </div>
      </div>
    </>
  );
};

export default Footer;

Footer.propTypes = {
  onBuyNowClick: PropTypes.func,
};
