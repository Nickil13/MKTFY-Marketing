import React from "react";
import { formatDate } from "../../utils/helpers";
import Link from "next/link";

export default function BlogCard({ imageUrl, title, date, slug }) {
    return (
        <div className="relative flex h-[400px] lg:h-[618px] lg:min-w-[923px]">
            <img
                className="absolute h-full w-full object-cover"
                src={imageUrl}
                alt={title}
            />
            <div className="absolute h-full bg-[#000000]/30 w-full text-white flex flex-col justify-end px-12 pb-15">
                <h2 className="text-lg-36 font-bold mb-3 leading-title max-w-[511px] line-clamp-4">
                    <Link href={`/posts/${slug}`}>
                        <a>{title}</a>
                    </Link>
                </h2>

                <div className="flex items-center uppercase">
                    <div className="h-[1px] w-[35px] bg-gold-200 mr-5"></div>
                    <span>{date && `BLOG - ${formatDate(date)}`}</span>
                </div>
            </div>
        </div>
    );
}
