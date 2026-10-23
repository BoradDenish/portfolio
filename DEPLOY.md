# Deployment Guide — Denish Borad Portfolio

This project is configured for automated zero-configuration deployment to **Vercel** and static hosting platforms.

---

## 1. Deploying to Vercel

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

## 2. SPA Route Configuration

The repository includes a `vercel.json` file configuring SPA routing so direct visits to project pages like `https://denish-borad.vercel.app/projects/society-mitr` work seamlessly without 404 errors:

```json
{
  "cleanUrls": true,
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

---

## 3. Production Verification Checklist

- [x] TypeScript compiler check passed (`tsc`)
- [x] Vite production bundle passed (`vite build`)
- [x] Code splitting configured (React, Motion, Icons, and Page chunks)
- [x] Responsive layout verified (320px to 1440px)
- [x] Direct URL navigation to `/projects/:slug` verified
- [x] Downloadable resume (`Denish_Borad_CV.pdf`) in `dist/`
- [x] Favicon and SEO meta tags verified
