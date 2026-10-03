import { getCollection, type CollectionEntry } from "astro:content";

export type Post = CollectionEntry<"posts">;

const WORDS_PER_MINUTE = 220;

const dateFormat = new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
});

export async function getPosts(): Promise<Post[]> {
    const posts = await getCollection("posts");
    return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export function postUrl(post: Post): string {
    return `/${post.id}/`;
}

export function formatDate(date: Date): string {
    return dateFormat.format(date);
}

export function isoDate(date: Date): string {
    return date.toISOString().slice(0, 10);
}

function plainText(markdown: string): string {
    return markdown
        .replace(/```[\s\S]*?```/g, " ")
        .replace(/`([^`]*)`/g, "$1")
        .replace(/!\[[^\]]*\]\([^)]*\)/g, " ")
        .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1")
        .replace(/^#+\s.*$/gm, "")
        .replace(/^\s*([-*_])\1{2,}\s*$/gm, "")
        .replace(/^\s*([-*+]|\d+\.)\s+/gm, "")
        .replace(/[*_~>]/g, "")
        .replace(/\s+/g, " ")
        .trim();
}

export function readingTime(post: Post): number {
    const words = plainText(post.body ?? "").split(" ").filter(Boolean).length;
    return Math.max(1, Math.round(words / WORDS_PER_MINUTE));
}

export function excerpt(post: Post, maxLength = 160): string {
    if (post.data.description) {
        return post.data.description;
    }
    const text = plainText(post.body ?? "");
    if (text.length <= maxLength) {
        return text;
    }
    let sentences = "";
    for (const sentence of text.split(/(?<=[.!?])\s+(?=[A-Z0-9"“(])/)) {
        const next = sentences ? `${sentences} ${sentence}` : sentence;
        if (next.length > maxLength) {
            break;
        }
        sentences = next;
    }
    if (sentences.length >= 55) {
        return sentences;
    }
    const cut = text.slice(0, maxLength);
    return cut.slice(0, cut.lastIndexOf(" ")).replace(/[\s,.;:!?-]+$/, "") + "…";
}
