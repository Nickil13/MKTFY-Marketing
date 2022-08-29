import { createClient } from "contentful";
import { formatDate } from "../../utils/helpers";
import Link from "next/link";
import { MdArrowBack, MdOutlineArrowDropDownCircle } from "react-icons/md";

export async function getStaticPaths() {
    const client = createClient({
        space: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    });

    const res = await client.getEntries({ content_type: "post" });

    const paths = res.items.map((item) => {
        return {
            params: {
                slug: item.fields.slug,
            },
        };
    });
    return {
        paths,
        fallback: true,
    };
}

export async function getStaticProps({ params }) {
    const client = createClient({
        space: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    });

    const { items } = await client.getEntries({
        content_type: "post",
        "fields.slug": params.slug,
    });

    /* If the item is not found, redirect back to blog */
    if (!items.length) {
        return {
            redirect: {
                destination: "/blog",
                permanent: false,
            },
        };
    }

    const post = items[0];

    /* Call again to get the slug for the next blog post. We can use it to link to the next post. */
    const nextRes = await client.getEntries({
        content_type: "post",
        order: "-sys.createdAt",
        "sys.createdAt[lt]": post.sys.createdAt,
        limit: 1,
    });

    return {
        props: {
            post,
            nextSlug:
                nextRes.items.length > 0 ? nextRes.items[0].fields.slug : "",
        },
        revalidate: 1,
    };
}

export default function Post({ post, nextSlug }) {
    if (!post) return <div>Loading...</div>;
    const {
        fields: { date, description, image, title },
    } = post;
    const paragraphs =
        description?.split("\n").filter((item) => item !== "") || [];

    return (
        <div>
            <div className="container pt-9 pb-[120px]">
                <Link href="/blog">
                    <a>
                        <MdArrowBack className="text-gold-200 text-lg" />
                    </a>
                </Link>

                <div className="flex flex-col mt-7">
                    <span className="text-sm-17 text-gray-600 font-semibold uppercase">
                        {`blog - ${formatDate(date)}`}
                    </span>
                    <h1 className="text-lg text-gray-600 font-bold mt-1.5 mb-7">
                        {title}
                    </h1>
                    <img
                        className="w-full"
                        src={image.fields.file.url}
                        alt={image.fields.description}
                    />
                    <div className="text-base text-gray-footer font-semibold mt-[120px] mb-15">
                        {paragraphs.map((text, index) => {
                            return (
                                <p className="mb-7 last:mb-0" key={index}>
                                    {text}
                                </p>
                            );
                        })}
                    </div>
                    {nextSlug && (
                        <Link href={`/posts/${nextSlug}`}>
                            <a className="flex items-center text-base text-gold-200 font-bold ml-auto">
                                <span className="mr-2.5">Next Post</span>
                                <MdOutlineArrowDropDownCircle className="-rotate-90 text-[24px]" />
                            </a>
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
}
