import { notFound } from "next/navigation";

import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";
import ContactSection from "../../components/ContactSection";
import { buildLocalMetadata } from "../../lib/seo";
import { getCity, getFeaturedCities } from "../../lib/cities";
import SeoJsonLd from "../../components/SeoJsonLd";

export function generateStaticParams() {
  return getFeaturedCities().map((c) => ({ ville: c.slug }));
}

export const revalidate = 2592000;

export async function generateMetadata({ params }) {
  const { ville } = await params;
  const city = getCity(ville);
  if (!city) return { title: "Flash Nuisible" };

  return buildLocalMetadata({
    serviceLabel: "Mouches",
    cityName: city.name,
    area: city.area || "Auvergne-Rhône-Alpes",
    slugPath: `mouche/${city.slug}`,
  });
}

export default async function MouchesVillePage({ params }) {
  const { ville } = await params;
  const city = getCity(ville);

  if (!city) notFound();

  const VILLE = city.name;
  const AREA = city.area || "Auvergne-Rhône-Alpes";
  const SITE_URL = "https://www.flashnuisible.com";
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Accueil",
            item: `${SITE_URL}/`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Mouches",
            item: `${SITE_URL}/mouches`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: `Mouches à ${VILLE}`,
            item: `${SITE_URL}/mouches/${city.slug}`,
          },
        ],
      },
      {
        "@type": "LocalBusiness",
        name: "Flash Nuisible",
        telephone: "+33770353341",
        email: "contact@flashnuisible.fr",
        areaServed: AREA,
        url: `${SITE_URL}/`,
        image: `${SITE_URL}/images/og.jpg`,
      },
      {
        "@type": "Service",
        name: `Traitement des mouches à ${VILLE}`,
        serviceType: "Traitement des mouches",
        provider: {
          "@type": "LocalBusiness",
          name: "Flash Nuisible",
          url: `${SITE_URL}/`,
        },
        areaServed: VILLE,
        url: `${SITE_URL}/mouches/${city.slug}`,
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: `Pourquoi ai-je beaucoup de mouches à ${VILLE} ?`,
            acceptedAnswer: {
              "@type": "Answer",
              text: "Une forte présence de mouches peut être liée à des sources de nourriture, d’humidité ou de reproduction à proximité.",
            },
          },
          {
            "@type": "Question",
            name: "Le traitement est-il adapté aux habitations ?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Oui, le traitement est adapté à la situation et au type de lieu concerné.",
            },
          },
          {
            "@type": "Question",
            name: "Proposez-vous un diagnostic ?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Oui, un premier diagnostic et un devis peuvent être réalisés par téléphone.",
            },
          },
        ],
      },
    ],
  };

  return (
    <main className="page">
      <SiteHeader />
      <SeoJsonLd json={jsonLd} />

      <section className="section">
        <div className="mx-auto max-w-7xl px-6 space-y-12">
          {/* HERO */}
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
              Mouches à {VILLE}
            </h1>
            <p className="mt-3 text-muted font-semibold">
              Traitement des mouches – Désinsectisation professionnelle
            </p>

            <div className="mt-6 space-y-3 text-muted">
              <p>
                Flash Nuisible est une entreprise spécialisée dans le traitement
                des mouches à <strong>{VILLE}</strong>, intervenant
                principalement auprès des particuliers pour réduire durablement
                les infestations de mouches dans les habitations.
              </p>

              <p>
                La présence répétée de mouches dans une maison ou un appartement
                est souvent liée à une cause précise : accès, zones attractives,
                humidité ou déchets. Une intervention ciblée à{" "}
                <strong>{VILLE}</strong> permet d’agir efficacement et d’éviter
                une nuisance quotidienne persistante.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#contact" className="btn btn-primary">
                Contacter Flash Nuisible
              </a>
              <a href="/desinsectisation" className="btn btn-ghost">
                Page Désinsectisation
              </a>
            </div>
          </div>

          {/* POURQUOI */}
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
              Pourquoi traiter un problème de mouches à {VILLE} ?
            </h2>

            <div className="mt-4 space-y-3 text-muted">
              <p>
                À {VILLE}, les mouches peuvent rapidement devenir envahissantes,
                notamment en période chaude. Elles se déplacent facilement entre
                l’extérieur et l’intérieur du logement et trouvent des
                conditions favorables dans certaines pièces comme les cuisines,
                salles de bain ou zones de stockage.
              </p>

              <p>
                Sans traitement professionnel des mouches, les nuisances peuvent
                s’installer durablement, malgré l’utilisation de solutions grand
                public souvent inefficaces sur le long terme. Identifier la
                cause et agir à la source est essentiel pour obtenir un résultat
                durable.
              </p>
            </div>
          </div>

          {/* DEROULEMENT */}
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
              Comment se déroule un traitement des mouches à {VILLE} ?
            </h2>

            <div className="mt-4 space-y-3 text-muted">
              <p>
                Chaque traitement des mouches à {VILLE} débute par un diagnostic
                et un devis gratuits, afin d’identifier l’origine du problème et
                de proposer une solution adaptée.
              </p>

              <p>
                L’intervention repose sur une approche combinée, comprenant :
              </p>

              <ul className="list-disc pl-5 space-y-2 text-muted">
                <li>un traitement ciblé des zones concernées</li>
                <li>
                  des actions de prévention, visant à limiter les points
                  d’entrée et les zones attractives
                </li>
              </ul>

              <p>
                Cette méthode permet de réduire efficacement la présence des
                mouches tout en limitant les risques de récidive.
              </p>
            </div>
          </div>

          {/* RAPIDITE */}
          <div className="glass rounded-2xl p-6">
            <div className="font-extrabold">
              Intervention rapide contre les mouches à {VILLE}
            </div>

            <p className="mt-3 text-muted">
              Flash Nuisible assure un traitement rapide des mouches à {VILLE},
              avec une organisation pensée pour la réactivité.
            </p>

            <p className="mt-3 text-muted">
              Les interventions sont généralement réalisées sous{" "}
              <strong>48h</strong>, avec une disponibilité <strong>7j/7</strong>{" "}
              et <strong>24h/24</strong>, y compris lorsque la nuisance devient
              envahissante.
            </p>
          </div>

          {/* TARIFS */}
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
              Tarifs de traitement des mouches à {VILLE}
            </h2>

            <p className="mt-4 text-muted">
              Les prestations de traitement des mouches à {VILLE} sont proposées
              avec :
            </p>

            <ul className="mt-4 list-disc pl-5 text-muted space-y-2">
              <li>un devis gratuit</li>
              <li>des tarifs annoncés à l’avance</li>
              <li>une solution adaptée à chaque situation</li>
            </ul>

            <p className="mt-4 text-muted">
              Aucune intervention n’est engagée sans validation préalable.
            </p>
          </div>

          {/* PROBLEME */}
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
              Un problème de mouches à {VILLE} ?
            </h2>

            <p className="mt-4 text-muted">
              Une présence répétée de mouches n’est jamais anodine.
            </p>

            <p className="mt-3 text-muted">
              👉 Contacter une entreprise spécialisée dans le traitement des
              mouches à {VILLE} permet de comprendre rapidement l’origine du
              problème et de mettre en place une solution efficace.
            </p>
          </div>

          {/* CONCLUSION */}
          <div className="glass rounded-2xl p-6">
            <div className="font-extrabold">
              Traitement des mouches à {VILLE} – Flash Nuisible
            </div>

            <p className="mt-3 text-muted">
              Pour toute désinsectisation des mouches à {VILLE}, Flash Nuisible
              vous accompagne avec une approche professionnelle, réactive et
              orientée résultat.
            </p>

            <p className="mt-3 text-muted">
              📍 Intervention à <strong>{VILLE}</strong>, dans{" "}
              <strong>{AREA}</strong>
            </p>

            <p className="mt-3 text-muted">
              📞 Contactez Flash Nuisible pour un diagnostic rapide contre les
              mouches
            </p>

            <div className="mt-4">
              <a href="#contact" className="btn btn-primary">
                Contacter Flash Nuisible
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="section on-dark" id="contact">
        <div className="mx-auto max-w-7xl px-6">
          <ContactSection />
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
