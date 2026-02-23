import { MetadataRoute } from "next";

const SITE_URL = "https://www.flashnuisible.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const routes = [
    "",
    "/fouines",
    "/deratisation",
    "/desinsectisation",
    "/guepes-frelons",
    "/presentation",
    "/problemes/punaises-de-lit",
    "/problemes/cafards-blattes",
    "/problemes/deratisation",
    "/problemes/guepes-frelons",
    "/professionnels",
    "/urgences/punaises-de-lit",
    "/urgences/cafards-blattes",
    "/urgences/deratisation",
    "/urgences/guepes-frelons",
    "/xylophages",
    "/actualites",
  ];

  return routes.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
  }));
}
