import React from "react";

export default function Footer() {
  return (
    <footer className="font-['Ubuntu_Sans_Mono'] bg-[#0C0C16] text-white flex flex-col gap-6 pt-6 pb-8">
      <div className="flex justify-center">
        <hr className="border-white w-3/4 border-t-2" />
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center px-10 text-sm gap-4 md:gap-0">
        <p className="text-center md:text-left">© 2025 Alexis Penn. All rights reserved.</p>

        <div className="flex gap-6 text-center md:text-right">
          <a href="#" className="hover:underline hover:text-purple-400">Terms of Service</a>
          <a href="#" className="hover:underline hover:text-purple-400">Privacy Policy</a>
          <a href="#contact" className="hover:underline hover:text-purple-400">Connect with Me</a>
        </div>
      </div>
    </footer>
  );
}
