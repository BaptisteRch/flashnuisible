// app/layout.jsx
import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://www.flashnuisible.fr"),
  title: "Flash Nuisible — Dératisation & Désinsectisation",
  description:
    "Devis gratuit • RDV en moins de 48h • Particuliers & professionnels. Basé à Saint-Étienne, interventions dans toute la région Auvergne-Rhône-Alpes.",
  openGraph: {
    title: "Flash Nuisible",
    description:
      "Devis gratuit • RDV en moins de 48h • Basé à Saint-Étienne • Auvergne-Rhône-Alpes",
    images: ["/images/og.jpg"],
  },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
