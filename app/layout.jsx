// app/layout.jsx
import "./globals.css";

const SITE_URL = "https://flashnuisible.fr";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Flash Nuisible — Dératisation & Désinsectisation",
  description:
    "Devis gratuit • RDV en moins de 48h • Particuliers & professionnels. Basé à Saint-Étienne, interventions dans toute la région Auvergne-Rhône-Alpes.",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Flash Nuisible — Dératisation & Désinsectisation",
    description:
      "Devis gratuit • RDV en moins de 48h • Basé à Saint-Étienne • Auvergne-Rhône-Alpes",
    url: SITE_URL,
    siteName: "Flash Nuisible",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/images/og.jpg", // avec metadataBase => devient absolu automatiquement
        width: 1200,
        height: 630,
        alt: "Flash Nuisible",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Flash Nuisible — Dératisation & Désinsectisation",
    description:
      "Devis gratuit • RDV en moins de 48h • Basé à Saint-Étienne • Auvergne-Rhône-Alpes",
    images: ["/images/og.jpg"],
  },

  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }) {
  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Flash Nuisible",
    url: SITE_URL,
    email: "contact@flashnuisible.fr",
    telephone: "+33770353341",
    areaServed: ["Saint-Étienne", "Loire", "Auvergne-Rhône-Alpes"],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Saint-Étienne",
      addressRegion: "Auvergne-Rhône-Alpes",
      addressCountry: "FR",
    },
    image: `${SITE_URL}/images/og.jpg`,
  };

  return (
    <html lang="fr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd),
          }}
        />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
