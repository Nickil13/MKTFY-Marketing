import React from "react";
import Image from "next/image";

export default function FeatureCard({ image, title, children }) {
    return (
        <div className="flex flex-col justify-center items-center max-w-[272px] text-center">
            <Image src={image} alt="accessible-image" />

            <h3 className="text-base font-bold text-gray-500 mb-2.5 mt-9">
                {title}
            </h3>
            <p className="text-gray-footer text-base font-semibold">
                {children}
            </p>
        </div>
    );
}
