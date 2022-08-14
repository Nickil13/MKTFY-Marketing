import React from "react";
import Image from "next/image";

export default function StatisticCard({ image, value, title }) {
    return (
        <div className="py-20 text-center">
            <Image src={image} />
            <h2 className="text-white font-bold text-lg">{value}</h2>
            <p className="text-white font-semibold text-base">{title}</p>
        </div>
    );
}
