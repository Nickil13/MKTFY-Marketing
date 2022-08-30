import React from "react";
import Image from "next/image";
import logo from "../../images/logo.svg";
import Navlink from "./Navlink";

export default function Navbar() {
    const stickyNav = React.useRef(null);

    React.useEffect(() => {
        window.addEventListener("scroll", handleStickyNav);

        return () => {
            window.removeEventListener("scroll", handleStickyNav);
        };
    }, []);
    const handleStickyNav = () => {
        if (stickyNav.current) {
            const offset = 170;
            if (offset <= window.scrollY) {
                stickyNav.current.style.position = "fixed";
                stickyNav.current.style.top = "0";
            } else {
                stickyNav.current.style.position = "static";
            }
        }
    };
    return (
        <nav className="relative w-full h-[182px] bg-purple-500 z-20">
            {/* Upper Navbar segment */}
            <div className="fixed top-0 bg-purple-500 w-full py-3 z-[100]">
                <p className="container top-3 text-sm-17 mb-auto text-white">
                    Buy and sell stuff!
                    <span className="text-gold-200 ml-1">
                        Register for MKTFY
                    </span>
                </p>
            </div>

            <div className="flex flex-col justify-end items-start h-full container pt-3">
                <Image src={logo} width={138} height={30} alt="mktfy logo" />
            </div>

            {/* Sticky Navbar Btns Segment */}
            <div ref={stickyNav} className="bg-purple-500 w-full pb-3">
                <div className="container flex flex-wrap items-end justify-between">
                    <ul className="flex space-x-6 lg:space-x-14 text-white text-base font-semibold mt-14">
                        <Navlink path="/">Home</Navlink>
                        <Navlink path="/about">About</Navlink>
                        <Navlink path="/blog">Blog</Navlink>
                        <Navlink path="/contact">Contact</Navlink>
                    </ul>
                    <div className="text-white text-base font-semibold mt-8 lg:mt-14">
                        <button className="mr-6 lg:mr-14">Register</button>
                        <button>Login</button>
                    </div>
                </div>
            </div>
        </nav>
    );
}
