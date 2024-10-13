import React from "react";
import { BiPhoneCall } from "react-icons/bi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { SiGeeksforgeeks, SiLeetcode, SiCodingninjas } from "react-icons/si";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/mustafakapasi19",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/Mustu19",
    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:codewithmustu@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: "/resume.pdf",
      style: "rounded-br-md",
      download: true,
    },
    {
      id: 5,
      child: (
        <>
          GeeksForGeeks <SiGeeksforgeeks size={30} />
        </>
      ),
      href: "https://www.geeksforgeeks.org/user/codewithmustu/",
    },
    {
      id: 6,
      child: (
        <>
          LeetCode <SiLeetcode size={30} />
        </>
      ),
      href: "https://leetcode.com/u/codewithmustu/",
    },
    {
      id: 7,
      child: (
        <>
          Coding Ninjas <SiCodingninjas size={30} />
        </>
      ),
      href: "https://www.naukri.com/code360/profile/codewithmustu",
    },
    {
      id: 8,
      child: (
        <>
          Phone <BiPhoneCall size={30} />
        </>
      ),
      href: "tel:+919510909019",
    },
  ];

  return (
    <>
      {/* Desktop View */}
      <div className="hidden lg:flex flex-col left-0 top-[20%] fixed">
        <ul>
          {links.map(({ id, child, href, style, download }) => (
            <li
              key={id}
              className={`flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md bg-gray-500 duration-300 ${style}`}
            >
              <a
                href={href}
                className="flex justify-between items-center w-full text-white"
                target="_blank"
                rel="noreferrer"
                download={download}
              >
                {child}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile View */}
      <div className="fixed bottom-5 left-0 right-0 bg-gray-500 lg:hidden">
        <ul className="flex justify-between">
          {links.map(({ id, child, href, style, download }) => (
            <li
              key={id}
              className={`flex justify-center items-center w-1/4 h-12 hover:bg-gray-600 duration-300 ${style}`}
            >
              <a
                href={href}
                className="flex justify-center items-center w-full text-white"
                target="_blank"
                rel="noreferrer"
                download={download}
              >
                {child}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default SocialLinks;
