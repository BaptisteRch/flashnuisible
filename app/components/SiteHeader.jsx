// app/components/SiteHeader.jsx
import Container from "./Container";
import Link from "next/link";
import Image from "next/image";

const BRAND = {
  name: "Flash Nuisible",
  phoneDisplay: "07 70 35 33 41",
  phoneHref: "tel:+33770353341",
  email: "contact@flashnuisible.fr",
  baseCity: "Saint-Étienne",
  region: "Auvergne-Rhône-Alpes",
  leadTime: "RDV en moins de 48h",
  reviewUrl: "https://g.page/r/CSENTpfsjv-MEBM/review",
};

export default function SiteHeader() {
  return (
    <header className="header">
      <Container className="flex items-center justify-between py-4">
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="flex items-center gap-3 hover:opacity-90 transition leading-none"
          >
            <div className="relative h-12 w-12 md:h-14 md:w-14 flex-shrink-0 mb-2">
              <Image
                src="/images/flash/logo.webp"
                alt="Flash Nuisible"
                fill
                className="object-contain"
                priority
              />
            </div>

            <div className="leading-tight">
              <div className="font-extrabold tracking-tight ">
                Flash Nuisible
              </div>
            </div>
          </Link>

          <div className="brand-subtitle">
            <Link href="/deratisation">Dératisation</Link>
            {" · "}
            <Link href="/desinsectisation">Désinsectisation</Link>
            {" · "}
            <Link href="/">Désinfection</Link>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <a href={BRAND.phoneHref} className="btn btn-primary">
            Appeler{" "}
            <span className="hidden sm:inline">{BRAND.phoneDisplay}</span>
          </a>
          <a href="#contact" className="btn btn-ghost hidden sm:inline-flex">
            Devis gratuit
          </a>
        </div>
      </Container>
    </header>
  );
}

export { BRAND };
