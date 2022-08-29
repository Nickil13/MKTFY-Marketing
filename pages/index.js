import Head from "next/head";
import { sections } from "../data/sections";
import {
    BlogSection,
    ContentSection,
    Hero,
    HowToSection,
    FeaturesBanner,
    StatisticsBanner,
} from "../components/Home";
import playIcon from "../images/Web_arrow.svg";
import Image from "next/image";

export default function Home() {
    return (
        <div>
            <Head>
                <title>MKTFY Marketing Website</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Hero />
            <FeaturesBanner />

            {/* Quality Banner */}
            <section className="bg-quality-banner h-[482px]">
                <div className="container h-full flex items-center">
                    <div className="flex flex-col">
                        <h2 className="font-bold text-lg text-white mb-5 max-w-[688px]">
                            MKTFY assures the quality of your purchase
                        </h2>
                        <p className="text-white font-semibold text-base max-w-text leading-text">
                            MKTFY wants to make sure that the stuff you buy is
                            in working order or your money back. Find out more
                            about our protection policy.
                        </p>
                    </div>
                    <Image src={playIcon} w={64} h={64} alt="play icon" />
                </div>
            </section>

            <HowToSection />

            {/* Businesses section */}
            <ContentSection
                imageOrientation="right"
                margins="mt-[120px] mb-[100px]"
                {...sections[0]}
            />

            {/* Donate section */}
            <ContentSection
                imageOrientation="left"
                margins="mt-[120px] mb-[240px]"
                {...sections[1]}
            />
            <StatisticsBanner />
            <BlogSection />
        </div>
    );
}
