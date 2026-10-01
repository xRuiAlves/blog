import { renderOgImage } from "../utils/og";

export async function GET() {
    const png = await renderOgImage({
        title: "Tech-related stuff I found interesting",
        subtitle: "Articles by Rui Alves",
    });
    return new Response(new Uint8Array(png), { headers: { "Content-Type": "image/png" } });
}
