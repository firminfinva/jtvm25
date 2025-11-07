# Cloudflare Setup Guide

This guide will help you set up Cloudflare for your JTVM website.

## 1. Cloudflare Web Analytics

### Step 1: Get Your Beacon Token

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Navigate to **Analytics & Logs** → **Web Analytics**
3. Click **Add a site** or select your existing site
4. Copy your **Beacon Token**

### Step 2: Add Environment Variable

Create a `.env.local` file in the root directory:

```bash
NEXT_PUBLIC_CF_BEACON_TOKEN=your-beacon-token-here
```

Or add it to your Cloudflare Pages environment variables in the dashboard.

## 2. Cloudflare Pages Deployment

### Option A: Connect via GitHub

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Navigate to **Pages** → **Create a project**
3. Connect your GitHub repository
4. Configure build settings:
   - **Framework preset**: Next.js
   - **Build command**: `npm run build`
   - **Build output directory**: `.next`
   - **Root directory**: `/` (root)
   - **Node version**: 18 or higher

### Option B: Deploy via Wrangler CLI

1. Install Wrangler CLI:
   ```bash
   npm install -g wrangler
   ```

2. Login to Cloudflare:
   ```bash
   wrangler login
   ```

3. Deploy:
   ```bash
   npm run build
   wrangler pages deploy .next
   ```

## 3. Environment Variables in Cloudflare Pages

Add these environment variables in Cloudflare Pages dashboard:

- `NEXT_PUBLIC_CF_BEACON_TOKEN` - Your Cloudflare Web Analytics beacon token

## 4. Custom Domain Setup

1. In Cloudflare Pages, go to your project
2. Click **Custom domains**
3. Add your domain (e.g., `www.jtvm.com`)
4. Follow the DNS configuration instructions

## 5. Features Enabled

✅ **Cloudflare Web Analytics** - Privacy-friendly analytics
✅ **Cloudflare CDN** - Global content delivery
✅ **DDoS Protection** - Automatic protection
✅ **SSL/TLS** - Automatic HTTPS
✅ **Performance Optimization** - Automatic optimizations

## Files Created

- `app/components/CloudflareAnalytics.tsx` - Analytics component
- `wrangler.toml` - Cloudflare configuration
- `.cloudflare/` - Cloudflare helper files

## Testing

After deployment, verify:

1. Analytics are working: Check Cloudflare Dashboard → Web Analytics
2. Site is accessible: Visit your Cloudflare Pages URL
3. HTTPS is enabled: Check SSL/TLS status

## Support

For issues, check:
- [Cloudflare Pages Docs](https://developers.cloudflare.com/pages/)
- [Next.js on Cloudflare](https://developers.cloudflare.com/pages/framework-guides/nextjs/)

