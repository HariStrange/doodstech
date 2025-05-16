import React from "react";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import "./hero.css";

const Hero = () => {
  return (
    <div className="bg-black text-white w-screen flex flex-col items-center justify-center  h-screen p-5 ">
      <div className="flex flex-col md:flex-row-reverse items-center justify-around p-5">
        <div
          className="content-container order-1 md:order-2 mb-5 mt-10"
         data-aos="fade-up"
     
        >
          <h1 className="text-yellow-300 text-5xl font-bold font-pretty mb-5">
            Launching Soon
          </h1>
          <p className="text-white text-lx font-semibold  font-pretty  md:w-[70%] mb-5">
            Tech doesn't have to feel like a diffrent language. We built
            Schematic to make sure innovation works for you, your buissness and
            your peaple. We can't wait to innovation with you.
          </p>
          <button className="text-yellow-300 border border-yellow-300 py-2 px-4 text-sm rounded hover:bg-yellow-300 hover:text-white hover:font-semibold mb-5">
            CONTACT US
          </button>
          <div className="social-container flex items-center order-2 md:order-1">
            <p className="text-sm text-yellow-300 font-bold">GET SOCIAL</p>
            <hr className="w-24 mr-2 ml-2 border border-yellow-300" />
            <div className="icons-container flex items-center gap-2">
              <FaFacebook className="text-yellow-300" />
              <FaInstagramSquare className="text-yellow-300" />
              <FaSquareXTwitter className="text-yellow-300" />
            </div>
          </div>
        </div>
        <div
          className="image-container"
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
        >
          <img
            className="w-full rounded-lg"
            src="https://thumbs.dreamstime.com/b/multiracial-male-female-professionals-working-using-technologies-discussing-table-multiracial-male-female-247196209.jpg"
            alt="..."
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
