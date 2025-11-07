# Cloudflare Configuration

This directory contains Cloudflare-specific configuration files.

## Setup Instructions

### 1. Cloudflare Web Analytics

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Navigate to Web Analytics
3. Create a new site or get your beacon token
4. Add the token to your environment variables:

```bash
# .env.local
NEXT_PUBLIC_CF_BEACON_TOKEN=your-beacon-token-here
```

### 2. Cloudflare Pages Deployment

1. Connect your GitHub repository to Cloudflare Pages
2. Build command: `npm run build`
3. Build output directory: `.next`
4. Node version: 18 or higher

### 3. Environment Variables

Add these to Cloudflare Pages environment variables:
- `NEXT_PUBLIC_CF_BEACON_TOKEN` - Your Cloudflare Web Analytics token

## Files

- `analytics.js` - Cloudflare Analytics helper functions
- `wrangler.toml` - Cloudflare Workers/Pages configuration

