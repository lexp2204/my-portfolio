import React, { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Menu, X } from "lucide-react"; 

export default function Nav() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav style={{ backgroundColor: "#0C0C16" }} className="px-6 py-4 font-['Ubuntu_Sans_Mono'] text-base border-b border-white/20 shadow-md shadow-gray-800">
            <div className="flex text-white justify-between items-center">
                {/* Logo */}
                <div>
                    <p>
                        <AnchorLink href="#home" className="cursor-pointer">Alexis.dev</AnchorLink>
                    </p>
                </div>

                {/* Hamburger Menu Icon (Mobile Only) */}
                <div className="md:hidden">
                    <button onClick={toggleMenu}>
                        {menuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex">
                    <ul className="flex gap-14">
                        <li>
                            <AnchorLink
                                href="#about"
                                className="cursor-pointer hover:underline"
                            >
                                About Me
                            </AnchorLink>
                        </li>
                        <li>
                            <AnchorLink
                                href="#projects"
                                className="cursor-pointer hover:underline"
                            >
                                Projects
                            </AnchorLink>
                        </li>
                        <li>
                            <AnchorLink
                                href="#contact"
                                className="cursor-pointer hover:underline"
                            >
                                Contact Me
                            </AnchorLink>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden mt-4 text-white pt-2">
                    <ul className="flex flex-col gap-4">
                        <li>
                            <AnchorLink
                                href="#about"
                                className="cursor-pointer hover:underline"
                                onClick={() => setMenuOpen(false)}
                            >
                                About Me
                            </AnchorLink>
                        </li>
                        <li>
                            <AnchorLink
                                href="#projects"
                                className="cursor-pointer hover:underline"
                                onClick={() => setMenuOpen(false)}
                            >
                                Projects
                            </AnchorLink>
                        </li>
                        <li>
                            <AnchorLink
                                href="#contact"
                                className="cursor-pointer hover:underline"
                                onClick={() => setMenuOpen(false)}
                            >
                                Contact Me
                            </AnchorLink>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
}
