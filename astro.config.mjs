import { defineConfig } from "astro/config";

export default defineConfig({
    site: "https://blog.ruialves.net",
    trailingSlash: "ignore",
    markdown: {
        shikiConfig: {
            themes: {
                light: "github-light",
                dark: "github-dark",
            },
            defaultColor: false,
        },
    },
});
