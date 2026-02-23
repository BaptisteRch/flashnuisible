import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Forcer www sur le .com (tant que le .fr n'est pas configuré)
      {
        source: "/:path*",
        has: [{ type: "host", value: "flashnuisible.com" }],
        destination: "https://www.flashnuisible.com/:path*",
        permanent: true,
      },

      // (Optionnel) si quelqu’un arrive sur www.flashnuisible.fr, renvoyer vers le .com
      // utile seulement si le .fr pointe déjà quelque part, sinon tu peux l’enlever
      // {
      //   source: "/:path*",
      //   has: [{ type: "host", value: "www.flashnuisible.fr" }],
      //   destination: "https://www.flashnuisible.com/:path*",
      //   permanent: true,
      // },
    ];
  },

  async headers() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "flashnuisible.vercel.app" }],
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
    ];
  },
};

export default nextConfig;
