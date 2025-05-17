import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import projects from "/src/projectsData.js"; // Adjust path accordingly

export default function ProjectCarousel() {
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 3;

  const handlePrev = () => {
    setStartIndex((prev) => Math.max(prev - itemsPerPage, 0));
  };

  const handleNext = () => {
    setStartIndex((prev) =>
      Math.min(prev + itemsPerPage, projects.length - itemsPerPage)
    );
  };

  const visibleProjects = projects.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div id="projects" className="font-['Ubuntu_Sans_Mono'] relative w-full bg-[#0C0C16] text-white py-10">
      <h2 className="text-2xl text-white pb-15 px-25 mb-8"> My Projects</h2>

      <div className="flex justify-center items-center gap-6 px-4">
        {/* Left Arrow */}
        <button onClick={handlePrev} className="text-white text-2xl hover:text-purple-500">
          <FaArrowLeft />
        </button>

        {/* Project Cards */}
        <div className="flex gap-28">
          {visibleProjects.map((project, index) => (
            <div key={index} className=" border-1 border-[#9013FE] bg-[#0C0C16] relative flex flex-col rounded-2xl p-5 w-[300px] h-[590px] shadow-lg">
              <div className="w-full h-32 bg-[#2C2C3E] rounded-xl overflow-hidden flex items-center justify-center mb-4">
                <img src={project.image} alt={`${project.title} screenshot`} className="h-full w-full object-cover object-bottom"/>
              </div>

              <h3 className="text-lg font-semibold pt-5 pb-3">{project.title}</h3>
              <div className="flex flex-wrap gap-2 pb-2">
                {project.techStack.map((tech, idx) => (
                  <span key={idx} className="text-xs bg-[#4D4D4D] px-2 py-1 rounded-lg">
                    {tech}
                  </span>
                ))}
              </div>

              <ul className="text-sm text-gray-300 list-disc list-inside">
                {project.description.map((item, idx) => (
                <li className="pb-3" key={idx}>{item}</li>))}
              </ul>

              <div className="absolute bottom-5 left-5 right-5 flex gap-4 justify-between">
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    className="text-sm bg-purple-500 py-1 rounded hover:bg-purple-700 w-[120px] text-center"
                    rel="noreferrer"
                  >
                    Live Demo
                  </a>
                )}
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    className="text-sm bg-gray-700 w-px-3 py-1 rounded hover:bg-gray-900 w-[120px] text-center"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button onClick={handleNext} className="text-white text-2xl hover:text-purple-500">
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
}
