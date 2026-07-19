# Google Search Console Setup Guide

> Step-by-step guide to connect your portfolio with Google Search Console and submit your sitemap.

---

## Prerequisites

- Your site is deployed at: `https://BoradDenish.github.io/portfolio/`
- `sitemap.xml` and `robots.txt` are in the `public/` folder (will be deployed to your site root)

---

## Step 1: Create a Google Search Console Account

1. Go to [https://search.google.com/search-console](https://search.google.com/search-console)
2. Sign in with your Google account
3. Click **"Start now"**

---

## Step 2: Add Your Property

1. In the left sidebar, click **"Add property"**
2. Choose **"URL prefix"** (recommended for GitHub Pages)
3. Enter your full site URL:
   ```
   https://BoradDenish.github.io/portfolio/
   ```
4. Click **"Continue"**

---

## Step 3: Verify Ownership

### Method A: HTML Meta Tag (Easiest - RECOMMENDED)

1. Google will give you a meta tag like:
   ```html
   <meta name="google-site-verification" content="YOUR_ACTUAL_CODE" />
   ```
2. Open `index.html` in your project
3. Find line 12 where it says:
   ```html
   <meta name="google-site-verification" content="YOUR_GOOGLE_VERIFICATION_CODE" />
   ```
4. Replace `YOUR_GOOGLE_VERIFICATION_CODE` with your actual code from Google
5. Save the file
6. Deploy to GitHub:
   ```bash
   git add .
   git commit -m "feat: add Google site verification"
   git push origin main
   ```
7. Wait 1-2 minutes for deployment
8. Go back to Google Console and click **"Verify"**

### Method B: HTML File Upload

1. Google will provide a verification HTML file (e.g., `googleAbCdEf123.html`)
2. Download the file from Google
3. Place it in your `public/` folder:
   ```
   portfolio/
   ├── public/
   │   ├── googleAbCdEf123.html   <-- PUT FILE HERE
   │   ├── sitemap.xml
   │   ├── robots.txt
   │   └── ...
   ```
4. Deploy to GitHub:
   ```bash
   git add .
   git commit -m "feat: add Google verification file"
   git push origin main
   ```
5. Wait 1-2 minutes for deployment
6. Go back to Google Console and click **"Verify"**

> **Important:** The HTML file must be accessible at:
> `https://BoradDenish.github.io/portfolio/googleAbCdEf123.html`

### Method C: DNS Record (Best for custom domains)

1. Google will give you a TXT record
2. Add it to your domain's DNS settings
3. Click **"Verify"**

---

## Step 4: Submit Your Sitemap

1. After verification, you'll see the Search Console dashboard
2. In the left sidebar, click **"Sitemaps"**
3. In the **"Add a new sitemap"** field, enter:
   ```
   sitemap.xml
   ```
4. Click **"Submit"**
5. You should see **"Sitemap submitted successfully"**

---

## Step 5: Request Indexing for Your Pages

1. In the left sidebar, click **"URL Inspection"**
2. Enter your page URL:
   ```
   https://BoradDenish.github.io/portfolio/
   ```
3. Click **"Request Indexing"**
4. Wait for Google to process (can take a few minutes to 24 hours)

---

## Step 6: Check robots.txt

1. In the left sidebar, click **"robots.txt Tester"** (under Settings)
2. Your `robots.txt` should show:
   ```
   User-agent: *
   Allow: /

   Sitemap: https://BoradDenish.github.io/portfolio/sitemap.xml
   ```
3. Make sure there are no errors

---

## Step 7: Monitor Performance

1. Go to **"Overview"** in the left sidebar
2. Check:
   - **Performance** - clicks, impressions, CTR, position
   - **Coverage** - indexed pages, errors
   - **Sitemaps** - sitemap status

---

## What to Expect

| Timeframe | What Happens |
|-----------|-------------|
| Day 1 | Sitemap submitted, verification complete |
| Day 1-3 | Google starts crawling your site |
| Day 3-7 | Pages appear in search results |
| Day 7-14 | Full indexing complete |
| Day 14+ | Performance data starts showing |

---

## SEO Tips for Your Portfolio

1. **Keep content updated** - Update projects and experience regularly
2. **Use descriptive titles** - Your current title is great: `Denish Borad | Python Backend Developer | IoT Integration | Inlancer Technologies`
3. **Meta description** - Already well set in `index.html`
4. **Keywords** - Already included in meta tags
5. **Mobile-friendly** - Your site uses responsive design with Tailwind
6. **Fast loading** - React + Vite builds are lightweight

---

## Files Overview

| File | Purpose | Location |
|------|---------|----------|
| `sitemap.xml` | Tells Google about your site structure | `public/sitemap.xml` |
| `robots.txt` | Guides search engine crawlers | `public/robots.txt` |
| `google-site-verification` | Proves you own the site | `<head>` in `index.html` |
| `GOOGLE_CONSOLE_SETUP.md` | This guide | Project root |

---

## Quick Deploy Commands

```bash
# Build and deploy after changes
npm run build
npm run deploy

# Or if using GitHub Actions, just push to main branch
git add .
git commit -m "feat: add sitemap, robots.txt, and Google verification"
git push origin main
```

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Verification fails | Make sure meta tag is in `<head>`, not `<body>` |
| HTML file not found | Ensure file is in `public/` folder, not root |
| Sitemap not found | Ensure `sitemap.xml` is in `public/` and deployed |
| Pages not indexed | Wait 24-48 hours, then request indexing manually |
| Coverage errors | Check if all pages are accessible (no 404 errors) |

---

## Verification Checklist

- [ ] `sitemap.xml` created in `public/`
- [ ] `robots.txt` created in `public/`
- [ ] Google verification meta tag added to `index.html` `<head>`
- [ ] All files deployed to GitHub
- [ ] Site accessible at `https://BoradDenish.github.io/portfolio/`
- [ ] Sitemap accessible at `https://BoradDenish.github.io/portfolio/sitemap.xml`
- [ ] Robots.txt accessible at `https://BoradDenish.github.io/portfolio/robots.txt`
- [ ] Google Search Console account created
- [ ] Property added with correct URL
- [ ] Ownership verified
- [ ] Sitemap submitted
- [ ] Indexing requested
