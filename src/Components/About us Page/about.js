import React from "react";

const About = () => {
  return (
    <div className="h-full md:h-screen bg-black flex flex-col items-center gap-3 md:flex-row p-5 w-screen justify-between">
      <h1
        className="border-l-8 text-yellow-300 font-bold text-3xl mt-3 mb-3 md:hidden"
        data-aos="zoom-in-down"
      >
        About Dood Technologies!
      </h1>
      <div
        className="image-container md:w-[40vw] flex items-center justify-center"
        data-aos="fade-down"
      >
        <img
          src="https://i.pinimg.com/736x/c4/95/81/c49581a2e27bbda133d533523524282d.jpg"
          alt="..."
          className="object-cover shadow-yellow-300 shadow-md transition-transform duration-500 hover:scale-95 cursor-pointer"
        />
      </div>
      <div
        className="about-container md:w-[55vw] mt-8 md:mt-0 flex flex-col gap-3 justify-center"
        data-aos="zoom-in-right"
      >
        <h1
          className="border-l-8  md:flex text-yellow-300 font-bold text-3xl mt-3 mb-3 hidden"
          data-aos="zoom-in-down"
        >
          About Dood Technologies!
        </h1>
        <p
          className="text-white text-[18px] w-[95%] font-semibold"
          data-aos="fade-right"
        >
          Welcome to Doods Tech – where innovation meets expertise. We are a
          dynamic team of professionals who are passionate about transforming
          businesses through technology. Our diverse skill set spans across App
          Development, Low Code/No Code Development , Business Process
          Automation , IoT Integration, AI & ML Solutions, and Cyber Security
          Services.
        </p>
        <p
          className="text-white text-[18px] w-[95%] font-semibold"
          data-aos="fade-left"
        >
          At Doods Tech, our team is our greatest asset. We are designers,
          developers, strategists, and innovators who bring a unique blend of
          creativity and technical proficiency to every project. With years of
          experience across various industries, we understand the unique
          challenges businesses face and work collaboratively to deliver
          solutions that are tailored, efficient, and future-ready.
        </p>
        <p
          className="text-white text-[18px] w-[95%] font-semibold"
          data-aos="fade-right"
        >
          We believe in the power of technology to drive growth and create new
          opportunities. That’s why we stay ahead of industry trends, adopting
          the latest tools and methodologies to provide cutting-edge solutions
          that keep our clients competitive in a rapidly evolving market.
        </p>
      </div>
    </div>
  );
};

export default About;
