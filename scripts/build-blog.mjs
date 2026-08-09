// Generates the static blog: blog/posts/*.md -> public/blog/*.html (+ feed.xml).
// Runs before `vite build`, so the output ships inside dist/ and deploys with
// the existing GCS workflow. No client-side JS is emitted.
import { marked } from 'marked'
import { mkdirSync, readFileSync, readdirSync, rmSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const postsDir = join(root, 'blog', 'posts')
const outDir = join(root, 'public', 'blog')
const siteUrl = 'https://sig.network'

const escapeHtml = (s) =>
  s
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')

const parseFrontmatter = (raw, file) => {
  const match = raw.match(/^---\n([\s\S]+?)\n---\n?/)
  if (!match) throw new Error(`${file}: missing frontmatter block`)
  const meta = {}
  for (const line of match[1].split('\n')) {
    const idx = line.indexOf(':')
    if (idx === -1) continue
    meta[line.slice(0, idx).trim()] = line.slice(idx + 1).trim()
  }
  for (const key of ['title', 'date', 'description']) {
    if (!meta[key]) throw new Error(`${file}: frontmatter is missing "${key}"`)
  }
  if (!/^\d{4}-\d{2}-\d{2}$/.test(meta.date)) {
    throw new Error(`${file}: date must be YYYY-MM-DD, got "${meta.date}"`)
  }
  return { meta, body: raw.slice(match[0].length) }
}

const displayDate = (iso) => {
  const [y, m, d] = iso.split('-').map(Number)
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December',
  ]
  return `${months[m - 1]} ${d}, ${y}`
}

const styles = `
  :root {
    --clam-shell-50: #f5f0ee;
    --clam-shell-500: #cbb7ad;
    --dark-neutral-300: #8e7777;
    --dark-neutral-400: #786767;
    --dark-neutral-500: #625757;
    --dark-neutral-600: #4c4646;
    --dark-neutral-950: #111111;
    --brand-950: #eaeec9;
    --font-sans: 'Archivo', 'Segoe UI', system-ui, -apple-system, sans-serif;
    --font-mono: 'IBM Plex Mono', 'SFMono-Regular', ui-monospace, monospace;
  }
  @font-face {
    font-family: 'Archivo';
    font-style: normal;
    font-weight: 100 900;
    font-display: swap;
    src: url('/fonts/archivo-variable.woff2') format('woff2');
  }
  @font-face {
    font-family: 'IBM Plex Mono';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url('/fonts/ibm-plex-mono-400.woff2') format('woff2');
  }
  @font-face {
    font-family: 'IBM Plex Mono';
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: url('/fonts/ibm-plex-mono-600.woff2') format('woff2');
  }
  * { box-sizing: border-box; }
  body {
    margin: 0;
    background: var(--clam-shell-50);
    color: var(--dark-neutral-600);
    font-family: var(--font-sans);
    font-size: 17px;
    line-height: 1.65;
    -webkit-font-smoothing: antialiased;
  }
  .banner {
    display: flex;
    justify-content: space-between;
    gap: 16px;
    padding: 7px 20px;
    background: var(--dark-neutral-950);
    color: #fff;
    font-family: var(--font-mono);
    font-size: 12px;
    letter-spacing: 1.2px;
    text-transform: uppercase;
  }
  .banner a { color: var(--brand-950); text-decoration: none; white-space: nowrap; }
  .banner a:hover { text-decoration: underline; }
  header.site {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    padding: 20px;
    border-bottom: 1px solid var(--clam-shell-500);
  }
  header.site svg { display: block; color: var(--dark-neutral-300); }
  header.site nav {
    display: flex;
    gap: 24px;
    font-family: var(--font-mono);
    font-size: 14px;
    font-weight: 500;
  }
  header.site nav a { color: var(--dark-neutral-500); text-decoration: none; }
  header.site nav a:hover { text-decoration: underline; }
  main { max-width: 720px; margin: 0 auto; padding: 40px 20px 80px; }
  .kicker {
    font-family: var(--font-mono);
    font-size: 13px;
    letter-spacing: 1.2px;
    text-transform: uppercase;
    color: var(--dark-neutral-400);
  }
  h1.page {
    margin: 8px 0 0;
    font-size: clamp(42px, 8vw, 72px);
    line-height: 1.02;
    letter-spacing: -0.02em;
    color: var(--dark-neutral-300);
  }
  article h1 {
    margin: 8px 0 24px;
    font-size: clamp(34px, 6vw, 54px);
    line-height: 1.08;
    letter-spacing: -0.02em;
    color: var(--dark-neutral-600);
  }
  article h2, article h3 { color: var(--dark-neutral-600); line-height: 1.25; margin-top: 2em; }
  article a { color: var(--dark-neutral-400); text-underline-offset: 3px; }
  article code {
    font-family: var(--font-mono);
    font-size: 0.88em;
    background: #ece4e0;
    padding: 1px 5px;
    border-radius: 2px;
  }
  article pre {
    background: var(--dark-neutral-950);
    color: #d5c4bb;
    padding: 20px;
    overflow-x: auto;
    border-radius: 2px;
    font-size: 14px;
    line-height: 1.6;
  }
  article pre code { background: none; padding: 0; color: inherit; }
  article blockquote {
    margin: 1.5em 0;
    padding: 2px 0 2px 20px;
    border-left: 2px solid var(--clam-shell-500);
    color: var(--dark-neutral-500);
  }
  article img { max-width: 100%; }
  .post-list { list-style: none; margin: 40px 0 0; padding: 0; }
  .post-list li { border-bottom: 1px solid var(--clam-shell-500); }
  .post-list li:first-child { border-top: 1px solid var(--clam-shell-500); }
  .post-list a {
    display: block;
    padding: 24px 0 28px;
    color: inherit;
    text-decoration: none;
  }
  .post-list .date {
    font-family: var(--font-mono);
    font-size: 13px;
    color: var(--dark-neutral-400);
  }
  .post-list .title {
    margin: 6px 0 4px;
    font-size: 26px;
    font-weight: 600;
    letter-spacing: -0.01em;
    color: var(--dark-neutral-600);
  }
  .post-list a:hover .title { text-decoration: underline; text-underline-offset: 4px; }
  .post-list .desc { margin: 0; font-family: var(--font-mono); font-size: 14px; color: var(--dark-neutral-500); }
  .what-is {
    margin-top: 64px;
    border: 1px solid var(--clam-shell-500);
    background: var(--brand-950);
    padding: 24px;
    border-radius: 2px;
  }
  .what-is h2 { margin: 0 0 8px; font-size: 20px; }
  .what-is p { margin: 0 0 16px; font-family: var(--font-mono); font-size: 14px; color: var(--dark-neutral-500); }
  .what-is a {
    display: inline-block;
    border: 1px solid var(--dark-neutral-400);
    border-radius: 2px;
    padding: 10px 18px;
    font-weight: 600;
    font-size: 15px;
    color: var(--dark-neutral-600);
    text-decoration: none;
    background: var(--clam-shell-50);
  }
  .what-is a:hover { background: #fff; }
  footer.site {
    border-top: 1px solid var(--clam-shell-500);
    padding: 24px 20px;
    display: flex;
    justify-content: space-between;
    gap: 16px;
    flex-wrap: wrap;
    font-family: var(--font-mono);
    font-size: 13px;
    color: var(--dark-neutral-500);
  }
  footer.site a { color: inherit; }
  @media (max-width: 560px) {
    .banner { justify-content: flex-end; }
    .banner > span { display: none; }
    header.site { padding: 14px 16px; row-gap: 10px; }
    header.site svg { width: 153px; height: 26px; }
    header.site nav { gap: 18px; font-size: 13px; }
    main { padding: 28px 16px 56px; }
    body { font-size: 16px; }
    .post-list .title { font-size: 22px; }
    article pre { padding: 14px 16px; margin: 1.2em -16px; border-radius: 0; }
    .what-is { padding: 18px 16px; }
  }
`

// The logo is lifted from src/components/Logo.tsx at build time so the blog
// always matches the landing page. The JSX in that file is plain enough that
// two attribute renames turn it into valid HTML.
const logoSvg = readFileSync(join(root, 'src', 'components', 'Logo.tsx'), 'utf8')
  .match(/<svg[\s\S]*<\/svg>/)[0]
  .replace(/\s*className=\{className\}/, '')
  .replaceAll('clipPath=', 'clip-path=')

const header = `
  <div class="banner">
    <span>&#9679;&nbsp;Sig.Network blog</span>
    <a href="/">What is Sig.Network? &#8599;</a>
  </div>
  <header class="site">
    <a href="/" aria-label="Sig.Network home">${logoSvg}</a>
    <nav>
      <a href="/blog/index.html">Blog</a>
      <a href="https://docs.sig.network/">Docs</a>
      <a href="https://x.com/Sig_Network">Twitter</a>
    </nav>
  </header>`

const whatIs = `
  <aside class="what-is">
    <h2>What is Sig.Network?</h2>
    <p>Your contracts control assets and reach markets on every chain. Deploy on the chain you already use, keep your tooling, and gain cross-chain reach with one function call.</p>
    <a href="/">See how it works &#8599;</a>
  </aside>`

const footer = `
  <footer class="site">
    <span>&copy; 2026 Sig.Network</span>
    <span>
      <a href="/blog/feed.xml">RSS</a> &middot;
      <a href="https://docs.sig.network/">Docs</a> &middot;
      <a href="mailto:pitches@sig.network">Contact</a>
    </span>
  </footer>`

const page = ({ title, description, canonical, body }) => `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${escapeHtml(title)}</title>
    <meta name="description" content="${escapeHtml(description)}" />
    <link rel="canonical" href="${canonical}" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <link rel="alternate" type="application/rss+xml" title="Sig.Network blog" href="/blog/feed.xml" />
    <style>${styles}</style>
  </head>
  <body>
    ${header}
    <main>${body}</main>
    ${footer}
  </body>
</html>
`

const posts = readdirSync(postsDir)
  .filter((f) => f.endsWith('.md'))
  .map((file) => {
    const raw = readFileSync(join(postsDir, file), 'utf8')
    const { meta, body } = parseFrontmatter(raw, file)
    return {
      slug: file.replace(/\.md$/, ''),
      ...meta,
      html: marked.parse(body),
    }
  })
  .sort((a, b) => b.date.localeCompare(a.date))

rmSync(outDir, { recursive: true, force: true })
mkdirSync(outDir, { recursive: true })

for (const post of posts) {
  writeFileSync(
    join(outDir, `${post.slug}.html`),
    page({
      title: `${post.title} - Sig.Network`,
      description: post.description,
      canonical: `${siteUrl}/blog/${post.slug}.html`,
      body: `
        <article>
          <p class="kicker">${displayDate(post.date)}</p>
          <h1>${escapeHtml(post.title)}</h1>
          ${post.html}
        </article>
        ${whatIs}`,
    }),
  )
}

writeFileSync(
  join(outDir, 'index.html'),
  page({
    title: 'Blog - Sig.Network',
    description: 'Engineering notes and release announcements from Sig.Network.',
    canonical: `${siteUrl}/blog/index.html`,
    body: `
      <p class="kicker">Sig.Network</p>
      <h1 class="page">Blog</h1>
      <ul class="post-list">
        ${posts
          .map(
            (post) => `
        <li>
          <a href="/blog/${post.slug}.html">
            <span class="date">${displayDate(post.date)}</span>
            <p class="title">${escapeHtml(post.title)}</p>
            <p class="desc">${escapeHtml(post.description)}</p>
          </a>
        </li>`,
          )
          .join('')}
      </ul>`,
  }),
)

writeFileSync(
  join(outDir, 'feed.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>Sig.Network blog</title>
    <link>${siteUrl}/blog/index.html</link>
    <description>Engineering notes and release announcements from Sig.Network.</description>
    <language>en</language>
    ${posts
      .map(
        (post) => `<item>
      <title>${escapeHtml(post.title)}</title>
      <link>${siteUrl}/blog/${post.slug}.html</link>
      <guid>${siteUrl}/blog/${post.slug}.html</guid>
      <pubDate>${new Date(`${post.date}T12:00:00Z`).toUTCString()}</pubDate>
      <description>${escapeHtml(post.description)}</description>
    </item>`,
      )
      .join('\n    ')}
  </channel>
</rss>
`,
)

console.log(`blog: built ${posts.length} post(s) -> public/blog/`)
