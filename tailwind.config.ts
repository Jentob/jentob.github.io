import defaultTheme from "tailwindcss/defaultTheme";
import typography from "@tailwindcss/typography";

/** @type {import("tailwindcss").Config} */
export default {
    content: [
        "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
        "./public/scripts/**/*.js",
    ],
    theme: {
        extend: {
            colors: {
                background: "#F7F7F5",
                primary: "#171811",
                accent: "#B0DE2F",
                accent2: "#9DCB20",
            },
            fontFamily: {
                heading: ["Cabin", ...defaultTheme.fontFamily.sans],
                main: ["Inter", ...defaultTheme.fontFamily.sans],
            },
        },
    },
    plugins: [typography],
};
