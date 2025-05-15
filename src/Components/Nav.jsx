import React from "react"
import AnchorLink from 'react-anchor-link-smooth-scroll';


export default function Nav(){
    return(
        <>
            <nav style={{ backgroundColor: "#0C0C16" }} className="px-6 py-4 font-['Ubuntu_Sans_Mono'] text-base border-b border-white/20 shadow-md shadow-gray-800">
                <div className="flex text-white justify-between items-center">
                    <div className="">
                        <p><AnchorLink href="#home" className="cursor-pointer">Alexis.dev</AnchorLink></p>
                    </div>

                    <div className="flex flex-row">
                        <ul className="flex gap-14">
                            <li className="cursor-pointer"><AnchorLink href="#about" className="cursor-pointer hover:underline">About Me</AnchorLink></li>
                            <li className="cursor-pointer"><AnchorLink href="#projects" className="cursor-pointer hover:underline">Projects</AnchorLink></li>
                            <li className="cursor-pointer"><AnchorLink href="#contact" className="cursor-pointer hover:underline">Contact Me</AnchorLink></li>
                        </ul>
                    </div>
                </div>
            </nav>
        
        </>
    )
}