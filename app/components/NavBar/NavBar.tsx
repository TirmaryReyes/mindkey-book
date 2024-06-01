'use client';

import { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';

function NavBar() {
  const [navbar, setNavbar] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    setMounted(true);
  }, []);

  const navItems = useMemo(
    () => [
      { path: '#home-section', label: 'Home' },
      { path: '#product-section', label: 'Product' },
      { path: '#about-section', label: 'About' },
      { path: '#testimony-section', label: 'Testimonials' },
      {
        path: '#contact-section',
        label: 'Contact',
        className: 'hidden lg:block',
      },
    ],
    []
  );

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) =>
        document.querySelector(item.path)
      );
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      const currentSection = sections.find((section) => {
        if (section && section instanceof HTMLElement) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.clientHeight;
          return (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
          );
        }
        return false;
      });

      if (currentSection && currentSection instanceof HTMLElement) {
        const currentSectionId = `#${currentSection.id}`;
        setActiveSection(currentSectionId);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [navItems]);

  const handleLinkClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    path: string
  ) => {
    event.preventDefault();
    const section = document.querySelector(path);
    if (section && section instanceof HTMLElement) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setNavbar(false);
  };

  return (
    <div className="bg-main-bg-color">
      <nav className="w-full bg-main-bg-color fixed top-0 left-0 right-0 z-10">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <Link href="/" legacyBehavior>
                <h2 className="text-xl text-paragraph font-bold normal-case">
                  <span className="capitalize">Mind</span>
                  <span className="normal-case">Key</span>
                  <span className="capitalize">Book</span>
                </h2>
              </Link>
              <div className="md:hidden">
                <button
                  className="p-2 text-paragraph rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  <span className="block w-8 h-8 text-2xl">
                    {navbar ? '✖' : '☰'}
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:flex md:justify-end md:pb-0 md:mt-0 ${
              navbar ? 'block' : 'hidden'
            } md:block`}
          >
            <ul className="items-center justify-center space-y-4 md:space-y-0 md:space-x-6 md:flex lg:space-x-8">
              {navItems.map((item) => (
                <li
                  key={item.path}
                  className={`text-lg text-paragraph py-2 px-6 text-center hover:bg-blue-700 md:hover:bg-transparent md:hover:text-blue-300 ${
                    item.className || ''
                  } ${mounted && activeSection === item.path ? 'underline' : ''}`}
                >
                  <a
                    href={item.path}
                    onClick={(event) => handleLinkClick(event, item.path)}
                  >
                    {item.label}
                  </a>
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
