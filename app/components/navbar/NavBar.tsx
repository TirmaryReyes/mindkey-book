"use client"

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

function NavBar() {
  const [navbar, setNavbar] = useState(false);

  return (
    <div>
      <nav className="w-full bg-gray-800 fixed top-0 left-0 right-0 z-10">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <Link href="/" legacyBehavior>
                <h2 className="text-2xl text-customBlue font-bold">MINDBOOK</h2>
              </Link>
              <div className="md:hidden">
                <button
                  className="p-2 text-white rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <Image src="/menu-burger-closed.svg" width={30} height={30} alt="close menu" />
                  ) : (
                    <Image
                      src="/menu-burger.svg"
                      width={30} height={30}
                      alt="open menu"
                      className="focus:border-none active:border-none"
                    />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div className={`flex-1 justify-self-center pb-3 mt-8 md:flex md:justify-end md:pb-0 md:mt-0 md:mr-20 ${navbar ? 'block' : 'hidden'} md:block`}>
            <ul className="items-center justify-center space-x-0 md:space-x-10 md:flex">
              {['/home', '/product', '/about', '/price','/testimony', '/contact' ].map((path) => (
                <li key={path} className="text-xl text-customBlue py-2 px-6 text-center hover:bg-blue-700 md:hover:bg-transparent md:hover:text-blue-300">
                  <Link href={path} onClick={() => setNavbar(false)}>
                    {path.substring(1).charAt(0).toUpperCase() + path.slice(2)}
                  </Link>
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
