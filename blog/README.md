# Sig.Network blog

Static blog generated into `public/blog/` and deployed with the landing page.

## Writing a post

Add a markdown file to `blog/posts/`, named `YYYY-MM-DD-slug.md` (the filename
becomes the URL: `sig.network/blog/YYYY-MM-DD-slug.html`). Required frontmatter:

```markdown
---
title: Post title
date: 2026-08-07
description: One sentence shown in the index and RSS feed.
---

Body in markdown.
```

## Building

`npm run build` (and `npm run dev`) regenerate the blog automatically via
`scripts/build-blog.mjs`. Output lands in `public/blog/` (gitignored), which
Vite copies into `dist/blog/`, so the existing GCS deploy workflow ships it
with no extra configuration.

Pages link to explicit `.html` paths because the GCS bucket is not known to
serve directory indexes. If the bucket (or a CDN in front) gets
`MainPageSuffix: index.html`, links can be switched to pretty URLs in
`scripts/build-blog.mjs`.
