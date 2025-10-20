'use client';
import { useState, useEffect } from 'react';

const navlinks = ["Home", "Services", "Work", "About", "Contact"];

const Navbar = () => {
  const [active, setActive] = useState("Home");

  // track section in view
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 120;
      navlinks.forEach((link) => {
        const id = link.toLowerCase();
        const section = document.getElementById(id);
        if (section && scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
          setActive(link);
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full shadow-2xl bg-neutral-800 shadow-neutral-400 z-50">
      <div className="container flex items-center justify-between mx-auto max-w-6xl p-4">
        <div className="font-semibold text-lg tracking-wide text-gray-300">Cleaning-Company</div>
        <div className="flex gap-6 text-sm font-medium">
          {navlinks.map((link) => {
            const id = link.toLowerCase();
            const isActive = active === link;
            return (
              <a
                key={link}
                href={`#${id}`}
                onClick={() => setActive(link)}
                className={`transition-colors duration-200 ${
                  isActive ? 'text-amber-300' : 'text-gray-300 hover:text-amber-300'
                }`}
              >
                {link}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
