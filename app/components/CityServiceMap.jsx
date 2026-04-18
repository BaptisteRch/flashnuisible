"use client";

import { useEffect, useRef, useState } from "react";
import { CITIES } from "../lib/cities";

const SERVICES = [
  { slug: "deratisation", label: "Deratisation" },
  { slug: "fouines", label: "Fouines" },
  { slug: "fourmis", label: "Fourmis" },
  { slug: "cafards-blattes", label: "Cafards / blattes" },
  { slug: "guepes-frelons", label: "Guepes / frelons" },
  { slug: "mouches", label: "Mouches" },
  { slug: "moustiques", label: "Moustiques" },
  { slug: "punaises-de-lit", label: "Punaises de lit" },
  { slug: "xylophages", label: "Xylophages" },
];

const LEAFLET_JS = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
const LEAFLET_CSS = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";

function normalizeText(value) {
  return String(value || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/['’]/g, "")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

function findCity(query) {
  const normalizedQuery = normalizeText(query);

  if (!normalizedQuery) return null;

  return (
    CITIES.find((city) => normalizeText(city.name) === normalizedQuery) ||
    CITIES.find((city) => city.slug === normalizedQuery.replace(/\s+/g, "-")) ||
    null
  );
}

function getSuggestions(query) {
  const normalizedQuery = normalizeText(query);

  if (normalizedQuery.length < 2) return [];

  return CITIES.filter((city) => {
    const normalizedName = normalizeText(city.name);
    return (
      normalizedName.startsWith(normalizedQuery) ||
      normalizedName.includes(normalizedQuery)
    );
  }).slice(0, 8);
}

function ensureLeafletAssets() {
  if (!document.querySelector(`link[href="${LEAFLET_CSS}"]`)) {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = LEAFLET_CSS;
    document.head.appendChild(link);
  }

  if (window.L) {
    return Promise.resolve(window.L);
  }

  return new Promise((resolve, reject) => {
    const existing = document.querySelector(`script[src="${LEAFLET_JS}"]`);

    if (existing) {
      existing.addEventListener("load", () => resolve(window.L), {
        once: true,
      });
      existing.addEventListener("error", reject, { once: true });
      return;
    }

    const script = document.createElement("script");
    script.src = LEAFLET_JS;
    script.async = true;
    script.onload = () => resolve(window.L);
    script.onerror = reject;
    document.body.appendChild(script);
  });
}

export default function CityServiceMap() {
  const menuRef = useRef(null);
  const mapElementRef = useRef(null);
  const mapRef = useRef(null);
  const markerRef = useRef(null);
  const [query, setQuery] = useState("");
  const [selectedCity, setSelectedCity] = useState(null);
  const [suggestions, setSuggestions] = useState([]);
  const [isMapReady, setIsMapReady] = useState(false);
  const [isLoadingMap, setIsLoadingMap] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    let isMounted = true;

    ensureLeafletAssets()
      .then((L) => {
        if (!isMounted || !mapElementRef.current || mapRef.current) return;

        const map = L.map(mapElementRef.current, {
          zoomControl: true,
          attributionControl: false,
        }).setView([45.55, 4.4], 7);

        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          maxZoom: 19,
        }).addTo(map);

        mapRef.current = map;
        setIsMapReady(true);
      })
      .catch(() => {
        if (isMounted) {
          setErrorMessage("Impossible de charger la carte pour le moment.");
        }
      });

    return () => {
      isMounted = false;
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
      markerRef.current = null;
    };
  }, []);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (!selectedCity || !mapRef.current || !window.L) return undefined;

    const controller = new AbortController();

    async function loadCityOnMap() {
      setIsLoadingMap(true);
      setErrorMessage("");

      try {
        const params = new URLSearchParams({
          q: `${selectedCity.name}, ${selectedCity.area}, France`,
          format: "jsonv2",
          limit: "1",
          countrycodes: "fr",
          "accept-language": "fr",
        });

        const response = await fetch(
          `https://nominatim.openstreetmap.org/search?${params.toString()}`,
          { signal: controller.signal },
        );

        if (!response.ok) {
          throw new Error(`HTTP ${response.status}`);
        }

        const results = await response.json();
        const match = results[0];

        if (!match?.lat || !match?.lon) {
          throw new Error("No coordinates found");
        }

        const lat = Number(match.lat);
        const lon = Number(match.lon);
        const L = window.L;

        mapRef.current.setView([lat, lon], 12, { animate: true });

        if (markerRef.current) {
          markerRef.current.remove();
        }

        markerRef.current = L.marker([lat, lon])
          .addTo(mapRef.current)
          .bindPopup(selectedCity.name)
          .openPopup();
      } catch (error) {
        if (error.name === "AbortError") return;
        setErrorMessage(
          "Impossible de localiser cette ville sur la carte pour le moment.",
        );
      } finally {
        if (!controller.signal.aborted) {
          setIsLoadingMap(false);
        }
      }
    }

    loadCityOnMap();

    return () => controller.abort();
  }, [selectedCity]);

  function selectCity(city) {
    setSelectedCity(city);
    setQuery(city.name);
    setSuggestions([]);
    setIsMenuOpen(false);
  }

  function handleSearchSubmit(event) {
    event.preventDefault();

    const city = findCity(query);

    if (!city) {
      setSelectedCity(null);
      setSuggestions([]);
      setIsMenuOpen(false);
      setErrorMessage("Ville hors de la zone d'intervention.");
      return;
    }

    selectCity(city);
  }

  function handleQueryChange(value) {
    setQuery(value);
    setErrorMessage("");
    setSuggestions(getSuggestions(value));

    if (!value.trim()) {
      setSelectedCity(null);
      setIsMenuOpen(false);
    }
  }

  return (
    <section className="section">
      <div className="mx-auto max-w-7xl px-6">
        <div className="card overflow-hidden">
          <div className="grid gap-8 bg-white p-6 md:grid-cols-[360px_minmax(0,1fr)] md:p-8">
            <div>
              <span className="badge">Carte des interventions</span>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight">
                Trouvez votre ville et obtenez une intervention rapide
              </h2>
              <p className="mt-3 text-muted">
                Recherchez une ville couverte par Flash Nuisible puis découvrez
                les services disponibles pour accéder a la page dediée.
              </p>

              <form className="mt-6" onSubmit={handleSearchSubmit}>
                <label
                  className="block text-sm font-semibold"
                  htmlFor="city-search"
                >
                  Votre ville
                </label>
                <div className="mt-2 flex gap-3">
                  <input
                    id="city-search"
                    type="text"
                    value={query}
                    onChange={(event) => handleQueryChange(event.target.value)}
                    placeholder="Exemple : Lyon"
                    className="input"
                    autoComplete="off"
                  />
                  <button
                    type="submit"
                    className="cursor-pointer btn btn-primary shrink-0"
                  >
                    Rechercher
                  </button>
                </div>
              </form>

              {suggestions.length > 0 ? (
                <div className="mt-3 rounded-[20px] border border-black/10 bg-white p-2 shadow-[0_14px_36px_rgba(2,6,23,0.08)]">
                  {suggestions.map((city) => (
                    <button
                      key={city.slug}
                      type="button"
                      onClick={() => selectCity(city)}
                      className="flex w-full items-center justify-between rounded-2xl px-3 py-2 text-left transition hover:bg-black/[0.04]"
                    >
                      <span className="font-semibold">{city.name}</span>
                      <span className="text-sm text-muted">{city.area}</span>
                    </button>
                  ))}
                </div>
              ) : null}

              {errorMessage ? (
                <p className="mt-4 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
                  {errorMessage}
                </p>
              ) : null}

              {selectedCity ? (
                <div className="mt-5" ref={menuRef}>
                  <button
                    type="button"
                    onClick={() => setIsMenuOpen((open) => !open)}
                    className="cursor-pointer flex w-full items-center justify-between rounded-[20px] border border-black/10 bg-[#111827] px-4 py-4 text-left text-white shadow-[0_16px_36px_rgba(17,24,39,0.18)]"
                  >
                    <span>
                      <span className="block text-xs uppercase tracking-[0.18em] text-white/60">
                        Ville selectionnee
                      </span>
                      <span className="mt-1 block text-lg font-extrabold">
                        {selectedCity.name}
                      </span>
                    </span>
                    <span className="text-sm font-semibold text-orange-300">
                      Services
                    </span>
                  </button>

                  {isMenuOpen ? (
                    <div className="mt-3 rounded-[22px] border border-black/10 bg-white p-2 shadow-[0_20px_40px_rgba(2,6,23,0.12)]">
                      {SERVICES.map((service) => (
                        <a
                          key={service.slug}
                          href={`/${service.slug}/${selectedCity.slug}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cursor-pointer flex w-full items-center justify-between rounded-2xl px-4 py-3 text-left transition hover:bg-orange-50"
                        >
                          <span className="font-semibold">{service.label}</span>
                          <span className="text-sm text-muted">
                            /{selectedCity.slug}
                          </span>
                        </a>
                      ))}
                    </div>
                  ) : null}
                </div>
              ) : null}
            </div>

            <div className="relative min-h-[420px] overflow-hidden rounded-[28px] border border-black/10 bg-[#ebe7df]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,106,0,0.18),transparent_34%),linear-gradient(135deg,#f4efe6_0%,#e8e2d8_100%)]" />

              <div className="relative flex h-full min-h-[420px] flex-col">
                <div className="flex items-center justify-between border-b border-black/10 bg-white/75 px-4 py-3 backdrop-blur">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-black/45">
                      Zone couverte
                    </p>
                    <p className="text-sm font-semibold text-black/75">
                      Villes presentes dans la base interne
                    </p>
                  </div>
                  {selectedCity ? (
                    <div className="rounded-full bg-[#111827] px-3 py-1 text-sm font-semibold text-white">
                      {selectedCity.name}
                    </div>
                  ) : null}
                </div>

                <div className="flex flex-1 flex-col p-4">
                  <div
                    ref={mapElementRef}
                    className="min-h-[340px] w-full rounded-[24px] relative z-0"
                  />

                  {!isMapReady ? (
                    <div className="pointer-events-none absolute inset-x-4 bottom-14 top-[72px] flex items-center justify-center rounded-[24px] border border-dashed border-black/12 bg-white/70 p-8 text-center">
                      <div className="max-w-md">
                        <p className="text-sm font-bold uppercase tracking-[0.18em] text-black/45">
                          Chargement
                        </p>
                        <h3 className="mt-3 text-2xl font-extrabold tracking-tight">
                          Preparation de la carte
                        </h3>
                      </div>
                    </div>
                  ) : null}

                  {isLoadingMap ? (
                    <div className="pointer-events-none absolute inset-x-4 bottom-14 top-[72px] flex items-center justify-center rounded-[24px] bg-white/35 p-8 text-center backdrop-blur-[2px]">
                      <div className="rounded-full bg-[#111827] px-4 py-2 text-sm font-semibold text-white">
                        Localisation de {selectedCity?.name}...
                      </div>
                    </div>
                  ) : null}

                  <p className="mt-3 text-right text-xs text-black/50">
                    Carte: OpenStreetMap. Donnees map sous licence ODbL. Infos:{" "}
                    <a
                      href="https://www.openstreetmap.org/copyright"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline"
                    >
                      attribution OSM
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
