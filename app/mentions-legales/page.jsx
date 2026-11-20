// app/mentions-legales/page.jsx
import Link from "next/link";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import { COMPANY, HOST, LEGAL_LAST_UPDATE } from "../lib/company";

export const metadata = {
  title: "Mentions légales — Flash Nuisible",
  description:
    "Mentions légales du site Flash Nuisible : éditeur, siège, SIRET, directeur de la publication et hébergeur.",
  alternates: { canonical: "/mentions-legales" },
  robots: { index: true, follow: true },
};

export default function MentionsLegalesPage() {
  return (
    <main className="page">
      <SiteHeader />

      <section className="section">
        <div className="mx-auto max-w-3xl px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Mentions légales
          </h1>
          <p className="mt-4 text-sm text-soft">
            Dernière mise à jour : {LEGAL_LAST_UPDATE}
          </p>

          <div className="mt-10 grid gap-10 text-muted">
            <div>
              <h2 className="text-2xl font-extrabold tracking-tight">
                Éditeur du site
              </h2>
              <ul className="mt-4 grid gap-1">
                <li>
                  Raison sociale : <strong>{COMPANY.legalName}</strong> (nom
                  commercial : {COMPANY.tradeName})
                </li>
                <li>
                  Forme juridique : {COMPANY.legalForm}, au capital de{" "}
                  {COMPANY.capital}
                </li>
                <li>Siège social : {COMPANY.address}</li>
                <li>SIRET : {COMPANY.siret}</li>
                <li>{COMPANY.rcs}</li>
                <li>TVA intracommunautaire : {COMPANY.vat}</li>
                <li>Certificat Certibiocide n° {COMPANY.certibiocide}</li>
                <li>
                  E-mail :{" "}
                  <a className="underline" href={`mailto:${COMPANY.email}`}>
                    {COMPANY.email}
                  </a>
                </li>
                <li>
                  Téléphone :{" "}
                  <a className="underline" href={COMPANY.phoneHref}>
                    {COMPANY.phoneDisplay}
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-extrabold tracking-tight">
                Directeur de la publication
              </h2>
              <p className="mt-4">{COMPANY.publicationDirector}</p>
            </div>

            <div>
              <h2 className="text-2xl font-extrabold tracking-tight">
                Hébergeur
              </h2>
              <p className="mt-4">
                {HOST.name}, {HOST.address} —{" "}
                <a
                  className="underline"
                  href={HOST.url}
                  target="_blank"
                  rel="noopener"
                >
                  vercel.com
                </a>
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-extrabold tracking-tight">
                Propriété intellectuelle
              </h2>
              <p className="mt-4">
                L&apos;ensemble des contenus de ce site (textes, photos, logos,
                visuels) est la propriété de {COMPANY.legalName}, sauf mention
                contraire. Toute reproduction sans autorisation écrite préalable
                est interdite. Les logos des partenaires restent la propriété de
                leurs titulaires respectifs.
              </p>
              <p className="mt-4">
                Fonds de carte : © les contributeurs d&apos;OpenStreetMap,
                données sous licence ODbL.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-extrabold tracking-tight">
                Données personnelles
              </h2>
              <p className="mt-4">
                Le traitement des données transmises via le site est décrit dans
                la{" "}
                <Link className="underline" href="/confidentialite">
                  politique de confidentialité
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
