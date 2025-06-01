import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import projects from "/src/projectsData.js";

export default function Projects() {
  const [cardsPerPage, setCardsPerPage] = useState(3);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const updateCardsPerPage = () => {
      const width = window.innerWidth;
      if (width < 640) setCardsPerPage(1); // mobile
      else if (width < 1024) setCardsPerPage(2); // tablet
      else setCardsPerPage(3); // desktop
    };
    updateCardsPerPage();
    window.addEventListener("resize", updateCardsPerPage);
    return () => window.removeEventListener("resize", updateCardsPerPage);
  }, []);

  const totalSlides = Math.ceil(projects.length / cardsPerPage);

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  const getVisibleProjects = () => {
    const start = currentIndex * cardsPerPage;
    return projects.slice(start, start + cardsPerPage);
  };

  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir) => ({
      x: dir > 0 ? -300 : 300,
      opacity: 0,
    }),
  };

  return (
    <div
      id="projects"
      className="font-['Ubuntu_Sans_Mono'] w-full bg-[#0C0C16] text-white py-12 px-4 flex flex-col items-center"
    >
      <h2 className="text-2xl text-white mb-8 text-center">My Projects</h2>

      <div className="flex items-center gap-4 w-full max-w-7xl justify-center">
        {/* Left Arrow */}
        <button
          onClick={handlePrev}
          className="text-white text-2xl hover:text-purple-500 z-10"
        >
          <FaArrowLeft />
        </button>

        {/* Animated Slide */}
        <div className="relative w-full overflow-hidden">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4 }}
              className="flex justify-center gap-6 w-full"
            >
              {getVisibleProjects().map((project, idx) => (
                <div
                  key={idx}
                  className="flex flex-col bg-[#0C0C16] border border-[#9013FE] rounded-2xl p-4 shadow-lg w-full max-w-[350px] h-[610px]"
                >
                  <div className="w-full h-40 bg-[#2C2C3E] rounded-xl overflow-hidden flex items-center justify-center mb-4">
                    <img
                      src={project.image}
                      alt={`${project.title} screenshot`}
                      className="h-full w-full object-cover object-bottom"
                    />
                  </div>

                  <h3 className="text-lg font-semibold pt-2 pb-2">
                    {project.title}
                  </h3>

                  <div className="flex flex-wrap gap-2 pb-3">
                    {project.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs bg-[#4D4D4D] px-2 py-1 rounded-lg"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <ul className="text-sm text-gray-300 list-disc list-inside pb-4 flex-grow">
                    {project.description.map((item, i) => (
                      <li className="pb-2" key={i}>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="flex gap-4 justify-between mt-auto">
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
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Arrow */}
        <button
          onClick={handleNext}
          className="text-white text-2xl hover:text-purple-500 z-10"
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
}
