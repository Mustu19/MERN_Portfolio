import React from "react";
import studentsays from "../assets/portfolio/studentsays.png";
import mealmission from "../assets/portfolio/mealmission.jpg";
import savvytimezone from "../assets/portfolio/savvytimezone.png";
import spotify from "../assets/portfolio/spotify.png";
import gma from "../assets/portfolio/gma.png"

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: studentsays,
      name: "Student Says",
      link: "https://studentsays.netlify.app/",
      repo: "https://github.com/Mustu19/StudentSays",
      video: "",
    },
    {
      id: 2,
      src: mealmission,
      name: "Meal Mission",
      link: "https://missionmeal.netlify.app/",
      repo: "https://github.com/DhruvItaliya/hackathon",
      video: "https://www.youtube.com/watch?v=qANwOgijGBs&feature=youtu.be",
    },
    {
      id: 3,
      src: gma,
      name: "Gujarat Machinery Agency",
      link: "https://www.gujaratmachineryagency.in/",
      repo: "https://www.gujaratmachineryagency.in/",
      video: "",
    },
    {
      id: 4,
      src: savvytimezone,
      name: "Savvy TimeZone",
      link: "https://savvytimezone.netlify.app",
      repo: "https://github.com/Mustu19/Savvy-Time",
      video: "",
    },
    {
      id: 5,
      src: spotify,
      name: "Spotify",
      link: "https://github.com/Mustu19/SPOTIFY_CLONE",
      repo: "https://github.com/Mustu19/SPOTIFY_CLONE",
      video: "",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b dark:from-black dark:to-gray-800 from-white to-gray-300 w-full dark:text-white  min-h-screen flex items-center portfolio"
    >
      <div className="max-w-screen-lg p-8 mx-auto flex flex-col justify-center w-full h-full">
        {/* Header */}
        <div className="pb-8">
          <p className="text-4xl font-bold border-b-4 inline border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 px-6 sm:px-0">
          {portfolios.map(({ id, src, link, repo, video, name }) => (
            <div
              key={id}
              className="shadow-lg shadow-gray-600 rounded-lg overflow-hidden relative group"
            >
              {/* Image */}
              <a href={video || link} target="_blank" rel="noopener noreferrer">
                <img
                  src={src}
                  alt={name}
                  className="w-full h-64 object-cover duration-200 group-hover:scale-105 transition-transform"
                />
              </a>

              {/* Project Name */}
              <div className="text-center py-2 bg-black bg-opacity-60 text-white font-semibold">
                <p>{name}</p>
              </div>

              {/* Buttons */}
              <div className="flex justify-center mt-4 space-x-4">
                <button
                  className="px-6 py-2 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 duration-200"
                  onClick={() => window.open(link, "_blank")}
                >
                  Live
                </button>
                <button
                  className="px-6 py-2 bg-green-600 text-white rounded-md font-medium hover:bg-green-700 duration-200"
                  onClick={() => window.open(repo, "_blank")}
                >
                  GitHub
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
