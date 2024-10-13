import React from "react";
import heroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b dark:from-black dark:via-black dark:to-gray-800 from-white to-gray-300"
    >
      <div className="flex flex-col justify-center items-center h-full px-4 md:flex-row max-w-screen-lg mx-auto">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold dark:text-white">
            I'm a Full Stack Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            I have experience in building and designing full stack applications
            with ReactJs and NodeJs.
          </p>
          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white cursor-pointer flex items-center bg-gradient-to-r from-cyan-500 to-blue-500 px-6 my-2 w-fit py-3"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={20} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img
            className="rounded-full mx-auto object-cover h-120 w-120 md:w-full object-center"
            src={heroImage}
            alt="my profile"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
