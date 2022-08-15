import React from "react";

export default function BlogCard({ imageUrl, title, date }) {
    return (
        <div
            style={{
                backgroundImage: `url(${imageUrl})`,
            }}
            className="flex h-[618px] bg-cover bg-center bg-no-repeat min-w-[923px]"
        >
            <div className="text-white mt-auto px-12 pb-15">
                <h2 className="text-lg font-bold mb-3 leading-title max-w-[511px] ">
                    {title}
                </h2>
                <span className="pl-16">{date}</span>
            </div>
        </div>
    );
}
