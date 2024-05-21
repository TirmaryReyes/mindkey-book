'use client';

import { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function NavBar() {
  const [navbar, setNavbar] = useState(false);
  const pathname = usePathname();
  const [activePath, setActivePath] = useState(pathname);

  const navItems = useMemo(
    () => [
      { path: '/', label: 'Home', ref: 'home-section' },
      { path: '/product', label: 'Product', ref: 'product-section' },
      { path: '/about', label: 'About', ref: 'about-section' },
      { path: '/testimony', label: 'Testimony', ref: 'testimony-section' },
      {
        path: '/contact',
        label: 'Contact',
        ref: 'contact-section',
        className: 'hidden lg:block',
      },
    ],
    [],
  );

  useEffect(() => {
    const handleScroll = () => {
      navItems.forEach((item) => {
        const section = document.getElementById(item.ref);
        if (section) {
          const { top, bottom } = section.getBoundingClientRect();
          if (top <= 0 && bottom >= 0) {
            setActivePath(item.path);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [navItems]);

  return (
    <div className="bg-main-bg-color">
      <nav className="w-full bg-main-bg-color fixed top-0 left-0 right-0 z-10">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <Link href="/" legacyBehavior>
                <h2 className="text-2xl text-paragraph font-bold">MINDBOOK</h2>
              </Link>
              <div className="md:hidden">
                <button
                  className="p-2 text-white rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  <span className="block w-8 h-8">{navbar ? '✖' : '☰'}</span>
                </button>
              </div>
            </div>
          </div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:flex md:justify-end md:pb-0 md:mt-0 ${
              navbar ? 'block' : 'hidden'
            } md:block`}
          >
            <ul className="items-center justify-center space-y-4 md:space-y-0 md:space-x-10 md:flex lg:space-x-14">
              {navItems.map((item) => (
                <li
                  key={item.path}
                  className={`text-xl text-paragraph py-2 px-6 text-center hover:bg-blue-700 md:hover:bg-transparent md:hover:text-blue-300 ${
                    item.className || ''
                  } ${activePath === item.path ? 'underline' : ''}`}
                >
                  <Link href={item.path}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
