import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

function Navbar({ darkMode, setDarkMode }) {
  const [nav, setNav] = useState(false);

  const links = [
    { id: 1, link: "home" },
    { id: 2, link: "about" },
    { id: 3, link: "portfolio" },
    { id: 4, link: "skills" },
    { id: 5, link: "contact" },
  ];

  return (
    <div
      className={`flex justify-between items-center w-full h-20 fixed px-4 ${
        darkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <div>
        <h1
          onClick={() => setDarkMode(!darkMode)}
          className="text-5xl font-signature ml-2 cursor-pointer transition duration-300 transform hover:scale-105"
        >
          Mustafa
        </h1>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 capitalize cursor-pointer font-medium text-gray-500 hover:text-gray-700 transition duration-200 hover:scale-105"
          >
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer text-gray-500 pr-4 z-10 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col text-gray-500 bg-gradient-to-b from-black to-gray-800 justify-center items-center absolute top-0 left-0 w-full h-screen">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 py-6 capitalize text-4xl cursor-pointer transition duration-200 hover:text-gray-300"
            >
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Navbar;
