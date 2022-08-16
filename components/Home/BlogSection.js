import React from "react";
import bg from "../../images/image_blog_carousel1.png";
import bg2 from "../../images/image_carousel_blog2.png";
import { BlogCard } from "../Cards";

export default function BlogSection() {
    return (
        <section>
            <div className="container py-32">
                <div className="flex justify-between mb-20">
                    <h2 className="text-gray-500 font-bold text-lg">Blog</h2>
                    <button className="text-gold-200 text-base font-bold">
                        Visit Blog &gt;
                    </button>
                </div>
                {/* Blog entries slider */}
                <div className="flex gap-10 overflow-x-auto">
                    <BlogCard
                        imageUrl={bg.src}
                        title="Finding the right standing desk on MKTFY"
                        date="BLOG - NOVEMBER 22, 2022"
                    />
                    <BlogCard
                        imageUrl={bg2.src}
                        title="Make memories with MKTFY Event Stuff"
                        date="BLOG - NOVEMBER 12, 2022"
                    />
                </div>
            </div>
        </section>
    );
}
