import React from "react";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { TypeAnimation } from 'react-type-animation';
import githubImg from "/assets/githublogo.svg";
import linkedinImg from "/assets/linkedinlogo.svg";
import resumeImg from "/assets/fileText.svg";

export default function Hero() {
    return (
        <div
            id="home"
            style={{ backgroundColor: "#0C0C16" }}
            className="font-['Ubuntu_Sans_Mono'] px-5 py-10 flex flex-col-reverse md:flex-row items-center justify-center gap-10 md:gap-20"
        >
            {/* Left: Name & Socials */}
            <div
                id="name-socials-container"
                className="flex flex-col gap-6 md:w-1/2 w-full items-center md:items-start text-center md:text-left"
            >
                <div id="name-title">
                    <h2 className="text-white text-2xl md:text-3xl">Hi, I'm Alexis</h2>
                    <TypeAnimation
                        sequence={[
                            "Software Developer", 2000,
                            "Fullstack Engineer", 2000,
                            "Tech Enthusiast", 2000
                        ]}
                        wrapper="h1"
                        cursor={true}
                        repeat={Infinity}
                        className="text-[#9013fe] text-3xl md:text-5xl font-semibold pt-3"
                    />
                </div>

                <div id="socials" className="flex gap-6 mt-4">
                    <a
                        href="https://github.com/lexp2204"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={githubImg} alt="Github" className="w-10 h-10 md:w-11 md:h-11" />
                    </a>

                    <a
                        href="https://www.linkedin.com/in/alexis-penn-b48331263/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={linkedinImg} alt="Linkedin" className="w-9 h-9 md:w-10 md:h-10" />
                    </a>

                    <a
                        href="https://drive.google.com/file/d/1NvQxRO-idU3uKmU61LadUNrGP7BfSzJs/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={resumeImg} alt="Resume" className="w-9 h-9 md:w-10 md:h-10" />
                    </a>
                </div>
            </div>

            {/* Right: Animation */}
            <div id="animation" className="w-full md:w-1/2 max-w-md">
                <DotLottieReact
                    src="https://lottie.host/97b12fc2-bcb9-4124-bb8a-d46987e00911/eOkqD5CM13.lottie"
                    loop
                    autoplay
                />
            </div>
        </div>
    );
}
