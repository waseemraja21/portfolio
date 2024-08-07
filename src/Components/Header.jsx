import React, { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white text-black p-2">
      <nav className="flex justify-between px-3 items-center">
        <h1 className="font-freehand text-4xl">Waseem Raja</h1>
        <div className="hidden md:flex text-gray-500 font-thin text-xl">
          <a href="#home" className="mr-4 hover:underline">
            Waseem
          </a>
          <a href="#about" className="mr-4 hover:underline">
            About
          </a>
          <a href="#skills" className="mr-4 hover:underline">
            Skills
          </a>
          <a href="#contact" className="hover:underline">
            Contact
          </a>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
              />
            </svg>
          </button>
        </div>
      </nav>
      {isOpen && (
        <div className="md:hidden text-gray-500 font-thin text-xl">
          <a href="#home" className="block px-4 py-2 hover:underline">
            Waseem
          </a>
          <a href="#about" className="block px-4 py-2 hover:underline">
            About
          </a>
          <a href="#skills" className="block px-4 py-2 hover:underline">
            Skills
          </a>
          <a href="#contact" className="block px-4 py-2 hover:underline">
            Contact
          </a>
        </div>
      )}
    </header>
  );
}

export default Header;
