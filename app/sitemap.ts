import { MetadataRoute } from "next";
import { CITIES } from "./lib/cities";

const SITE_URL = "https://www.flashnuisible.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes = [
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

  const cityServices = [
    "fouines",
    "cafards-blattes",
    "deratisation",
    "fourmis",
    "guepes-frelons",
    "mouches",
    "moustiques",
    "punaises-de-lit",
    "xylophages",
  ];

  const staticEntries = staticRoutes.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
  }));

  const cityEntries = cityServices.flatMap((service) =>
    CITIES.map((city) => ({
      url: `${SITE_URL}/${service}/${city.slug}`,
      lastModified: now,
    })),
  );

  return [...staticEntries, ...cityEntries];
}
