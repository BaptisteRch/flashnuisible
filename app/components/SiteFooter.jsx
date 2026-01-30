import Container from "./Container";
import Link from "next/link";
import { BRAND } from "./SiteHeader";

export default function SiteFooter() {
  return (
    <footer className="border-t py-10" style={{ borderColor: "var(--stroke)" }}>
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="font-extrabold tracking-tight">{BRAND.name}</div>
            <div className="text-sm text-soft">
              Saint-Étienne • Auvergne-Rhône-Alpes
            </div>
          </div>

          <div className="flex flex-wrap gap-3 text-sm text-muted">
            <Link className="hover:underline" href="/deratisation">
              Dératisation
            </Link>
            <Link className="hover:underline" href="/desinsectisation">
              Désinsectisation
            </Link>
            <Link className="hover:underline" href="/fouines">
              Fouines
            </Link>
            <Link className="hover:underline" href="/professionnels">
              Professionnels
            </Link>
            <a className="hover:underline" href={`mailto:${BRAND.email}`}>
              Email
            </a>
            <a className="hover:underline" href={BRAND.phoneHref}>
              Appeler
            </a>
          </div>
        </div>

        <div className="mt-8 text-xs text-faint">
          © {new Date().getFullYear()} Flash Nuisible — Tous droits réservés.
        </div>
      </Container>
    </footer>
  );
}
