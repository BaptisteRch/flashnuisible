import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Redirect flashnuisible.com -> flashnuisible.fr
      {
        source: "/:path*",
        has: [{ type: "host", value: "flashnuisible.com" }],
        destination: "https://flashnuisible.fr/:path*",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.flashnuisible.com" }],
        destination: "https://flashnuisible.fr/:path*",
        permanent: true,
      },

      // Si tu veux forcer le sans-www (optionnel, mais conseillé si tu choisis sans www)
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.flashnuisible.fr" }],
        destination: "https://flashnuisible.fr/:path*",
        permanent: true,
      },
    ];
  },

  async headers() {
    return [
      // Empêcher l'indexation du domaine vercel.app
      {
        source: "/:path*",
        has: [{ type: "host", value: "flashnuisible.vercel.app" }], // adapte au vrai domaine Vercel
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
    ];
  },
};

export default nextConfig;
