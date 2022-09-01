import React from "react";

export default function ContentSection({
    imageOrientation,
    imageUrl,
    margins,
    header,
    content,
    buttonText,
}) {
    const orientation = imageOrientation === "left" && "2xl:flex-row-reverse";

    return (
        <section
            className={`relative flex flex-col 2xl:flex-row 2xl:h-[781px] ${margins}`}
        >
            <div
                className={`w-full max-w-[808px] mx-auto max-h-[500px] 2xl:max-h-[781px] overflow-hidden ${
                    imageOrientation === "left"
                        ? "2xl:ml-0 2xl:mr-auto"
                        : "2xl:mr-0 2xl:ml-auto"
                }`}
            >
                <img
                    className="w-full h-full object-cover aspect-square"
                    src={imageUrl}
                />
            </div>
            <div
                className={`container flex justify-center items-center inset-0 h-full mt-10 2xl:mt-0 2xl:absolute 2xl:justify-start ${orientation}`}
            >
                <div className="max-w-text text-center 2xl:text-start">
                    <h2 className="font-bold text-lg text-gray-500 mb-5">
                        {header}
                    </h2>
                    <p className="font-semibold text-base text-gray-500 leading-text">
                        {content}
                    </p>
                    <button className="btn-gold mt-11 max-w-btn">
                        {buttonText}
                    </button>
                </div>
            </div>
        </section>
    );
}

ContentSection.defaultProps = {
    imageOrientation: "right",
};
