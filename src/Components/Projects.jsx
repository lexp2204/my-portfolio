import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import projects from "/src/projectsData.js";

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); 

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) =>
      prev === 0 ? projects.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) =>
      prev === projects.length - 1 ? 0 : prev + 1
    );
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
    }),
  };

  const project = projects[currentIndex];

  return (
    <div
      id="projects"
      className="font-['Ubuntu_Sans_Mono'] w-full bg-[#0C0C16] text-white py-12 px-4 flex flex-col items-center"
    >
      <h2 className="text-2xl text-white mb-8 text-center">My Projects</h2>

      <div className="flex items-center gap-4 w-full justify-center max-w-xl">
        {/* Left Arrow */}
        <button
          onClick={handlePrev}
          className="text-white text-2xl hover:text-purple-500"
        >
          <FaArrowLeft />
        </button>

        {/* Animated Project Card */}
        <div className="w-[90%] sm:w-[350px] md:w-[400px] h-[610px] relative overflow-hidden">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4 }}
              className="absolute top-0 left-0 right-0 bottom-0 border border-[#9013FE] bg-[#0C0C16] rounded-2xl p-5 shadow-lg"
            >
              <div className="w-full h-40 bg-[#2C2C3E] rounded-xl overflow-hidden flex items-center justify-center mb-4">
                <img
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  className="h-full w-full object-cover object-bottom"
                />
              </div>

              <h3 className="text-lg font-semibold pt-2 pb-2">{project.title}</h3>

              <div className="flex flex-wrap gap-2 pb-3">
                {project.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-xs bg-[#4D4D4D] px-2 py-1 rounded-lg"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <ul className="text-sm text-gray-300 list-disc list-inside pb-4">
                {project.description.map((item, idx) => (
                  <li className="pb-2" key={idx}>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="flex gap-4 justify-between absolute bottom-5 left-5 right-5">
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    className="text-sm bg-purple-500 py-1 px-2 rounded hover:bg-purple-700 w-full text-center"
                    rel="noreferrer"
                  >
                    Live Demo
                  </a>
                )}
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    className="text-sm bg-gray-700 py-1 px-2 rounded hover:bg-gray-900 w-full text-center"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Arrow */}
        <button
          onClick={handleNext}
          className="text-white text-2xl hover:text-purple-500"
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
}
