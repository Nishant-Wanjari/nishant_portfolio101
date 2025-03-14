import React from "react";
import HomePageImage from "../../assets/HomePageImage.jpg";
import TextChanger from "../TextChanger";

const Home = () => {
  return (
    <div className="text-white flex w-full justify-between items-start p-10 md:p-20">
      <div className="md:w-2/4 md:pt-10">
        {/* Set min-w-[250px] for consistent size */}
        <h1 className="text-4xl md:text-6xl font-bold flex leading-normal tracking-tighter min-w-[250px]">
          <TextChanger />
        </h1>
        <p className="text-sm md:text-2xl tracking-tight">
          Lorem ipsum dolor sit amet.
        </p>
        <button className="mt-5 md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
          Contact Me
        </button>
      </div>
      <div className="flex justify-center w-2/5">
        <img
          className="w-40 md:w-64 rounded-full shadow-lg border-4 border-gray-300 transform hover:scale-105 transition duration-300"
          src={HomePageImage}
          alt=""
        />
      </div>
    </div>
  );
};

export default Home;
