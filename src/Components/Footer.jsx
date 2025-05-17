import React from "react"


export default function Footer(){
    return(
        <div className="font-['Ubuntu_Sans_Mono'] bg-[#0C0C16] text-white flex flex-col gap-7 pb-7">
            <div className="flex justify-center ">
                <hr className="border-white mb-4 w-3/4 mx-auto border-t-2"/>
            </div>
            <div className="flex justify-between">
                <p className="flex pl-10">© 2025 Alexis Penn. All rights</p>
                <div className="flex gap-10 pr-10">
                    <p>Terms of Services</p>
                    <p>Privacy Policy</p>
                    <p>Connect with Me</p>
                </div>
            </div>
        </div>
    )
}