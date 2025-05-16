import React, { useState, useEffect, useRef } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinksRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
    navLinksRef.current?.classList.toggle("hidden");
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
    if (navLinksRef.current && !navLinksRef.current.classList.contains("hidden")) {
      navLinksRef.current.classList.add("hidden");
    }
  };

  return (
    <div
      className={`z-20 fixed top-0 left-0 right-0 text-white font-serif p-2 shadow-md transition-colors duration-300 ${
        scrolled ? "bg-black bg-opacity-90 shadow-blue-100" : "bg-transparent"
      }`}
    >
      <nav className="flex items-center justify-between max-w-screen-xl mx-auto px-4">
        <div className="flex items-center gap-2">
          <img
            className="w-16 rounded-full"
            src="https://res.cloudinary.com/dtt19zar3/image/upload/v1736147677/Doods_Technolo_1_v1qa0l.png"
            alt="..."
          />
          <span>Doods Technologies</span>
        </div>
        <div
          ref={navLinksRef}
          className="nav-Links md:flex hidden md:static absolute z-50 bg-white backdrop-blur-lg md:backdrop-blur-none bg-opacity-10 md:bg-transparent md:min-h-fit min-h-[40vh] justify-center left-0 top-[100%] w-full md:w-auto flex items-center text-white"
        >
          <ul className="flex flex-col md:flex-row md:items-center md:gap-4 gap-8 md:p-0 p-4">
            {["home", "service", "about", "contact"].map((section) => (
              <li key={section}>
                <a
                  href={`#${section}`}
                  className="hover:text-yellow-300"
                  onClick={handleLinkClick}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:hidden pr-3">
          <ion-icon
            name={menuOpen ? "close" : "menu"}
            className="text-3xl"
            onClick={toggleMenu}
          ></ion-icon>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
