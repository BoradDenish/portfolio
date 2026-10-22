# Static Portfolio Deployment Guide

> This portfolio is a high-performance static website with `index.html`, `css/style.css`, and `js/main.js`. No build step or bundling is required.

---

## Local Development

You can open `index.html` directly in any web browser, or serve it locally:

```bash
# Using Node / NPX
npm run dev

# Or with Python 3
python -m http.server 3000
```

Visit `http://localhost:3000`.

---

## Deploy to Vercel (Recommended)

1. Push your repository to GitHub:
   ```bash
   git add .
   git commit -m "feat: static HTML portfolio for SEO"
   git push origin main
   ```
2. Go to [vercel.com](https://vercel.com) and import your repository.
3. Framework Preset: **Other** (Static HTML)
4. Build Command: Leave blank
5. Output Directory: Leave blank (Root `./`)
6. Click **Deploy**.

The `vercel.json` file automatically configures security headers, clean URLs, and cache headers.

---

## Deploy to GitHub Pages

1. In your GitHub repository, navigate to **Settings** > **Pages**.
2. Under **Build and deployment** > **Source**, choose **Deploy from a branch**.
3. Under **Branch**, select `main` (or your deployment branch) and the `/ (root)` folder.
4. Click **Save**.
5. Your site will be published at `https://BoradDenish.github.io/portfolio/`.

---

## SEO & Google Search Console Verification

- Sitemap: `https://denish-borad.vercel.app/sitemap.xml`
- Robots: `https://denish-borad.vercel.app/robots.txt`
- Google Verification file: `googleb27c9120b737fd95.html` is located directly in the root directory.
