import React from "react";
import GoodWillLogo from "../images/logo_goodwill.png";
import SalvationArmyLogo from "../images/logo_salvation_army.png";
import WinsLogo from "../images/logo_wins.png";
import UnicefLogo from "../images/logo_unicef.png";
import AdidasLogo from "../images/logo_adidas.png";
import DressLogo from "../images/logo_dress_for_success.png";

import Image from "next/image";

export default function About() {
    return (
        <div>
            <div className="h-banner bg-about-banner-sm lg:bg-about-banner bg-no-repeat bg-cover"></div>
            <div className="container pt-[105px]">
                <h1 className="text-gray-600 text-center max-w-[950px] mx-auto font-bold text-lg leading-title mb-20">
                    MKTFY is a human centric digital marketplace moving more
                    than just stuff — Moving charity.
                </h1>
                <div className="2xl:columns-2 gap-x-[138px] text-gray-footer text-base font-semibold leading-text 2xl:max-h-[437px] mb-[120px]">
                    <p className="mb-8">
                        Here at MKTFY we are a human centric. We believe the
                        stuff we buy, share and give are ways we can make the
                        world a better place — and we hope to ensure that we do
                        this in a conscious way.
                    </p>
                    <p className="mb-8">
                        The online marketplace of MKTFY enables our users to
                        sell and buy stuff but also work with us to help others.
                        We focus on ensuring a safety, social proof and
                        transparency at all levels of our company. Your
                        purchases, listings and donations are all quality
                        assured to ensure our MKTFY community has a high quality
                        of trust.
                    </p>
                    <p className="mb-8">
                        Lastly, MKTFY is more than a marketplace to find cool
                        stuff but a place to share stuff with others who may be
                        in need. For items that you own that are gently used,
                        forgotten or out grown we have partnered with various
                        not-for-profit and charity organizations that will
                        gladly take and distribute your awesome stuff!{" "}
                    </p>
                    <p className="mb-8">
                        If you, your company or someone you love can benefit
                        from our charitable services please contact us and we
                        will be more than happy to help!
                    </p>
                    <p className="mb-8">
                        Thank you! From the entire team at MKTFY
                    </p>
                </div>
                {/* Charities */}
                <div className="flex flex-col 2xl:flex-row items-center mb-[120px]">
                    <h2 className="text-gray-600 font-bold text-lg 2xl:mr-15 flex-shrink-0 mb-15 2xl:mb-0">
                        Our Partners
                    </h2>
                    <ul className="flex flex-row flex-grow flex-wrap 2xl:flex-nowrap items-center justify-center 2xl:justify-start space-y-[60px] 2xl:space-y-0 2xl:space-x-[60px] overflow-auto 2xl:h-charity-list hide-scrollbar">
                        <li className="relative h-charity-list 2xl:h-full min-w-[330px] mx-2">
                            <Image
                                src={GoodWillLogo.src}
                                alt="Goodwill logo"
                                layout="fill"
                            />
                        </li>
                        <li className="relative h-charity-list 2xl:h-full min-w-[196px] mx-2">
                            <Image
                                src={SalvationArmyLogo.src}
                                alt="Salvation Army logo"
                                layout="fill"
                            />
                        </li>
                        <li className="relative h-charity-list 2xl:h-full min-w-[220px] mx-2">
                            <Image
                                src={WinsLogo.src}
                                alt="Wins logo"
                                layout="fill"
                            />
                        </li>
                        <li className="relative h-charity-list 2xl:h-full min-w-[330px] mx-2">
                            <Image
                                src={UnicefLogo.src}
                                alt="Unicef logo"
                                layout="fill"
                            />
                        </li>
                        <li className="relative h-charity-list 2xl:h-full min-w-[150px] mx-2">
                            <Image
                                src={AdidasLogo.src}
                                alt="Adidas logo"
                                layout="fill"
                            />
                        </li>
                        <li className="relative h-charity-list 2xl:h-full min-w-[220px] mx-2">
                            <Image
                                src={DressLogo.src}
                                alt="Dress for success logo"
                                layout="fill"
                            />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
