import Link from "next/link";
import { createClient } from "contentful";
import { formatDate } from "../utils/helpers";
import { MdOutlineArrowDropDownCircle } from "react-icons/md";

export async function getStaticProps() {
    const client = createClient({
        space: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    });

    const res = await client.getEntries({ content_type: "post" });

    return {
        props: {
            posts: res.items,
        },
    };
}

export default function News({ posts }) {
    return (
        <div>
            {/* Banner */}
            <div className="h-[407px] bg-news-banner bg-no-repeat bg-cover"></div>
            <div className="container py-28">
                <div className="grid 2xl:grid-cols-2 gap-4">
                    {posts?.length > 0 ? (
                        posts.map((post, index) => {
                            const {
                                fields: {
                                    date,
                                    description,
                                    image,
                                    title,
                                    slug,
                                },
                            } = post;

                            return (
                                <div className="w-[560px]" key={index}>
                                    <img
                                        src={image.fields.file.url}
                                        alt={image.fields.description}
                                    />
                                    <h1 className="text-base text-gray-600 font-bold mt-7 mb-1">
                                        {title}
                                    </h1>
                                    <span className="text-sm-17 text-gray-600 font-semibold uppercase">
                                        {`blog - ${formatDate(date)}`}
                                    </span>

                                    <p className="text-base text-gray-footer font-semibold py-7">
                                        {`${description.slice(0, 105)}...`}
                                    </p>
                                    <Link href={`/posts/${slug}`}>
                                        <a className="flex items-center text-base text-gold-200 font-bold ml-auto mb-28">
                                            <span className="mr-2.5">
                                                Continue Reading
                                            </span>
                                            <MdOutlineArrowDropDownCircle className="-rotate-90 text-[24px]" />
                                        </a>
                                    </Link>
                                </div>
                            );
                        })
                    ) : (
                        <p>No news</p>
                    )}
                </div>
            </div>
        </div>
    );
}
