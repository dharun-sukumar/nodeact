import React from "react";
import logo from "../assets/logo.png";

function Footer() {
    return (
        <div className="h-[100vh] relative bg-[#FFC11F] px-8 pt-16">
            <div className="flex h-full items-end justify-between">
                <div className=" h-full">
                    <div className="flex flex-col h-[90%] justify-between">
                        <p className="z-50 text-black 2xl:text-9xl xl:text-7xl">Nodeact</p>
                        <div className="flex items-center">
                            <p className="text-black 2xl:text-8xl xl:text-6xl">Let's Talk </p>
                            <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M54.4726 31.7842H7.99976" stroke="black" stroke-width="5" />
                                <path d="M31.8477 54.3993L54.4777 31.7684L32.3095 9.59937" stroke="black" stroke-width="5" />
                            </svg>
                        </div>
                    </div>
                    <div className="absolute bottom-0 w-full max-w-[calc(100%-4rem)] left-4">
                        <hr className=" border-black" />
                        <div className="flex w-full px-8 justify-between items-center">
                            <p className=" py-4 text-black text-xl">Nodeact @ 2025</p>
                            <p className=" py-4 text-black text-xl">All Rights Reserved</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-end 2xl:mb-32 xl:mb-20">
                    <img src={logo} alt="" className="2xl:h-auto xl:h-52" />
                </div>
            </div>
        </div>
    );
}

export default Footer;