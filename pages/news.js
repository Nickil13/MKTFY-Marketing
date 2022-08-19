import { createClient } from "contentful";
import { formatDate } from "../utils/helpers";

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
            <div className="container py-28">
                <div className="grid 2xl:grid-cols-2 gap-4">
                    {posts.map((post, index) => {
                        const {
                            fields: { date, description, image, title },
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
                                    {`${description.slice(0, 150)}...`}
                                </p>
                                <button className="text-base text-gold-200 font-bold mb-28">
                                    Continue Reading &gt;
                                </button>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
