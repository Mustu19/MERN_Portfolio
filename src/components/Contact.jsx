import React from "react";

const Contact = () => {
  return (
    <div name="contact" className="w-full h-screen bg-gradient-to-b dark:from-black dark:to-gray-800 p-4 dark:text-white from-white to-slate-300 via-gray-200">
      <div className="flex flex-col p-4 justify-center mx-auto h-full max-w-screen-lg">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">Contact</p>
          <p className="py-6">Submit the form to get in touch with me</p>
        </div>

        <div className="flex justify-center items-center">
          <form action="https://getform.io/f/lbkmrpeb" method="POST" className="flex flex-col w-full md:w-1/2 space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-black dark:text-white focus:outline-none focus:border-cyan-500"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="p-2 bg-transparent border-2 rounded-md text-black dark:text-white focus:outline-none focus:border-cyan-500"
              required
            />
            <textarea
              name="message"
              rows="10"
              placeholder="Enter your message"
              className="p-2 bg-transparent border-2 rounded-md text-black dark:text-white focus:outline-none focus:border-cyan-500"
              required
            ></textarea>
            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
