import type { NextConfig } from "next";
import dns from "dns";

dns.setDefaultResultOrder("ipv4first");

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "cdn.sanity.io",
                port: "",
            },
            { hostname: "icons.duckduckgo.com" },
            { hostname: "res.cloudinary.com" },
            { hostname: "www.google.com" },
            { hostname: "images.unsplash.com" },
        ],
         dangerouslyAllowLocalIP: true,
    },
};

export default nextConfig;