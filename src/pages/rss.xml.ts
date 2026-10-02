import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import { SITE_DESCRIPTION, SITE_NAME } from "../consts";
import { excerpt, getPosts, postUrl } from "../utils/posts";

export async function GET(context: APIContext) {
    const posts = await getPosts();
    return rss({
        title: SITE_NAME,
        description: SITE_DESCRIPTION,
        site: context.site!,
        items: posts.map((post) => ({
            title: post.data.title,
            pubDate: post.data.date,
            description: excerpt(post),
            content: post.rendered?.html,
            link: postUrl(post),
        })),
        xmlns: { atom: "http://www.w3.org/2005/Atom" },
        customData: `<language>en</language><atom:link href="${new URL("rss.xml", context.site)}" rel="self" type="application/rss+xml"/>`,
    });
}
