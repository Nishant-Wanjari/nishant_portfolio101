import React from "react";
import About02 from "../../assets/About02.jpg";
import { IoArrowForward } from "react-icons/io5";

const About = () => {
  return (
    <div id="About"
      className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-around 
    bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12"
    >
      <div>
        <h2 className="text-2xl md:text-4xl font-bold">About</h2>
        <div className="md:flex flex-wrap flex-col md:flex-row items-center gap-40 mt-5">
          <img
            className="md:h-80 border-gray-300 rounded-lg"
            src={About02}
            alt=""
          />
          <ul>
            {[
              {
                title: "Frontend Developer",
                desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, blanditiis?",
              },
              {
                title: "AI ML Enthusiast",
                desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, blanditiis?",
              },
              {
                title: "Java Developer",
                desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, blanditiis?",
              },
            ].map((item, index) => (
              <div key={index} className="flex gap-3 py-4">
                <IoArrowForward size={30} className="mt-1" />
                <span className="max-w-md">
                  <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                    {item.title}
                  </h1>
                  <p className="text-sm md:text-base leading-tight text-left">
                    {item.desc}
                  </p>
                </span>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
