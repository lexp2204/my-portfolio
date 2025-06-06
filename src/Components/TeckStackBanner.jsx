import React from "react";
import { motion } from "framer-motion";

const techStack = [
  "/assets/html.svg",
  "/assets/css.svg",
  "/assets/tailwind.svg",
  "/assets/js.svg",
  "/assets/react.svg",
  "/assets/nodejs.svg",
  "/assets/express.svg",
  "/assets/php.svg",
  "/assets/postgres.svg",
  "/assets/mongodb.svg",
];

export default function TechStackBanner() {
  return (
    <div className="overflow-hidden py-2 bg-[#4D4D4D]">
      <motion.div
        className="flex w-[200%]"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 30,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {[0, 1].map((_, i) => (
          <div
            key={i}
            className="flex justify-evenly items-center w-full gap-6 sm:gap-10"
          >
            {techStack.map((src, idx) => (
              <img
                key={`${i}-${idx}`}
                src={src}
                alt="tech-icon"
                className="h-6 w-6 sm:h-8 sm:w-8 object-contain"
              />
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
