import React from "react";

export default function About(){
    return(
        <div id="about" style={{ backgroundColor: "#0C0C16" }} className="font-['Ubuntu_Sans_Mono'] py-12 px-4">
            <h2 className="text-2xl text-white pb-20 px-25">About Me</h2>

            <div className="flex justify-center">
                <div className="backdrop-blur-md bg-gray-200/10 rounded-xl shadow-2xl p-10 w-[90%] max-w-4xl text-white transition-all duration-300 hover:shadow-[#9013fe]/40 hover:scale-[1.02]">
                    <p className="text-lg leading-relaxed text-gray-200 pb-4">
                        I am a passionate Fullstack Developer who enjoys building clean, functional, and creative web experiences.
                    </p>
                    <p className="text-lg leading-relaxed text-gray-200">
                        I love building things from the ground up and seeing how the frontend, backend, and database all come together to create a seamless experience—whether through a mobile or web application. From designing a UI to building the logic behind it and watching everything function as one cohesive system, all of these aspects allow me to express my creativity and problem-solving skills through coding and design.
                    </p>

                    <div className="flex items-center gap-4 pt-6">
                        <img src="/assets/kean.jpg" alt="College Logo" className="w-12 h-12 rounded-full object-cover" />
                        <div>
                            <h3 className="text-xl font-semibold text-white">Kean University</h3>
                            <p className="text-sm text-gray-300">B.S. in Computer Science, Expected 2026</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}