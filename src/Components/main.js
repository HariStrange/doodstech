import React from "react";

import HomePage from "./HomePage/home";
import Hero from "./Hero Page/hero";
import Service from "./Service Page/service";
import About from "./About us Page/about";
import Footer from "./Footer  page/footer";
import Navbar from "../Components/Header/Navbar";

const Main = () => {
  return (
    <div className="overflow-x-hidden w-screen">
      <section>
        <Navbar />
      </section>
      <section id="home">
        <HomePage />
      </section>
      <section id="hero">
        <Hero />
      </section>
      <section id="service">
        <Service />
      </section>
      <section id="about">
        <About />
      </section>
      <footer id="contact">
        <Footer />
      </footer>
    </div>
  );
};

export default Main;
