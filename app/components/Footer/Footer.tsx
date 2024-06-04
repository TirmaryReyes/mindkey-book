'use client';

import { FaEnvelope } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-4">
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
    </footer>
  );
};

export default Footer;
