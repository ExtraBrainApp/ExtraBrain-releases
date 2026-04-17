# ExtraBrain GitHub Pages Website

Static landing page for ExtraBrain Assistant hosted on GitHub Pages.

## Deployment Options

### Option 1: GitHub Actions (Current Setup)

Automatically deploys when changes are pushed to `master` branch.

**Configuration:**

- Workflow: `.github/workflows/deploy-pages.yml`
- Triggers: Pushes to `master` affecting `pages/**` files
- Manual trigger: Available via workflow_dispatch

**GitHub Settings:**

1. Go to repository **Settings → Pages**
2. Under **Build and deployment → Source**, select: **GitHub Actions**

### Option 2: Deploy from Branch

Alternative deployment method using a branch directly.

**Setup Steps:**

1. **Create deployment branch (gh-pages):**

   ```bash
   # Create orphan branch (no history)
   git checkout --orphan gh-pages

   # Remove all files except pages/ folder
   git rm -rf .
   git add pages/

   # Move pages content to root
   git mv pages/* .
   git mv pages/.nojekyll .

   # Commit
   git commit -m "Initial GitHub Pages deployment"

   # Push to remote
   git push origin gh-pages
   ```

2. **Configure GitHub Pages:**
   - Go to repository **Settings → Pages**
   - Under **Build and deployment → Source**, select: **Deploy from a branch**
   - **Branch**: `gh-pages` / `/ (root)`
   - Click **Save**

3. **Keep gh-pages updated:**
   ```bash
   # From master branch, update gh-pages
   git checkout gh-pages
   git checkout master -- pages/
   git mv pages/* .
   git commit -m "Update GitHub Pages content"
   git push origin gh-pages
   git checkout master
   ```

**Pros/Cons:**

| Method             | Pros                                                           | Cons                                                      |
| ------------------ | -------------------------------------------------------------- | --------------------------------------------------------- |
| **GitHub Actions** | ✅ Auto-deployment<br>✅ No manual sync<br>✅ Workflow control | ❌ Requires workflow permissions<br>❌ More complex setup |
| **Branch Deploy**  | ✅ Simple setup<br>✅ Direct control<br>✅ No workflow needed  | ❌ Manual sync required<br>❌ Extra branch to maintain    |

## Site Structure

```
pages/
├── index.html           # Single-page HTML with Tailwind + Alpine.js
├── assets/
│   └── images/         # Icon files (generated)
└── .nojekyll           # Disable Jekyll processing
```

## Development

**Generate web icons:**

```bash
./scripts/generate-web-icons.sh
```

**Preview locally:**

```bash
# Simple HTTP server
python3 -m http.server 8000 --directory pages
# or
npx serve pages
```

Then visit: http://localhost:8000

## Deployment URLs

- **Live Site**: https://extrabrain.app
- **Source**: https://github.com/ExtraBrainApp/ExtraBrain-releases
- **Releases**: https://github.com/ExtraBrainApp/ExtraBrain-releases

## Features

- 📄 Single-file HTML (no build process)
- 🎨 Animated gradient background
- 🎯 8 feature cards with Heroicons
- 🔄 Dynamic version from GitHub API (1-hour cache)
- 📱 Responsive mobile-first design
- 🔍 SEO optimized (meta tags, Schema.org)
- ♿ WCAG AAA accessibility
<!-- Test comment to trigger workflow -->
