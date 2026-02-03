// app/lib/cities.js
import { CITIES } from "./cities.generated";

export { CITIES };

export function getCity(slug) {
  if (!slug) return null;
  const key = String(slug).toLowerCase();
  return CITIES.find((c) => c.slug === key) || null;
}

export function generateCityParams(paramName = "ville") {
  return CITIES.map((c) => ({ [paramName]: c.slug }));
}
