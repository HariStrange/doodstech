import React from "react";
import bgVideo from '../../assets/bgvideo.mp4'; // Adjust the path as necessary

const HomePage = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1] blur-[1px]"
        src={bgVideo}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Dark Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-0" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1
          className="text-yellow-300 font-bold text-5xl md:text-6xl"
          data-aos="fade-down"
          data-aos-anchor="#example-anchor"
          data-aos-offset="500"
          data-aos-duration="1200"
        >
          Welcome to the Future of Tech!
        </h1>
        <p
          className="text-white text-lg mt-5 mb-5 w-full md:w-1/2"
          data-aos="zoom-out-down"
          data-aos-anchor="#example-anchor"
          data-aos-offset="500"
          data-aos-duration="1000"
        >
          Dive into a universe where technology transforms lives. From
          groundbreaking gadgets to the latest trends in AI, our platform is
          your gateway to the tech of tomorrow. Engage, learn, and be inspired.
        </p>
        <button
          data-aos="fade-up"
          className="text-white font-semibold rounded hover:bg-yellow-400 hover:border-none bg-transparent border px-4 py-2"
        >
          Read More
        </button>
      </div>
    </div>
  );
};

export default HomePage;
