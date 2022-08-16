import React from "react";
import PhoneImage from "../../images/Mobile_mockup_MKFY.png";
import Image from "next/image";
import howToSteps from "../../data/howToSteps";

export default function HowToSection() {
    return (
        <section className="relative h-[848px]">
            <div className="bg-login-clouds w-[637px] h-full"></div>
            <div className="absolute top-0 flex h-full w-full justify-center">
                <Image src={PhoneImage} alt="mobile app on phone" />
                <ul className="px-4 pt-32 max-w-[500px] ">
                    {howToSteps.map(({ stepNumber, title, description }) => {
                        return (
                            <li className="not-last:mb-12" key={stepNumber}>
                                <h3 className="text-gray-500 text-base font-bold ">
                                    <span className="mr-6 text-[30px]">
                                        {stepNumber}
                                    </span>
                                    {title}
                                </h3>
                                <p className="mr-6 text-gray-footer text-base">
                                    {description}
                                </p>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </section>
    );
}
