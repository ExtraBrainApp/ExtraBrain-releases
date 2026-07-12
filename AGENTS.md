# ALWAYS

Before any commit or push, ensure the local git author is set correctly:
- **Name:** `ExtraBrain`
- **Email:** `developers@extrabrain.app`

Verify with:
```bash
git config user.name   # should be: ExtraBrain
git config user.email  # should be: developers@extrabrain.app
```

If not set, run:
```bash
git config user.name "ExtraBrain"
git config user.email "developers@extrabrain.app"
```

# Blog article publishing

Use this checklist when adding a new SEO blog article.

## File location and URL

- Add each post as a markdown file in `src/content/blog/`.
- Use a lowercase, hyphenated filename that matches the intended slug:
  - File: `src/content/blog/we-tested-ai-on-a-live-system-design-prompt.md`
  - URL: `/blog/we-tested-ai-on-a-live-system-design-prompt/`
- Do not add draft or temporary blog files unless `draft: true` is set.

## Required frontmatter format

Every blog post must start with YAML frontmatter:

```yaml
---
title: "Human-readable article title"
seoTitle: "Search-focused SEO title"
description: "Meta description under 180 characters."
publishDate: 2026-06-08
updatedDate: 2026-06-09
author: "ExtraBrain"
tags:
  - AI
  - System Design
  - Interview Prep
draft: false
ogImage: "/assets/screenshots/blog/example.png"
---
```

Field rules:

- `title` is shown as the page H1 by the blog article template.
- `seoTitle` is used for SEO metadata and should be concise/search-focused.
- `description` is used as the meta description and article summary; keep it under 180 characters.
- `publishDate` must use `YYYY-MM-DD` format.
- `updatedDate` is optional; use it only when materially updating an article.
- `author` should usually be `ExtraBrain`.
- `tags` should be a short list of topical tags.
- `draft: true` prevents the post from being listed or included in the sitemap.
- `ogImage` is optional; use an absolute site path beginning with `/assets/`.

## Markdown body rules

- Do not include a top-level `#` heading in the body. The page template already renders `title` as the H1.
- Use `##` for main article sections and `###` for subsections.
- Prefer short paragraphs, bullets, and numbered lists for readability.
- Use standard markdown links for internal SEO links, for example:
  - `[ExtraBrain](https://extrabrain.app)`
  - `[private AI interview copilot](https://extrabrain.app)`
- Use descriptive image alt text that explains the image context.
- Do not leave placeholders such as `SCREENSHOT NEEDED` in published posts.

## Blog images

- Store blog-specific images in `public/assets/screenshots/blog/`.
- Reference images with absolute public paths:

```markdown
![Descriptive alt text](/assets/screenshots/blog/example.png)
```

- Choose filenames that describe the image content, using lowercase words, hyphens, and existing source numbering when useful.
- If selecting from external screenshot folders, only copy assets that should be published publicly.

## Sitemap and indexing

- Non-draft posts are automatically included in `/sitemap.xml`.
- `/blog/` is also included in the sitemap.
- `lastmod` uses `updatedDate` when present, otherwise `publishDate`.
- After publishing, verify that the generated sitemap contains the new blog URL.

## Validation before PR

Run these commands before committing blog changes:

```bash
unset LD_LIBRARY_PATH && npm run check
unset LD_LIBRARY_PATH && npm run build
```

For sitemap verification after build:

```bash
grep -n "blog" dist/sitemap.xml dist/sitemap-index.xml 2>/dev/null || true
```

## PR checklist

- Confirm the post renders at `/blog/{slug}/`.
- Confirm `/blog/` lists the post when `draft: false`.
- Confirm the post appears in `dist/sitemap.xml` after build.
- Confirm all image paths resolve under `public/assets/`.
- Confirm there are no duplicate H1s in the markdown body.
- Commit with git author `ExtraBrain <developers@extrabrain.app>`.

# Devbox: sync changes and open PRs

The devbox is a Lima VM (`limactl shell devbox`) with the host `~/repos` mounted writable at `/home/<user>.linux/repos`.
The working clone is `~/work/ExtraBrain-releases`, with `origin` on GitHub and a local `no-mistakes` mirror.

Full runbook: **`docs/devbox-sync-and-pr.md`** (also mirrored as a Claude skill at `.claude/skills/devbox-sync-pr/SKILL.md`).

Essentials:
- Copy changed source files from the mount (`/home/<user>.linux/repos/ExtraBrain-releases`) into `~/work/ExtraBrain-releases`; skip gitignored `dist/`.
- First confirm the target clone is clean (`git -C <clone> status --porcelain`), then verify copies with `diff -q` / `diff -rq`.
- Build in the VM with nvm loaded and `unset LD_LIBRARY_PATH && npm run build` (and `npm run check`); Node is not on the default PATH.
- Commit as `ExtraBrain <developers@extrabrain.app>` with no agent co-author, branch off `master`, push to `origin` (never `no-mistakes`), then `gh pr create --base master`.
