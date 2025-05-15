import React from "react";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { TypeAnimation } from 'react-type-animation';
import githubImg from "/assets/githublogo.svg"
import linkedinImg from "/assets/linkedinlogo.svg"
import resumeImg from "/assets/fileText.svg"


export default function Hero(){
    return(
        <div id="home" style={{ backgroundColor: "#0C0C16" }} className="font-['Ubuntu_Sans_Mono'] px-20 py-4 flex flex-row gap-10 justify-center items-center">
           <div id="name-socials-container" className="flex flex-col gap-5 w-1/2 pt-15 pl-10">
                <div id="name-title" className="w-auto">
                    <h2 className="text-white text-2xl">Hi, I'm Alexis</h2>
                    <TypeAnimation sequence={["Software Engineer", 2000, "Fullstack Developer", 2000, "Tech Enthusiast", 2000]} wrapper="h1" cursor={true} repeat={Infinity} className="text-[#9013fe] text-7xl font-semibold pt-2.5"/>
                </div>
                <div id="socials" className="flex gap-8 items-center">
                    <a href="https://github.com/lexp2204" target="_blank" rel="noopener noreferrer">
                        <img src={githubImg} alt="Github" className="w-11 h-11"/>
                    </a>

                    <a href="https://www.linkedin.com/in/alexis-penn-b48331263/" target="_blank" rel="noopener noreferrer">
                        <img src={linkedinImg} alt="Linkedin"className="w-10 h-10"/>
                    </a>

                    <a href="https://drive.google.com/file/d/1NvQxRO-idU3uKmU61LadUNrGP7BfSzJs/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                        <img src={resumeImg} alt="Resume"className="w-10 h-10"/>
                    </a>
                </div>
           </div>

           <div id="animation" className="pl-0 pt-6 w-4xl h-4xl -ml-4">
                <DotLottieReact 
                    src="https://lottie.host/97b12fc2-bcb9-4124-bb8a-d46987e00911/eOkqD5CM13.lottie"
                    loop
                    autoplay
                />   
           </div>
        </div>
    )
}