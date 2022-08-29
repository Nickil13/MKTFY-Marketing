import React from "react";
import { formatDate } from "../../utils/helpers";

export default function BlogCard({ imageUrl, title, date }) {
    return (
        <div
            style={{
                backgroundImage: `url(${imageUrl})`,
            }}
            className="flex h-[400px] lg:h-[618px] bg-cover bg-center bg-no-repeat lg:min-w-[923px]"
        >
            <div className="text-white mt-auto px-12 pb-15">
                <h2 className="text-lg-36 font-bold mb-3 leading-title max-w-[511px] ">
                    {title}
                </h2>
                <span className="md:pl-16 uppercase">
                    {date && `BLOG - ${formatDate(date)}`}
                </span>
            </div>
        </div>
    );
}
