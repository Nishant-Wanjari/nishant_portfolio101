import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div
      id="Footer"
      className="flex flex-col md:flex-row justify-center items-center bg-[#465697] text-white p-10 md:p-14 gap-8 md:gap-16"
    >
      {/* Left Section - Title */}
      <div className="text-center md:text-left md:w-1/3">
        <h1 className="text-3xl md:text-5xl font-bold">Contact</h1>
        <h3 className="text-md md:text-2xl font-normal mt-2">
          Feel free to reach out!
        </h3>
      </div>

      {/* Right Section - Contact Info */}
      <ul className="flex flex-col gap-4 text-md md:text-xl md:w-2/3">
        <li className="flex items-center gap-3">
          <MdOutlineEmail size={25} />
          <a
            href="mailto:nishantwanjarisunil@gmail.com"
            className="hover:underline break-all"
          >
            nishantwanjarisunil@gmail.com
          </a>
        </li>
        <li className="flex items-center gap-3">
          <CiLinkedin size={25} />
          <a
            href="https://www.linkedin.com/in/nishantwanjari"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline break-all"
          >
            linkedin.com/nishantwanjari
          </a>
        </li>
        <li className="flex items-center gap-3">
          <FaGithub size={25} />
          <a
            href="https://github.com/Nishant-Wanjari"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline break-all"
          >
            github.com/Nishant-Wanjari
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
