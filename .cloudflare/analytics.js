// Cloudflare Web Analytics
// Add your Cloudflare Web Analytics token here
// Get it from: https://dash.cloudflare.com/?to=/:account/web-analytics

export function injectCloudflareAnalytics() {
  if (typeof window !== 'undefined') {
    // Cloudflare Web Analytics script
    const script = document.createElement('script');
    script.defer = true;
    script.src = 'https://static.cloudflareinsights.com/beacon.min.js';
    script.setAttribute('data-cf-beacon', JSON.stringify({
      token: process.env.NEXT_PUBLIC_CF_BEACON_TOKEN || ''
    }));
    document.head.appendChild(script);
  }
}

