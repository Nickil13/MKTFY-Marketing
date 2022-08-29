import React from "react";
import { BlogCard } from "../Cards";
import { MdOutlineArrowDropDownCircle } from "react-icons/md";
import Link from "next/link";

export default function BlogSection({ posts }) {
    return (
        <section>
            <div className="container py-32">
                <div className="flex justify-between mb-20">
                    <h2 className="text-gray-500 font-bold text-lg">Blog</h2>
                    <Link href="/blog">
                        <a className="flex items-center text-base text-gold-200 font-bold">
                            <span className="mr-2.5">Visit Blog</span>
                            <MdOutlineArrowDropDownCircle className="-rotate-90 text-[24px]" />
                        </a>
                    </Link>
                </div>
                {/* Blog entries slider */}
                <div className="flex gap-10 flex-col lg:flex-row lg:overflow-x-auto">
                    {posts?.map((post, index) => {
                        const {
                            fields: { date, image, title },
                        } = post;
                        return (
                            <BlogCard
                                imageUrl={image.fields.file.url}
                                title={title}
                                date={date}
                                key={index}
                            />
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
