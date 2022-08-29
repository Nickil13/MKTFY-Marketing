import React from "react";
import Image from "next/image";
import logo from "../images/logo.svg";
import Link from "next/link";

export default function Footer() {
    return (
        <div className="w-full bg-footer bg-cover bg-no-repeat flex-shrink-0">
            <div className="container text-white pt-28 divide-y-2 pb-5">
                <div className="pb-24">
                    <Image
                        src={logo}
                        width={138}
                        height={30}
                        alt="mktfy logo"
                    />
                    <div className="grid lg:grid-flow-col-dense 2xl:grid-cols-3 gap-20 2xl:gap-40 mt-10 opacity-70">
                        <div className="max-w-footer-column">
                            <p className="font-semibold text-base text-gray-100">
                                Here at MKTFY we are human centric. We believe
                                the stuff we buy, share and give are the
                                backbone of our society — and we hope to ensure
                                that we do this in a conscious way.
                            </p>
                        </div>
                        <div className="max-w-footer-column">
                            <h2 className="mb-11 text-base font-semibold">
                                Jump To:
                            </h2>
                            <ul className="flex flex-col gap-7 text-sm-17">
                                <li>
                                    <Link href="/about">
                                        <a>About us</a>
                                    </Link>
                                </li>
                                <li>MKTFY Business</li>
                                <li>Donate with MKTFY</li>
                                <li>
                                    <Link href="/blog">
                                        <a>Blog</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="max-w-footer-column">
                            <h2 className="mb-11 text-base font-semibold">
                                Contact
                            </h2>
                            <ul className="flex flex-col gap-7 text-sm-17">
                                <li className="text-gold-200">
                                    <Link href="/contact">
                                        <a>Contact Us</a>
                                    </Link>
                                </li>
                                <li>+1 888 345 6789</li>
                                <li>
                                    Suite 9, 123 1st Street SW, Calgary, Alberta
                                    T2T 7F7
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div>
                    <p className="text-gray-footer text-sm-17 mt-7 text-center">
                        Copyright @Launchpad by Vog 2021
                    </p>
                </div>
            </div>
        </div>
    );
}
