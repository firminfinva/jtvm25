"use client";

import { useEffect } from "react";

export default function CloudflareAnalytics() {
  useEffect(() => {
    // Cloudflare Web Analytics
    // Get your token from: https://dash.cloudflare.com/?to=/:account/web-analytics
    const token = process.env.NEXT_PUBLIC_CF_BEACON_TOKEN;

    if (token && typeof window !== "undefined") {
      // Cloudflare Web Analytics script
      const script = document.createElement("script");
      script.defer = true;
      script.src = "https://static.cloudflareinsights.com/beacon.min.js";
      script.setAttribute(
        "data-cf-beacon",
        JSON.stringify({
          token: token,
        })
      );
      document.head.appendChild(script);

      return () => {
        // Cleanup
        const existingScript = document.querySelector(
          'script[src="https://static.cloudflareinsights.com/beacon.min.js"]'
        );
        if (existingScript) {
          existingScript.remove();
        }
      };
    }
  }, []);

  return null;
}

