# Blog

Source of my tech blog at [blog.ruialves.net](https://blog.ruialves.net). Built with [Astro](https://astro.build).

## Development

Requires Node.js 24 (LTS).

```sh
npm install
npm run dev      # local server at http://localhost:4321
npm run build    # static site in dist/
npm run preview  # serve the build locally
npm run check    # type-check the project
```

## Write a post

Add a Markdown file to `src/content/posts/`:

```md
---
slug: "my-post"
title: "My post"
date: "2026-10-01"
description: "Optional. Search results and link previews use it. Without it, the post's first lines are used."
---

Post content.
```

The post is published at `/<slug>/`. The build also makes its social preview image, RSS item and sitemap entry.

## Deploy

- Build command: `npm run build`
- Output directory: `dist/`
