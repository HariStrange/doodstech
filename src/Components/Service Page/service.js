import React from "react";

const services = [
  {
    imgSrc:
      "https://www.damcogroup.com/wp-content/uploads/2022/09/accelerate-modernization-with-low-code-insurance-platforms.jpg",
    title: "Low Code / No Code Development",
    description:
      "Harness the power of Low Code and No Code platforms to rapidly build and deploy applications with minimal or no hand-coding. Our team specializes in tools like Microsoft PowerApps, Zoho, and Out systems to provide scalable and flexible solutions tailored to your business needs.",
    aos: "flip-left",
  },
  {
    imgSrc:
      "https://i.pinimg.com/736x/2c/34/55/2c345588e639b94a57ef17101d3a7ec2.jpg",
    title: "Custom Software Development",
    description:
      "Our custom software development services are designed to meet the unique needs of your business. We build scalable, secure, and high-performance applications tailored to your specific requirements.",
    aos: "zoom-out-up",
  },
  {
    imgSrc:
      "https://i.pinimg.com/736x/68/85/a3/6885a3b2326e00d20f111787fb1c0ea8.jpg",
    title: "Cloud Solutions",
    description:
      "Leverage the power of the cloud with our comprehensive cloud solutions. We offer cloud migration, management, and optimization services to help you achieve greater efficiency and scalability.",
    aos: "flip-left",
  },
  {
    imgSrc:
      "https://i.pinimg.com/736x/52/2a/92/522a920d897969f9e6ed1f8023328f90.jpg",
    title: "AI and Machine Learning",
    description:
      "Unlock the potential of AI and machine learning with our expert services. We help you integrate intelligent solutions into your business processes to drive innovation and improve decision-making.",
    aos: "zoom-out-down",
  },
  {
    imgSrc:
      "https://i.pinimg.com/736x/02/52/e3/0252e3a3282f752ab9c0e97400eb7778.jpg",
    title: "Mobile App Development",
    description:
      "Our mobile app development services cover both iOS and Android platforms. We create user-friendly, high-performance mobile applications that enhance your business's reach and engagement.",
    aos: "zoom-out-up",
  },
  {
    imgSrc:
      "https://i.pinimg.com/736x/4f/a2/47/4fa247c81abfb10ae957313a344d17b1.jpg",
    title: "Cybersecurity Services",
    description:
      "Protect your business from cyber threats with our comprehensive cybersecurity services. We offer risk assessments, vulnerability testing, and robust security solutions to safeguard your data and systems.",
    aos: "zoom-out-down",
  },
];

const Service = () => {
  return (
    <div className="bg-gray-900 h-full p-5 w-screen" >
      <h1
        className="text-lime-500 text-3xl font-bold md:relative md:left-[5%]"
        data-aos="fade-down"
      >
        Our Services
      </h1>
      <ul className="p-5 flex flex-wrap justify-center" data-aos="zoom-out-down">
        {services.map((eachservices) => {
          return (
            <li
              className="bg-black backdrop-blur-2xl bg-opacity-10 h-full w-full sm:w-[45%] md:w-[30%] m-3 p-4 rounded-md hover:shadow-xl hover:shadow-gray-400 transition-transform duration-300 ease-in-out hover:border hover:border-gray-400 mt-2 mb-2"
              data-aos={eachservices.aos}
            >
              <img
                src={eachservices.imgSrc}
                alt={eachservices.title}
                data-aos="fade-up"
                className="transition-transform duration-300 ease-in-out hover:scale-110 object-cover h-[200px] w-full"
              />
              <h1
                className="text-left text-3xl font-bold text-yellow-300 mb-3 mt-3"
                data-aos="fade-up"
              >
                {eachservices.title}
              </h1>
              <p
                className="text-white font-semibold text-lg text-left"
                data-aos="fade-up"
              >
                {eachservices.description}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Service;
