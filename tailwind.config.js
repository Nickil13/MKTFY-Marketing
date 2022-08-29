const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./pages/**/*.js", "./components/**/*.js"],
    theme: {
        screens: {
            sm: "375px",
            md: "600px",
            lg: "800px",
            xlg: "1200px",
            "2xl": "1440px",
            "3xl": "1700px",
        },
        colors: {
            green: "#6CC04B",
            red: "#FF2128",
            white: "#FFFFFF",
            gray: {
                100: "#E2E2E2",
                200: "#4D4D4D60",
                300: "#0000007E",
                400: "#6B6B6C",
                500: "#4D4D4D",
                600: "#434344",
                700: "#2A2E43",
                "cloud-gray": "#F4F4F5",
                footer: "#888889",
                "footer-border": "#707070",
            },
            purple: {
                50: "#A54BC033",
                100: "#9349DE",
                200: "#8840D9",
                400: "#6E20BE",
                500: "#6318AF",
                600: "#560F9F",
            },
            gold: { 100: "#ffc832", 200: "#FFBA00" },
            black: "#262627",
            beige: { 100: "#FFFFFF99", 200: "#F7F7F7" },
            transparent: "transparent",
        },
        fontSize: {
            "2xs": "var(--2xs)",
            xs: "var(--xs)",
            "sm-16": "var(--sm-16)",
            "sm-17": "var(--sm-17)",
            base: "var(--base)",
            "base-lg": "var(--base-lg)",
            "lg-36": "var(--lg-36)",
            lg: "var(--lg)",
            inherit: "inherit",
        },

        extend: {
            backgroundImage: {
                hero: "url(../images/Homepage_image.png)",
                "login-clouds": "url(../images/Bg_image_purple_clouds.svg)",
                "quality-banner": "url(../images/banner_devices.png)",
                "handshake-banner": "url(../images/banner_handshake.png)",
                footer: "url(../images/Footer_banner_bg.svg)",
                "about-banner": "url(../images/Image_about_us_header.png)",
                "blog-banner": "url(../images/banner_image_news_blog.png)",
                "contact-banner": "url(../images/banner_image_contact_us.png)",
            },
            width: {
                btn: "345px",
                "footer-column": "270px",
            },
            height: {
                nav: "268px",
                "mobile-nav": "290px",
                section: "480px",
                "charity-list": "85px",
            },
            margin: {
                15: "60px",
            },
            padding: {
                15: "60px",
                nav: "268px",
                "mobile-nav": "290px",
            },
            minHeight: {
                "listing-card": "312px",
            },
            maxWidth: {
                text: "417px",
                btn: "345px",
                desktop: "1136px",
                input: "560px",
                "footer-column": "270px",
            },
            borderRadius: {
                10: "10px",
            },
            boxShadow: {
                btn: "0px 5px 20px #00000024",
                form: "0px 7px 12px #00000024",
            },
            lineHeight: {
                title: "50px",
                text: "30px",
            },
        },
    },
    plugins: [
        plugin(function ({ addVariant }) {
            addVariant("not-last", ["&:not(:last-child)"]);
        }),
    ],
};
