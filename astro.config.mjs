import { readdirSync, readFileSync } from "node:fs";
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

const POSTS_DIR = new URL("./src/content/posts/", import.meta.url);

// Map each post URL to its date, for the sitemap's lastmod
const postDates = new Map(
    readdirSync(POSTS_DIR)
        .filter((file) => file.endsWith(".md"))
        .map((file) => {
            const source = readFileSync(new URL(file, POSTS_DIR), "utf8");
            const slug = source.match(/^slug:\s*"?([^"\n]+)"?/m)?.[1];
            const date = source.match(/^date:\s*"?([^"\n]+)"?/m)?.[1];
            return [`/${slug}/`, new Date(date)];
        }),
);
const latestPostDate = new Date(Math.max(...postDates.values()));

export default defineConfig({
    site: "https://blog.ruialves.net",
    trailingSlash: "ignore",
    integrations: [
        sitemap({
            serialize(item) {
                const path = new URL(item.url).pathname;
                item.lastmod = path === "/" ? latestPostDate : postDates.get(path);
                return item;
            },
        }),
    ],
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
