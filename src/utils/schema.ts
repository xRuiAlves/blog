import { AUTHOR, SITE_DESCRIPTION, SITE_NAME } from "../consts";
import { excerpt, isoDate, postUrl, type Post } from "./posts";

type JsonLd = Record<string, unknown>;

const person: JsonLd = {
    "@type": "Person",
    name: AUTHOR.name,
    url: AUTHOR.url,
    jobTitle: AUTHOR.jobTitle,
    sameAs: AUTHOR.sameAs,
};

export function blogSchema(site: URL, posts: Post[]): JsonLd {
    return {
        "@context": "https://schema.org",
        "@type": "Blog",
        name: SITE_NAME,
        description: SITE_DESCRIPTION,
        url: site.href,
        inLanguage: "en",
        author: person,
        blogPost: posts.map((post) => ({
            "@type": "BlogPosting",
            headline: post.data.title,
            url: new URL(postUrl(post), site).href,
            datePublished: isoDate(post.data.date),
        })),
    };
}

export function postSchema(site: URL, post: Post): JsonLd[] {
    const url = new URL(postUrl(post), site).href;
    return [
        {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.data.title,
            description: excerpt(post),
            url,
            mainEntityOfPage: url,
            image: new URL(`/og/${post.id}.png`, site).href,
            datePublished: isoDate(post.data.date),
            dateModified: isoDate(post.data.date),
            inLanguage: "en",
            author: person,
            publisher: person,
            isPartOf: { "@type": "Blog", name: SITE_NAME, url: site.href },
        },
        {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Posts", item: site.href },
                { "@type": "ListItem", position: 2, name: post.data.title, item: url },
            ],
        },
    ];
}
