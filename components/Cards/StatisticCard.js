import React from "react";
import Image from "next/image";

export default function StatisticCard({ image, value, title }) {
    return (
        <div className="text-center mx-5">
            <Image src={image} />
            <h2 className="text-white font-bold text-lg mt-8">{value}</h2>
            <p className="text-white font-semibold text-base">{title}</p>
        </div>
    );
}
