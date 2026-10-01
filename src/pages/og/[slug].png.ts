import type { APIContext } from "astro";
import { formatDate, getPosts, readingTime, type Post } from "../../utils/posts";
import { renderOgImage } from "../../utils/og";

export async function getStaticPaths() {
    const posts = await getPosts();
    return posts.map((post) => ({ params: { slug: post.id }, props: { post } }));
}

export async function GET({ props }: APIContext<{ post: Post }>) {
    const { post } = props;
    const png = await renderOgImage({
        title: post.data.title,
        subtitle: `${formatDate(post.data.date)} · ${readingTime(post)} min read`,
    });
    return new Response(new Uint8Array(png), { headers: { "Content-Type": "image/png" } });
}
