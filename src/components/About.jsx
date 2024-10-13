import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b dark:from-gray-800 dark:to-black from-gray-300 to-white dark:text-white flex items-center"
    >
      <div className="max-w-screen-lg p-8 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-4">
          <p className="text-4xl font-bold border-b-4 inline border-gray-500">
            About
          </p>
        </div>
        
        {/* About Description */}
        <div className="flex flex-col space-y-6 text-xl mt-10">
          <p>
            I am currently in my fourth year of college, with a passion for building full-stack applications and solving complex problems.
          </p>
          <p>
            My expertise lies in both front-end and back-end development, and I am constantly enhancing my skills by working on innovative projects.
          </p>
          <p>
            I am particularly focused on optimizing performance and scalability in web applications and leveraging cloud technologies to build modern, robust applications.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
