import React from "react";
import Image from "next/image";
import logo from "../images/logo.svg";

export default function Navbar() {
    return (
        <nav className="h-[268px] bg-purple-500">
            {/* Container */}
            <div className="flex flex-col justify-end items-start h-full max-w-[1136px] mx-auto w-4/5 2xl:w-full py-3">
                <p className="text-sm-17 mb-auto text-white">
                    Buy and sell stuff!{" "}
                    <span className="text-gold-200">Register for MKTFY</span>
                </p>
                <Image src={logo} width={138} height={30} alt="mktfy logo" />
                <div className="flex items-end justify-between w-full">
                    <ul className="flex gap-14 text-white text-base font-semibold mt-14">
                        <li>Home</li>
                        <li>About</li>
                        <li>News</li>
                        <li>Contact</li>
                    </ul>
                    <div className="text-white text-base font-semibold mt-14">
                        <button className="mr-15 ">Register</button>
                        <button>Login</button>
                    </div>
                </div>
            </div>
        </nav>
    );
}
