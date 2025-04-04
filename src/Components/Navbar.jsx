import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import logo from "../assets/logo.png";

function Navbar() {
  const logoRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
    console.log("Menu toggled", isMenuOpen);
  };

  useEffect(() => {
    // Click outside handler
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Existing logo animation code remains the same...

  return (
    <>
      <nav className="fixed w-full z-50 backdrop-blur-2xl">
        <div className="sm:container w-screen md:w-auto md:max-w-[100%] px-4">
          <div className="flex justify-between items-center h-16">
            {/* Hamburger Menu Button */}
            <button
              onClick={() => toggleMenu()}
              className="md:hidden text-gray-300 hover:text-white focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-6 md:w-full md:justify-end items-center">
              <a className="font-medium uppercase text-gray-300 hover:text-white" href="">Home</a>
              <a className="font-medium uppercase text-gray-300 hover:text-white" href="">About</a>
              <a className="font-medium uppercase text-gray-300 hover:text-white" href="">Services</a>
              <a className="font-medium uppercase text-gray-300 hover:text-white" href="">Portfolio</a>
              <a className="font-medium uppercase px-4 py-2 rounded-lg bg-yellow-300 text-black hover:bg-yellow-400" href="">
                Contact
              </a>
            </div>
          </div>

          {/* Mobile Menu */}
          <div
            ref={menuRef}
            className={`md:hidden fixed top-16 left-0 w-full h-screen bg-black/95 backdrop-blur-lg transform transition-transform duration-300 ease-in-out ${isMenuOpen ? "translate-x-0" : "-translate-x-full"
              }`}
          >
            <div className="flex flex-col items-center pt-8 space-y-8">
              <a className="text-2xl uppercase text-gray-300 hover:text-white" href="" onClick={() => setIsMenuOpen(false)}>
                Home
              </a>
              <a className="text-2xl uppercase text-gray-300 hover:text-white" href="" onClick={() => setIsMenuOpen(false)}>
                About
              </a>
              <a className="text-2xl uppercase text-gray-300 hover:text-white" href="" onClick={() => setIsMenuOpen(false)}>
                Services
              </a>
              <a className="text-2xl uppercase text-gray-300 hover:text-white" href="" onClick={() => setIsMenuOpen(false)}>
                Portfolio
              </a>
              <a className="text-2xl uppercase px-8 py-3 rounded-lg bg-yellow-300 text-black hover:bg-yellow-400" href="" onClick={() => setIsMenuOpen(false)}>
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      <img
        src={logo}
        alt="Logo"
        ref={logoRef}
        className="2xl:h-48 xl:h-36 z-50 h-0 absolute bottom-1/2 right-1/4"
      />
    </>
  );
}

export default Navbar;