import React from "react";
import {
  FaCss3,
  FaReact,
  FaHtml5,
  FaJs,
  FaPython,
  FaJava,
} from "react-icons/fa";

const experiences = [
  {
    id: 1,
    icon: <FaPython size={60} color="#3776AB" />,
    institute: "Ramrao Adik Institute Of Technology, DYPU",
    project: "Alzheimer Disease Detection Using Ocular Images",
    role: "Student Research Assistant",
  },
  {
    id: 2,
    icon: <FaJava size={60} color="#E34F26" />,
    institute: "XYZ Company",
    project: "Backend Development with Spring Boot",
    role: "Java Developer Intern",
  },
  {
    id: 3,
    icon: <FaReact size={60} color="#61DBFB" />,
    institute: "ABC Tech",
    project: "Frontend Development with React.js",
    role: "React Developer Intern",
  },
];

const Experience = () => {
  return (
    <div id="Experience" className="p-10 md:p-24">
      <h1 className="text-3xl md:text-5xl text-white font-bold">Experience</h1>

      {/* Skills Section */}
      <div className="flex flex-wrap items-center justify-center md:justify-around gap-10 py-12">
        {[
          { Icon: FaHtml5, color: "#E34F26" },
          { Icon: FaCss3, color: "#1572B6" },
          { Icon: FaJs, color: "#F7DF1E" },
          { Icon: FaReact, color: "#61DBFB" },
          { Icon: FaJava, color: "#E34F26" },
          { Icon: FaPython, color: "#3776AB" },
        ].map(({ Icon, color }, index) => (
          <span
            key={index}
            className="p-5 bg-white flex items-center justify-center rounded-xl shadow-lg"
          >
            <Icon size={60} color={color} />
          </span>
        ))}
      </div>

      {/* Experience Section */}
      <div className="space-y-6">
        {experiences.map((exp) => (
          <div
            key={exp.id}
            className="flex gap-8 bg-slate-900 bg-opacity-60 rounded-lg p-8 items-center shadow-md"
          >
            {exp.icon}
            <div className="text-white">
              <h2 className="text-lg md:text-2xl font-semibold">
                {exp.institute}
              </h2>
              <p className="text-md md:text-lg leading-relaxed font-light">
                {exp.project}
              </p>
              <ul className="text-md md:text-lg p-2">
                <li>- {exp.role}</li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
