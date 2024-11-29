import React from "react";
import profilePic from "../assets/profile.jpg";

const Home = () => {
  return (
    <section
      id="home"
      className="pt-20 min-h-screen flex flex-wrap items-center justify-center bg-gradient-to-r from-gray-300 via-gray-200 to-white px-6 lg:px-20"
    >
      {/* Left Side: About Me */}
      <div className="w-full lg:w-1/2 text-center lg:text-left mb-6 lg:mb-0">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          About Me
        </h2>
        <p className="text-base md:text-lg text-gray-700 leading-relaxed">
          I am a passionate web developer with a keen interest in creating
          dynamic and user-friendly websites. I have experience working with
          modern web technologies like React, TailwindCSS, and JavaScript. My
          goal is to craft clean and efficient code while ensuring an excellent
          user experience.
        </p>
        <p className="text-base md:text-lg text-gray-700 leading-relaxed mt-4">
          Apart from coding, I like watching cricket, movies and web series. I
          am always eager to learn new technologies and improve my skills.
        </p>
      </div>
      {/* Right Side: Profile Picture and Text */}
      <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-end">
        <div className="mb-4 lg:mb-6">
          <img
            src={profilePic}
            alt="Profile"
            className="w-40 h-40 md:w-60 md:h-60 rounded-full border-4 border-blue-300 shadow-lg"
          />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 text-center">
          Hi, I'm Farhan Ahamad
        </h1>
        <p className="text-lg md:text-xl mt-2 md:mt-4 text-gray-600 text-center">
          A Passionate Web Developer
        </p>
      </div>
    </section>
  );
};

export default Home;

