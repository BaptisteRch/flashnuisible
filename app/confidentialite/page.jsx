// app/confidentialite/page.jsx
import Link from "next/link";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import { COMPANY, HOST, LEGAL_LAST_UPDATE } from "../lib/company";

export const metadata = {
  title: "Politique de confidentialité — Flash Nuisible",
  description:
    "Comment Flash Nuisible traite vos données personnelles : données collectées, finalités, durée de conservation, cookies et vos droits.",
  alternates: { canonical: "/confidentialite" },
  robots: { index: true, follow: true },
};

export default function ConfidentialitePage() {
  return (
    <main className="page">
      <SiteHeader />

      <section className="section">
        <div className="mx-auto max-w-3xl px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Politique de confidentialité
          </h1>
          <p className="mt-4 text-sm text-soft">
            Dernière mise à jour : {LEGAL_LAST_UPDATE}
          </p>

          <div className="mt-10 grid gap-10 text-muted">
            <div>
              <h2 className="text-2xl font-extrabold tracking-tight">
                Responsable du traitement
              </h2>
              <p className="mt-4">
                {COMPANY.legalName} ({COMPANY.legalForm}), {COMPANY.address}.
                Contact :{" "}
                <a className="underline" href={`mailto:${COMPANY.email}`}>
                  {COMPANY.email}
                </a>
                .
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-extrabold tracking-tight">
                Données collectées
              </h2>
              <p className="mt-4">
                Lorsque vous nous contactez via le formulaire du site, par
                e-mail ou par téléphone, nous recevons les informations que
                vous nous transmettez : nom, téléphone, adresse e-mail, ville ou
                secteur, type d&apos;intervention et contenu de votre message.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-extrabold tracking-tight">
                Comment fonctionne le formulaire
              </h2>
              <p className="mt-4">
                Le formulaire de contact n&apos;enregistre aucune donnée sur le
                site : il prépare un e-mail dans votre propre messagerie, que
                vous envoyez vous-même à {COMPANY.email}. Ces e-mails sont
                hébergés par OVH (OVH SAS, 2 rue Kellermann, 59100 Roubaix,
                France).
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-extrabold tracking-tight">
                Finalités et base légale
              </h2>
              <p className="mt-4">
                Vos données servent uniquement à répondre à votre demande et à
                établir un devis (mesures précontractuelles prises à votre
                demande). Elles ne sont jamais revendues ni cédées à des tiers.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-extrabold tracking-tight">
                Durée de conservation
              </h2>
              <p className="mt-4">
                Vos données sont conservées 3 ans après notre dernier contact,
                puis supprimées.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-extrabold tracking-tight">
                Cookies et services tiers
              </h2>
              <p className="mt-4">
                Ce site ne dépose aucun cookie de mesure d&apos;audience ni de
                publicité, et n&apos;utilise donc pas de bandeau de
                consentement.
              </p>
              <p className="mt-4">
                Certaines fonctionnalités font appel à des services externes
                qui reçoivent, pour fonctionner, l&apos;adresse IP de votre
                appareil :
              </p>
              <ul className="mt-4 grid gap-2 list-disc pl-5">
                <li>
                  <strong>Carte des zones d&apos;intervention</strong> : la
                  bibliothèque Leaflet est chargée depuis unpkg.com, les fonds
                  de carte depuis OpenStreetMap (tile.openstreetmap.org) et la
                  recherche de ville passe par le service Nominatim
                  d&apos;OpenStreetMap (le nom de la ville saisie lui est
                  transmis).
                </li>
                <li>
                  <strong>Hébergement</strong> : le site est hébergé par{" "}
                  {HOST.name} ({HOST.address}), qui traite les journaux
                  techniques de connexion nécessaires au fonctionnement et à la
                  sécurité du site.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-extrabold tracking-tight">
                Vos droits
              </h2>
              <p className="mt-4">
                Vous disposez d&apos;un droit d&apos;accès, de rectification,
                d&apos;effacement et d&apos;opposition sur vos données. Pour
                l&apos;exercer, écrivez à{" "}
                <a className="underline" href={`mailto:${COMPANY.email}`}>
                  {COMPANY.email}
                </a>
                .
              </p>
              <p className="mt-4">
                Si vous estimez que vos droits ne sont pas respectés, vous
                pouvez adresser une réclamation à la CNIL (
                <a
                  className="underline"
                  href="https://www.cnil.fr"
                  target="_blank"
                  rel="noopener"
                >
                  cnil.fr
                </a>
                ).
              </p>
            </div>

            <p>
              Voir aussi les{" "}
              <Link className="underline" href="/mentions-legales">
                mentions légales
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
