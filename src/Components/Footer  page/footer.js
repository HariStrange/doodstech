import React from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa6";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTwitter,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="footer w-screen  bg-black text-white  flex flex-col justify-between overflow-y-hidden  p-5 shadow-md">
      <hr
        className=" w-[100%] md:w-[60%] m-auto h-0.1 bg-yellow-300 mt-5 md:mb-5 mb-5"
        data-aos="fade-down"
        data-aos-anchor-placement="top-bottom"
      />
      <div className=" flex items-center justify-between">
        <div
          className="container-1 flex flex-col "
          data-aos="fade-down"
          data-aos-duration="500"
        >
          <p className="font-bold text-yellow-300 mb-2 hover:motion-preset-focus ">
            Logo
            <span className="font-normal text-white text-[12px] ml-2 md:text-[15px]">
              Doods Technolgies
            </span>
          </p>

          <p className="text-[13px] md:text-[15px]  mb-2 ">
            Stay in the loop and sign up for the Wardiere newsletter
          </p>
          <div className="border-2 border-gray-700 rounded-full flex items-center justify-between p-2 w-full">
            <input
              type="email"
              className="w-full border-none outline-none text-[12px] bg-transparent py-1"
              placeholder="Enter your email"
            />
            <button type="button" className="bg-transparent ml-2">
              <FaArrowCircleRight className="text-yellow-300" />
            </button>
          </div>
        </div>
        <div
          className=" container-2 w-screen  flex-col items-center justify-center mt-3 hidden md:flex"
          data-aos="zoom-out"
          data-aos-duration="1200"
        >
          <h2 className="text-2xl font-semibold text-white mb-4">Follow Us</h2>
          <div className="flex space-x-6">
            <a
              href="https://www.instagram.com"
              className="text-3xl text-yellow-300 hover:text-white transition duration-200 hover:motion-preset-seesaw "
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              href="https://www.twitter.com"
              className="text-3xl text-yellow-300 hover:text-white transition duration-200  hover:motion-preset-seesaw"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a
              href="https://www.linkedin.com"
              className="text-3xl text-yellow-300 hover:text-white transition duration-200  hover:motion-preset-seesaw"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a
              href="https://www.github.com"
              className="text-3xl text-yellow-300 hover:text-white transition duration-200  hover:motion-preset-seesaw"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
        </div>
        <div
          className="container-3 flex  justify-between gap-5 text-[12px] md:text-[15px] text-yellow-300 ml-3"
          data-aos="fade-up"
          data-aos-duration="500"
        >
          <div className="compnay-container">
            <h3 className="font-bold">Company</h3>
            <ul className="text-white">
              <li className="hover:text-gray-500">
                <a href="#home">Home</a>
              </li>
              <li className="hover:text-gray-500">
                <a href="#about">About</a>
              </li>
              <li className="hover:text-gray-500">
                <a href="#service">Solutions</a>
              </li>
              {/* <li className="hover:text-gray-500">
                <a href="#">Pricing</a>
              </li>
              <li className="hover:text-gray-500">
                <a href="#">Team</a>
              </li>
              <li className="hover:text-gray-500">
                <a href="#">Career</a>
              </li> */}
            </ul>
          </div>
          <div className="Documentatioin ">
            <h3 className="font-bold">Documentation</h3>
            <ul className="text-white">
              <li className="hover:text-gray-500">
                <a href="#help">Help Centre</a>
              </li>
              <li className="hover:text-gray-500">
                <a href="#contact">Contact</a>
              </li>
              <li className="hover:text-gray-500">
                <a href="#faq">FAQ</a>
              </li>
              <li className="hover:text-gray-500">
                <a href="#privacy">Privacy Policy</a>
              </li>
            </ul>
          </div>
          <div className="social-container">
            <h3 className="font-bold">Social</h3>
            <ul className="text-white">
              <li className="hover:text-gray-500">
                <a href="#facebook">Facebook</a>
              </li>
              <li className="hover:text-gray-500">
                <a href="#twitter">Twitter</a>
              </li>
              <li className="hover:text-gray-500">
                <a href="#instagram">Instagram</a>
              </li>
              <li className="hover:text-gray-500">
                <a href="#linkedin">LinkedIn</a>
              </li>
              <li className="hover:text-gray-500">
                <a href="#youtube">Youtube</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div
        className="w-screen flex flex-col items-center justify-center mt-3 md:hidden"
        data-aos="zoom-out"
      >
        <h2 className="text-2xl font-semibold text-white mb-4">Follow Us</h2>
        <div className="flex space-x-6">
          <a
            href="https://www.instagram.com"
            className="text-3xl text-yellow-300 hover:text-white transition duration-200 hover:motion-preset-seesaw "
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a
            href="https://www.twitter.com"
            className="text-3xl text-yellow-300 hover:text-white transition duration-200  hover:motion-preset-seesaw"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a
            href="https://www.linkedin.com"
            className="text-3xl text-yellow-300 hover:text-white transition duration-200  hover:motion-preset-seesaw"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            href="https://www.github.com"
            className="text-3xl text-yellow-300 hover:text-white transition duration-200  hover:motion-preset-seesaw"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </div>

      <hr
        className=" w-[80%] md:w-[99%] m-auto h-0.5 bg-yellow-300 mt-3"
        data-aos="fade-up"
        data-aos-anchor-placement="bottom-bottom"
        data-aos-duration="500"
      />
      <div className="flex items-center justify-around md:justify-between mt-3 md:mb-3 text-[13px]">
        <p
          className="flex items-center gap-1"
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          <span>
            <FaRegCopyright className="text-yellow-300" />
          </span>
          Doods Technolgies.Inc All Rights Reserved 2023
        </p>
        <p data-aos="fade-up" data-aos-duration="1200">
          Terms & Conditions
        </p>
      </div>
    </footer>
  );
};

export default Footer;
