# Deployment Guide — Denish Borad Portfolio

This project is configured for automated deployment to **GitHub Pages** and **Vercel**.

---

## 1. Deploying to GitHub Pages

The repository contains an automated GitHub Actions deployment workflow at `.github/workflows/deploy.yml`.

### One-Time Setup in GitHub Settings
For the GitHub Action to deploy successfully, Pages must be enabled with the source set to **GitHub Actions**:
1. Open your repository on GitHub: [github.com/BoradDenish/portfolio](https://github.com/BoradDenish/portfolio).
2. Click **Settings** (top navigation tab).
3. In the left sidebar, click **Pages** (under the *Code and automation* section).
4. Under **Build and deployment** > **Source**, change the dropdown to **GitHub Actions**.
5. Save changes.

Whenever code is pushed to `main` (or when triggered manually via the **Run workflow** button under the **Actions** tab), GitHub Pages will build and deploy the application automatically.

---

## 2. Deploying to Vercel

### Option A: Via GitHub Integration (Recommended)
1. Push your changes to GitHub on your main branch:
   ```bash
   git add .
   git commit -m "feat: complete premium React + TypeScript portfolio"
   git push origin main
   ```
2. Log into your [Vercel Dashboard](https://vercel.com).
3. Import the `portfolio` repository.
4. Vercel automatically detects the Vite framework with:
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
5. Click **Deploy**.

### Option B: Via Vercel CLI
```bash
npm i -g vercel
vercel
vercel --prod
```

---

## 3. SPA Route Configuration

The repository includes:
- `vercel.json` file configuring SPA routing for Vercel.
- `public/404.html` and `HashRouter` for GitHub Pages single-page routing without 404 errors.

```json
{
  "cleanUrls": true,
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

---

## 4. Production Verification Checklist

- [x] TypeScript compiler check passed (`tsc`)
- [x] Vite production bundle passed (`vite build`)
- [x] Code splitting configured (React, Motion, Icons, and Page chunks)
- [x] Responsive layout verified (320px to 1440px)
- [x] Direct URL navigation to `/projects/:slug` verified
- [x] Downloadable resume (`Denish_Borad_CV.pdf`) in `dist/`
- [x] Favicon and SEO meta tags verified
